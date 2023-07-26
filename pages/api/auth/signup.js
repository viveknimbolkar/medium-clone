import User from '@/models/User';
import { dbConnect } from '@/utils/dbConnection';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { newName, newEmail, newPassword, verifyPassword } = req.body;
      await dbConnect();
      const userInstance = new User({ name: newName, email: newEmail, password: newPassword });
      const result = await userInstance.save();
      if(result)
        res.status(200).json({ message: "Registration successful" })
    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
  }
}