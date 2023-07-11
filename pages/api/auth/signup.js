import User from '@/models/User';
export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { newName, newEmail, newPassword, verifyPassword } = req.body;
      console.log(newName, newEmail, newPassword, verifyPassword);
      // const userFound = await User.findOne({ newEmail });

      // if (userFound) {
      //   return res.status(400).json({
      //     message: "User already exists",
      //   });
      // }
      const user = new User({
        name: newName,
        email: newEmail,
        password: newPassword
      })


      // await user.encryptPassword();

      await user.save();

      const token = user.generateToken();
      console.log("token ", token);
      res.status(200).json({ message: "User registered successfully" })


    } catch (error) {
      res.status(500).json({ message: "Internal Server Error", error: error.message })
    }
  }
}