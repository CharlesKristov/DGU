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

    try {
        // Insert new product
        const productResult = await sql`
            INSERT INTO products (product_name, product_description, created_by, created_at, last_updated_by, last_updated_at, is_deleted, photo_url)
            VALUES (${product.product_name}, ${product.product_description}, ${user.id}, NOW(), ${user.id}, NOW(), false, ${product.photo_url})
            RETURNING id;
        `;

        const newProductId = productResult.rows[0].id;

        return res.status(201).json({ message: 'Product created successfully', product_id: newProductId });
    } catch (error) {
        console.error('Error creating product:', error);
        return res.status(500).json({ message: 'Failed to create product', error });
    }
}
