import User from "@/models/User";
import jwt from 'jsonwebtoken'
export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { slug } = req.body;
        const jwtToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
        User.findOneAndUpdate({ email: jwtToken.email }, { $addToSet: { savedArticle: slug } }).then(data => {
            return res.status(200).json({ output: "article bookmarked" })
        }).catch(err => {
            console.log(err);
            return res.status(200).json({ output: data })
        })


    } else {
        return res.status(400).json({ output: "Method not allowed!" })
    }
}