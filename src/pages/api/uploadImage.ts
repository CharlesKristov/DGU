import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { put } from '@vercel/blob';
import { promises as fs } from 'fs'; // Use async fs methods

export const config = {
    api: {
        bodyParser: false, // Disables default Next.js body parsing
    },
};

const allowedImageTypes = ['image/jpeg', 'image/png', 'image/jpg'];
const maxFileSize = 10 * 1024 * 1024; // 10 MB

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
    }

    const form = formidable({
        multiples: false, // Only allow single file
    });

    try {
        const [, files] = await new Promise<[formidable.Fields, formidable.Files]>((resolve, reject) => {
            form.parse(req, (err, fields, files) => {
                if (err) reject(err);
                else resolve([fields, files]);
            });
        });

        const uploadedFile = files.image as formidable.File | formidable.File[];

        if (!uploadedFile || (Array.isArray(uploadedFile) && uploadedFile.length === 0)) {
            return res.status(400).json({ error: 'No file uploaded. Please upload an image file.' });
        }

        const fileToUpload = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile;

        if (!allowedImageTypes.includes(fileToUpload.mimetype || '')) {
            return res.status(400).json({ error: 'Invalid file type. Only JPG and PNG images are allowed.' });
        }

        if (fileToUpload.size > maxFileSize) {
            return res.status(400).json({ error: `File size exceeds 10 MB limit.` });
        }

        // Upload to Vercel Blob
        const uploadedUrl = await uploadToVercelBlob(fileToUpload);

        return res.status(200).json({ url: uploadedUrl });
    } catch (error) {
        console.error('Error handling file upload:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

async function uploadToVercelBlob(file: formidable.File) {
    try {
        const fileBuffer = await fs.readFile(file.filepath); // Use non-blocking read
        const blob = await put(`photos/${file.newFilename}`, fileBuffer, {
            access: 'public',
            contentType: file.mimetype || 'image/jpeg',
        });
        return blob.url;
    } catch (error) {
        console.error('Error uploading to Vercel Blob:', error);
        throw new Error('Failed to upload image');
    }
}
