import multer from 'multer';

// pages/api/upload.js

import { uploadMiddleware } from '../../lib/upload';

export default function handler(req, res) {
  uploadMiddleware(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading.
      return res.status(500).json({ error: err.message });
    } else if (err) {
      // An unknown error occurred when uploading.
      return res.status(500).json({ error: 'Unknown error occurred' });
    }

    // Get the filename of the uploaded file
    const filename = req.file.filename;

    // Return the URL to access the uploaded image
    const imageUrl = `/uploads/${filename}`;
    res.status(200).json({ imageUrl });
  });
}

export const config = {
  api: {
    bodyParser: false,
  },
};
