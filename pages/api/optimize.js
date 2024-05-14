import axios from 'axios';

export default async function handler(req, res) {
    if (req.method === 'POST') {
        try {
            const response = await axios.post('http://127.0.0.1:8000/optimize', req.body, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            res.status(200).json(response.data);
        } catch (error) {
            console.error('Error fetching data from Flask API:', error.message);
            res.status(500).json({ error: 'Failed to fetch data from Flask API' });
        }
    } else {
        res.status(405).json({ error: 'Method not allowed' });
    }
}
