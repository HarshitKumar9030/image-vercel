// pages/gallery.js

import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const Gallery = ({ imageUrls }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {imageUrls.map((imageUrl, index) => (
        <div key={index} className="m-4">
          <Image src={imageUrl} alt={`Image ${index + 1}`} width={300} height={200} />
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
  const imageFiles = fs.readdirSync(uploadsDir);
  const imageUrls = imageFiles.map((fileName) => `/uploads/${fileName}`);
  
  return {
    props: {
      imageUrls,
    },
  };
}

export default Gallery;
