import User from "@/models/User";
import { dbConnect } from "@/utils/dbConnection";

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { userid } = req.body;
        dbConnect();
        User.findOne({ userid: userid }).then(user => {
            console.log(data);
            if(user === null)
                return res.status(200).json({ user: "User dosen't exist!" })
            else 
                return res.status(200).json({ user: user })
        }).catch(err => { console.log(err); return res.status(500).json({ output:"Internal Server Error" })});
    } else {

    }
}