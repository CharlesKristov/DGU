// Import the `sql` object from @vercel/postgres
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    try {
        const { rows } = await sql`
        SELECT 
            s.brand_name,
            s.store_name,
            a.id as activity_id,
            p.photo_url
        FROM 
            stores s
        JOIN 
            activities a ON s.id = a.store_id
        JOIN 
            photos p ON a.id = p.activity_id
        ORDER BY 
            a.created_at DESC;
        `; 
        res.status(200).json(rows);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}