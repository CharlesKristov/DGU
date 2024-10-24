// Import the `sql` object from @vercel/postgres
import { sql } from '@vercel/postgres';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest,res: NextApiResponse) {
    try {
        const { rows } = await sql`
        SELECT 
            s.brand_name,
            s.store_name,
            a.activity_description,
            a.id AS activity_id,
            p.photo_url
        FROM 
            stores s
        JOIN 
            activities a ON s.id = a.store_id and a.is_deleted = false
        JOIN 
            photos p ON a.id = p.activity_id
        WHERE 
            p.created_at = (
                SELECT MIN(created_at) 
                FROM photos 
                WHERE activity_id = a.id
                and is_deleted = false
            )
        ORDER BY 
            a.created_at DESC;  -- Order by the activity's created_at date
        `; 
        res.status(200).json(rows);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}