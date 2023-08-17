import User from "@/models/User";
import { dbConnect } from "@/utils/dbConnection";
import jwt from 'jsonwebtoken'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        await dbConnect();
        const userFound = await User.findOne({ email: email, password: password });
        console.log(userFound);
        if (!userFound || userFound === null)
            return res.status(200).json({ output: "Invalid username or password" });
        return res.status(200).json({ token: jwt.sign({ email: userFound.email, name: userFound.name }, process.env.JWT_SECRET) });
    }
    return res.status(200).json({ output: "Something went wrong" })
}