import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../Config/Config";
import { Client, Storage, ID } from "appwrite";

const Images = ({ selectedCode }) => {
  const [files, setFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  // Initialize Appwrite storage client
  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67703f600001aff47a10");
  const storage = new Storage(client);

  // Fetch images from Firestore on component mount
  useEffect(() => {
    if (!selectedCode) return;

    const docRef = doc(db, selectedCode, "Images");
    const unsubscribe = onSnapshot(docRef, (docSnap) => {
      if (docSnap.exists()) {
        setUploadedImages(docSnap.data().images || []);
      } else {
        setUploadedImages([]);
      }
    });

    return () => unsubscribe();
  }, [selectedCode]);

  // Handle file selection
  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  // Remove selected file before upload
  const handleRemoveImage = (index) => {
    setFiles((prev) => prev.filter((_, i) => i !== index));
  };

  // Upload images to Appwrite and store in Firestore
  const handleUpload = async (e) => {
    e.preventDefault();
    if (files.length === 0) {
      setUploadStatus("Please select at least one image.");
      return;
    }
    setLoading(true);
    try {
      const newImages = [];

      for (const file of files) {
        const response = await storage.createFile(
          "6770453700013c9a128c",
          ID.unique(),
          file
        );

        if (!response || !response.$id) {
          throw new Error("Failed to upload file to Appwrite.");
        }

        const fileUrl = `https://cloud.appwrite.io/v1/storage/buckets/6770453700013c9a128c/files/${response.$id}/view?project=67703f600001aff47a10`;

        newImages.push({
          id: response.$id,
          url: fileUrl,
          uploadedAt: new Date().toISOString(),
        });
      }

      const docRef = doc(db, selectedCode, "Images");
      const docSnap = await getDoc(docRef);
      const existingData = docSnap.exists() ? docSnap.data().images || [] : [];
      const updatedImages = [...existingData, ...newImages];

      await setDoc(docRef, { images: updatedImages }, { merge: true });
      setUploadStatus("Upload successful!");
      setFiles([]);
    } catch (error) {
      console.error("Upload error:", error);
      setUploadStatus(`Upload failed: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  // Delete image from Appwrite and Firestore
  const handleDeleteImage = async (imageId) => {
    try {
      await storage.deleteFile("6770453700013c9a128c", imageId);

      const docRef = doc(db, selectedCode, "Images");
      const updatedImages = uploadedImages.filter((img) => img.id !== imageId);

      await setDoc(docRef, { images: updatedImages }, { merge: true });
      setUploadedImages(updatedImages);
    } catch (error) {
      console.error("Delete error:", error);
    }
  };

  return (
    <div className="p-6 bg-white shadow-md rounded-lg max-w-lg sm:max-w-xl md:max-w-2xl lg:max-w-3xl mx-auto">
      {/* Upload Section */}
      <h3 className="text-lg font-semibold mb-4 text-center sm:text-left">Upload Images</h3>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="w-full mb-3 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {/* Selected Images Preview */}
      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
          {files.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded z-50 pointer-events-auto"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Upload Button */}
      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 text-white py-2 mt-3 rounded-md transition disabled:opacity-50 disabled:cursor-not-allowed hover:bg-blue-800"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {/* Upload Status */}
      {uploadStatus && <p className="mt-2 text-sm text-gray-700 text-center">{uploadStatus}</p>}

      {/* Uploaded Images Section */}
      <h3 className="text-lg font-semibold mt-6 text-center sm:text-left">Uploaded Images</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
        {uploadedImages.map((image) => (
          <div key={image.id} className="relative border p-2 rounded-lg shadow-md">
            <img
              src={image.url}
              alt="uploaded"
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              onClick={() => handleDeleteImage(image.id)}
              onTouchStart={() => handleDeleteImage(image.id)} // Fix for mobile clicks
              className="absolute top-1 right-1 bg-red-500 text-white text-xs px-1 rounded z-50 pointer-events-auto"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
