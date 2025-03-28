// Import the `sql` object from @vercel/postgres
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    try {
        const { rows } = await sql`
        SELECT
            id,
            product_name,
            product_description,
            photo_url
        FROM 
            products
        WHERE 
            is_deleted = false
        ORDER BY 
            created_at ASC;  -- Order by the news's created_at date
        `; 
        res.status(200).json(rows);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}