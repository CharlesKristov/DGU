import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Importing SQL directly from Vercel Postgres

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { news_name, photo_url, user } = req.body;

        // Check if the user is authorized (must be an admin)
        if (!user || user.role !== 'admin') {
            console.error('User is unauthorized');
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {

            // Insert new news entry
            await sql`
                INSERT INTO news ( news_name, photo_url, created_by, created_at, last_updated_by, last_updated_at, is_deleted)
                VALUES ( ${news_name}, ${photo_url}, ${user.id}, NOW(), ${user.id}, NOW(), false)
            `;

            return res.status(201).json({ message: 'News created successfully', news_name });
        } catch (error) {
            console.error('Error creating news:', error);
            return res.status(500).json({ message: 'Failed to create news', error });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
