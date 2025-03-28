import { NextApiRequest, NextApiResponse } from 'next';
import { sql } from '@vercel/postgres';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Method Not Allowed' });
    }

    const { product, user } = req.body;

    // Check if the user is authorized (must be an admin)
    if (!user || user.role !== 'admin') {
        console.error('User is unauthorized');
        return res.status(401).json({ message: 'Unauthorized' });
    }

    // Validate required fields
    if (!product.id) {
        return res.status(400).json({ message: 'Product ID is required' });
    }

    try {
        await sql`
            UPDATE products
            SET product_name = ${product.product_name},
                product_description = ${product.product_description},
                last_updated_by = ${user.id},
                last_updated_at = NOW(),
                photo_url = ${product.photo_url}
            WHERE id = ${product.id};
        `;

        return res.status(200).json({ message: 'Product updated successfully' });
    } catch (error) {
        console.error('Error updating product:', error);
        return res.status(500).json({ message: 'Failed to update product', error });
    }
}
