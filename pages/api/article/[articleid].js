import User from "@/models/User";

export default async function handler(req, res) {
    if (req.method === 'GET') {
        if (req.query.articleid === 'all-articles') {
            User.find({}).exec().then(user => {
                console.log("user", user);
                res.status(200).json({ articles: user })
            }).catch(err => { res.status(500).json({ output: "Error" }) });
        } else {
            res.status(400).json({ output: "specific article" })
        }
    } else if (req.method === 'POST') {
        res.status(400).json({ output: "Request not allowed" })
    }
}
