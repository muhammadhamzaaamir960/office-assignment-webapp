//create a simple hello world api

export default async (req, res) => {
    res.status(200).json({ text: 'Hello' });
    }
    