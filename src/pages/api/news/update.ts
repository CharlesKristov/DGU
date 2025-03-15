import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Importing SQL directly from Vercel Postgres

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);
    if (req.method === 'POST') {
        const { news_id, news_name, photo_url, user } = req.body; // Get news ID, updated fields, and user info
        // Authorization check (must be admin)
        if (!user || user.role !== "admin") {
            console.error("User is unauthorized");
            return res.status(401).json({ message: 'Unauthorized' });
        }
        

        if (!news_id) {
            console.log("id mana");
            return res.status(400).json({ message: 'Missing news ID' });
        }



        if (!news_id || !news_name || !photo_url) {
        return res.status(400).json({ message: "Missing required fields" });
        }


        try {
            // Update the news entry
            await sql`
                UPDATE news
                SET 
                    news_name = COALESCE(${news_name}, news_name),
                    photo_url = COALESCE(${photo_url}, photo_url),
                    last_updated_by = ${user.id},
                    last_updated_at = NOW()
                WHERE id = ${news_id}
            `;

            return res.status(200).json({ message: 'News updated successfully' });
        } catch (error) {
            console.error('Error updating news:', error);
            return res.status(500).json({ message: 'Failed to update news', error });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
