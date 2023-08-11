import Article from "@/models/Article";
import User from "@/models/User";
import { dbConnect } from "@/utils/dbConnection";
import jwt from 'jsonwebtoken'
import slugify from "slugify";
export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            dbConnect();
            const jwtToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
            User.findOneAndUpdate({ email: jwtToken.email }, { $push: { articles: req.body } }, { new: true }).then(data => {
                console.log("article saved in user db");
            }).catch(err => {
                res.status(500).json({ error: err })
            })
            const article = new Article({
                slug: slugify(req.body?.title, { lower: true, }),
                authorName: jwtToken.name,
                date: Date.now(),
                heading: req.body.title,
                profileImage: req.body?.image,
                categoryLink: req.body?.categoryLink,
                categogy: req.body.category,
                thumbnail: req.body?.thumbnail,
                link: `http://localhost:3000/${slugify(req.body?.title, { lower: true, })}`,
                article: req.body?.article,
                socialLinks: req.body?.links
            })
            const saveArticle = await article.save();
            if (saveArticle) {
                res.status(200).json({ output: "Article Saved" });
            } else {
                res.status(500).json({ error: "Internal server error!" })
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })

    }
}