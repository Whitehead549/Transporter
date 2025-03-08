import React, { useState, useEffect } from "react";
import { doc, setDoc, getDoc, onSnapshot } from "firebase/firestore";
import { db } from "../Config/Config";
import { Client, Storage, ID } from "appwrite";
import { Trash2 } from "lucide-react";

const Images = ({ selectedCode }) => {
  const [files, setFiles] = useState([]);
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadStatus, setUploadStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const client = new Client()
    .setEndpoint("https://cloud.appwrite.io/v1")
    .setProject("67703f600001aff47a10");
  const storage = new Storage(client);

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

  const handleFileChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles([...files, ...selectedFiles]);
  };

  const handleRemoveImage = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

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

  const handleDeleteImage = async (imageId) => {
    if (!window.confirm("Are you sure you want to delete this image?")) return;
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
    <div className="p-6 bg-white shadow-md rounded-lg max-w-3xl mx-auto">
      <h3 className="text-lg font-semibold mb-4 text-center">Upload Images</h3>
      <input
        type="file"
        multiple
        accept="image/*"
        onChange={handleFileChange}
        className="w-full mb-3 border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {files.length > 0 && (
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
          {files.map((file, index) => (
            <div key={index} className="relative">
              <img
                src={URL.createObjectURL(file)}
                alt="preview"
                className="w-full h-24 object-cover rounded-lg"
              />
              <button
                onClick={() => handleRemoveImage(index)}
                className="absolute top-1 right-1 bg-red-500 text-white text-xs px-2 py-1 rounded-full shadow-md"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        onClick={handleUpload}
        className="w-full bg-blue-600 text-white py-2 mt-3 rounded-md transition disabled:opacity-50 hover:bg-blue-800"
        disabled={loading}
      >
        {loading ? "Uploading..." : "Upload"}
      </button>

      {uploadStatus && <p className="mt-2 text-sm text-gray-700 text-center">{uploadStatus}</p>}

      <h3 className="text-lg font-semibold mt-6 text-center">Uploaded Images</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">
        {uploadedImages.map((image) => (
          <div key={image.id} className="relative border p-2 rounded-lg shadow-md">
            <img
              src={image.url}
              alt="uploaded"
              className="w-full h-32 object-cover rounded-lg"
            />
            <button
              onClick={() => handleDeleteImage(image.id)}
              className="absolute top-2 right-2 bg-red-600 text-white p-2 rounded-full shadow-lg flex items-center justify-center hover:bg-red-800 transition"
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Images;
