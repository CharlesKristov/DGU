import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Importing SQL directly from Vercel Postgres

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { activity, photos, user } = req.body;

        // Check if the user is authorized (must be an admin)
        if (!user || user.role !== 'admin') {
            console.error('User is unauthorized');
            return res.status(401).json({ message: 'Unauthorized' });
        }

        try {
            // 1. Insert new store
            const storeResult = await sql`
                INSERT INTO stores (brand_name, store_name, created_by, created_at, last_updated_by, last_updated_at)
                VALUES (${activity.brand_name}, ${activity.store_name}, ${user.id}, NOW(), ${user.id}, NOW())
                RETURNING id
            `;
            const newStoreId = storeResult.rows[0].id;

            // 2. Insert new activity associated with the new store
            const activityResult = await sql`
                INSERT INTO activities (store_id, activity_description, created_by, created_at, last_updated_by, last_updated_at)
                VALUES (${newStoreId}, ${activity.activity_description}, ${user.id}, NOW(), ${user.id}, NOW())
                RETURNING id
            `;
            const newActivityId = activityResult.rows[0].id;

            // 3. Insert photos associated with the new activity
            for (const photo of photos) {
                await sql`
                    INSERT INTO photos (activity_id, photo_description, photo_url, created_by, created_at, last_updated_by, last_updated_at, is_deleted)
                    VALUES (${newActivityId}, ${photo.photo_description}, ${photo.photo_url}, ${user.id}, NOW(), ${user.id}, NOW(), false)
                `;
            }

            return res.status(201).json({ message: 'New activity, store, and photos created successfully' });
        } catch (error) {
            console.error('Error creating new activity, store, and photos:', error);
            return res.status(500).json({ message: 'Failed to create new activity, store, and photos', error });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
