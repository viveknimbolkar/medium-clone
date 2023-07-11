
export default function handler(req, res) {
    if (req.method === 'POST') {
        const { email, password } = req.body;
        console.log(email, password);
        
        return res.status(200).json({ output: "working" });
    }
    return res.status(200).json({ output: "Something went wrong" })
}