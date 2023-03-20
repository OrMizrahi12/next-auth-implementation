import { registerUser } from "@/logic/usersAuth/registerAuth";

export default async function handler(req, res) {
    if (req.method === "POST") {
        if (!req.body) return res.status(404).json({ err: "No form data provided" });

        const { email, password } = req.body;

        try {
            const response = await registerUser(email, password);
            if (response.success === true) {
              res.status(200).json({data: response.data})
            }
            else{
                res.status(401).json({data: response.data})
            }
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    } else {
        res.status(404).json({ message: "Not found" });
    }
}