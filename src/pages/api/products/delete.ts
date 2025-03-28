import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { id, user } = req.body;

    // Check if the user is authorized (must be an admin)
    if (!user || user.role !== 'admin') {
        console.error('User is unauthorized');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Validate required fields
    if (!id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        await sql`
            UPDATE products
            SET is_deleted = true,
                last_updated_by = ${user.id},
                last_updated_at = NOW()
            WHERE id = ${id};
        `;

        return res.status(200).json({ message: 'Product deleted successfully' });
    } catch (error) {
        console.error('Error deleting product:', error);
        return res.status(500).json({ message: 'Failed to delete product', error });
    }
}
