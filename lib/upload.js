// lib/upload.js

import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    fs.mkdirSync(uploadDir, { recursive: true });
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const filename = uuidv4() + path.extname(file.originalname);
    cb(null, filename);
  }
});

export const uploadMiddleware = multer({ storage: storage }).single('image');
