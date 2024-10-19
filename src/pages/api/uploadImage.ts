// /pages/api/uploadImage.ts
import { NextApiRequest, NextApiResponse } from 'next';
import formidable, { File as FormidableFile } from 'formidable';
import { put } from '@vercel/blob'; // Import Vercel Blob storage client

// Disable body parsing to allow formidable to handle file uploads
export const config = {
    api: {
        bodyParser: false,
    },
};

// Allowed image MIME types
const allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
const maxFileSize = 10 * 1024 * 1024; // Maximum file size (10 MB)

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const form = new formidable.IncomingForm({
            multiples: false, // Only handle single file uploads
        });

        // Parse the incoming form data
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                return res.status(500).json({ error: 'Error parsing form data' });
            }

            // Check if file is present
            const uploadedFile = files.image as unknown as FormidableFile; // Use FormidableFile type here
            if (!uploadedFile) {
                return res.status(400).json({ error: 'No file uploaded. Please upload an image file.' });
            }

            // Ensure the uploaded file is valid
            if (!allowedImageTypes.includes(uploadedFile.mimetype || '')) {
                return res.status(400).json({ error: 'Invalid file type. Only images are allowed.' });
            }

            // Check file size
            if (uploadedFile.size > maxFileSize) {
                return res.status(400).json({ error: `File size exceeds the limit of ${maxFileSize / (1024 * 1024)} MB` });
            }

            try {
                const uploadedUrl = await uploadToVercelBlob(uploadedFile);
                // Return the URL of the uploaded image
                return res.status(200).json({ url: uploadedUrl });
            } catch (error) {
                console.error('Error uploading image to Vercel Blob:', error);
                return res.status(500).json({ error: 'Failed to upload image' });
            }
        });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}

// Function to upload file to Vercel Blob
async function uploadToVercelBlob(file: FormidableFile) {
    const blob = await put(`photos/${file.originalFilename}`, file.filepath, {
        access: 'public',
    });
    return blob.url; // Return the blob URL
}
