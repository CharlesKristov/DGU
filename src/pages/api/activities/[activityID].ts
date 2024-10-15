import { sql } from '@vercel/postgres';
import type { NextApiRequest, NextApiResponse } from 'next'
 
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { activityID } = req.query

  try {
      const { rows } = await sql
        `
            SELECT 
                a.id AS activity_id,
                s.store_name,
                a.store_id,
                a.activity_description,
                a.created_by,
                p.id AS photo_id,
                p.photo_url,
                p.photo_description
            FROM 
                activities a
            JOIN 
                photos p ON a.id = p.activity_id
            JOIN
                stores s on a.store_id = s.id
            WHERE 
                a.id = ${activityID?.toString()}; 
        `;      
            res.status(200).json(rows);
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' });
    }
}