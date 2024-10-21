import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { put } from '@vercel/blob';
import { readFileSync } from 'fs'; // Import fs to read files

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
        const form = formidable({
            multiples: false, // Set to true if you want to allow multiple files
        });

        // Parse the incoming form data
        form.parse(req, async (err, fields, files) => {
            if (err) {
                console.error('Error parsing form data:', err);
                return res.status(500).json({ error: 'Error parsing form data' });
            }

            // Check if the uploaded file is present
            const uploadedFile = files.image as formidable.File | formidable.File[];

            if (!uploadedFile || (Array.isArray(uploadedFile) && uploadedFile.length === 0)) {
                return res.status(400).json({ error: 'No file uploaded. Please upload an image file.' });
            }

            // Handle single file upload
            const fileToUpload = Array.isArray(uploadedFile) ? uploadedFile[0] : uploadedFile;

            console.log('Uploaded file:', fileToUpload); // Log details of the uploaded file
            console.log('File size:', fileToUpload.size); // Log the size

            // Validate the uploaded file
            if (!allowedImageTypes.includes(fileToUpload.mimetype || '')) {
                return res.status(400).json({ error: 'Invalid file type. Only images are allowed.' });
            }

            // Check file size
            if (fileToUpload.size > maxFileSize) {
                return res.status(400).json({ error: `File size exceeds the limit of ${maxFileSize / (1024 * 1024)} MB` });
            }

            try {
                // Read the file as a buffer before uploading
                const uploadedUrl = await uploadToVercelBlob(fileToUpload);
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
async function uploadToVercelBlob(file: formidable.File) {
    const fileBuffer = readFileSync(file.filepath); // Read the file as a buffer
    const blob = await put(`photos/${file.originalFilename}`, fileBuffer, {
        access: 'public',
        contentType: file.mimetype || 'image/jpeg', // Set the correct content type
    });
    return blob.url; // Return the blob URL
}
