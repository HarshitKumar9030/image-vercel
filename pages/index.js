// pages/index.js

import Link from 'next/link';
import { useState } from 'react';

const Index = () => {
  const [message, setMessage] = useState('');

  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;
    
    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        setMessage('Image uploaded successfully!');
      } else {
        setMessage('Failed to upload image');
      }
    } catch (error) {
      setMessage('Error uploading image');
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h1 className="text-3xl mb-4 text-center">Image Hosting App</h1>
        <input type="file" accept="image/*" onChange={handleFileUpload} className="mb-4"/>
        {message && <p className="text-green-500 text-center">{message}</p>}
      </div>
      <Link href="/gallery">
        <a className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View Gallery
        </a>
      </Link>
    </div>
  );
};

export default Index;
