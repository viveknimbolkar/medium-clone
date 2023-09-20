import Article from "@/models/Article";
import { dbConnect } from "@/utils/dbConnection";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        dbConnect();
        if (req.query.articleid === 'all-articles') {
            Article.find({}).then(articles => {
                res.status(200).json({ articles: articles })
            }).catch(err => { res.status(500).json({ output: "Error" }) });
        } else {
            Article.findOne({ slug: req.query.articleid }).then(article => {
                console.log(article);
                if (article === null) {
                    res.status(200).json({ article: 'No article found', status: 404 })
                } else {
                    res.status(200).json({ article: article })
                }
            }).catch(err => { console.log(err); res.status(400).json({ output: "Internal Server Error" }) })

        }
    } else if (req.method === 'POST') {
        res.status(400).json({ output: "Request not allowed" })
    }
}
