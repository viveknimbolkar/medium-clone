import User from "@/models/User";
import { dbConnect } from "@/utils/dbConnection";
import jwt from 'jsonwebtoken'
export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            dbConnect();
            const jwtToken = jwt.verify(req.headers.authorization, process.env.JWT_SECRET);
            User.findOneAndUpdate({ email: jwtToken.email }, { $push: { articles: req.body } }, { new: true }).then(data => {
                res.status(500).json({ output: "Article Saved" })
                ;
            }).catch(err => {
                res.status(500).json({ error: err })
            })

        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })

    }
}