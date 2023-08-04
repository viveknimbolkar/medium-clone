import formidable from "formidable";
export default async function handler(req, res) {
    const form = formidable({});
    try {
        if (req.method === 'POST') {
            form.parse(req, (err, fields, files) => {
                if (err)
                    res.status(500).json({ output: "Internal Server Error" });

                console.log(fields, files);
            res.status(200).json({ output: fields });

            });
            res.status(200).json({ output: 'ok' });
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: error })
    }
}