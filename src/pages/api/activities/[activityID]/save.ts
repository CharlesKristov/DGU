import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres'; // Importing SQL directly from Vercel Postgres

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    
    const { activityID } = req.query; // Get the activity ID from the URL

    if (req.method === 'PUT') {
        const { photos, activity, user } = req.body; // Extract photos, activity, store, and user from the body
        if (!user || user.role !== "admin") {
            console.error("User is unauthorized");
            return res.status(401).json({ message: 'Unauthorized' });
        }
        try {
            // 1. Update store details (brand_name, store_name)
            await sql`
                UPDATE stores
                SET brand_name = ${activity.brand_name}, store_name = ${activity.store_name}, last_updated_by = ${user.id}, last_updated_at = NOW()
                WHERE id = ${activity.store_id}
            `;

            // 2. Update activity description
            await sql`
                UPDATE activities
                SET activity_description = ${activity.activity_description}, last_updated_by = ${user.id}, last_updated_at = NOW()
                WHERE id = ${activityID?.toString()}
            `;

            // 3. "Deactivate" (soft delete) existing photos by setting is_deleted = true
            await sql`
                UPDATE photos 
                SET is_deleted = true, last_updated_by = ${user.id}, last_updated_at = NOW() 
                WHERE activity_id = ${activityID?.toString()}
            `;

            // 4. Insert or update photos
            for (const photo of photos) {
                if (photo.photo_id) {
                    // Update existing photo (reactivate if it was marked as deleted)
                    await sql`
                        UPDATE photos 
                        SET photo_description = ${photo.photo_description}, photo_url = ${photo.photo_url}, is_deleted = false, last_updated_by = ${user.id}, last_updated_at = NOW()
                        WHERE id = ${photo.photo_id}
                    `;
                } else {
                    // Insert new photo
                    await sql`
                        INSERT INTO photos (activity_id, photo_description, photo_url, created_by, created_at, last_updated_by, last_updated_at, is_deleted) 
                        VALUES (${activityID?.toString()}, ${photo.photo_description}, ${photo.photo_url}, ${user.id}, NOW(), ${user.id}, NOW(), false)
                    `;
                }
            }

            return res.status(200).json({ message: 'Store, activity, and photos updated successfully' });
        } catch (error) {
            console.error('Error updating store, activity, and photos:', error);
            return res.status(500).json({ message: 'Failed to update store, activity, and photos', error });
        }
    } else {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }
}
