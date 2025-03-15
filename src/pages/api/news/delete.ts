import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Importing SQL directly from Vercel Postgres

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'DELETE') {
        const { news_id, user } = req.body; // Get the news ID and user from the request body

        if (!user || user.role !== "admin") {
            console.error("User is unauthorized");
            return res.status(401).json({ message: 'Unauthorized' });
        }

        if (!news_id) {
            return res.status(400).json({ message: 'Missing news ID' });
        }

        try {
            // Soft delete the news by setting is_deleted = true
            await sql`
                UPDATE news
                SET is_deleted = true, last_updated_by = ${user.id}, last_updated_at = NOW()
                WHERE id = ${news_id}
            `;

            return res.status(200).json({ message: 'News deleted successfully' });
        } catch (error) {
            console.error('Error deleting news:', error);
            return res.status(500).json({ message: 'Failed to delete news', error });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
