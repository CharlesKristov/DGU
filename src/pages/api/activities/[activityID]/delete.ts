import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Importing SQL directly from Vercel Postgres

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    const { activityID } = req.query; // Get the activity ID from the URL

    if (req.method === 'DELETE') {
        const { user } = req.body; // Extract user from the body for authorization

        if (!user || user.role !== "admin") {
            console.error("User is unauthorized");
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            // Soft delete the activity by setting is_deleted = true
            await sql`
                UPDATE activities
                SET is_deleted = true, last_updated_by = ${user.id}, last_updated_at = NOW()
                WHERE id = ${activityID?.toString()}
            `;

            return res.status(200).json({ message: 'Activity deleted successfully' });
        } catch (error) {
            console.error('Error deleting activity:', error);
            return res.status(500).json({ message: 'Failed to delete activity', error });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
