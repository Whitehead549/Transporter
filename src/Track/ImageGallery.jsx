import { useEffect, useState } from "react";
import { db } from "../Config/Config"; // Adjust the import path based on your Firebase config location
import { collection, doc, getDoc } from "firebase/firestore";
import { FaImage } from "react-icons/fa"; // Install react-icons if not already installed

const ImageGallery = ({selectedCode}) => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const docRef = doc(collection(db, selectedCode), "Images");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.images && Array.isArray(data.images)) {
            setImages(data.images);
          }
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  return (
    <div className="max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl mx-auto text-black h-[520px] overflow-y-auto">
      <h2 className="text-lg font-semibold mb-2 bg-[#091242] text-white p-2 rounded-t-lg text-center">
        IMAGE GALLERY
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : images.length === 0 ? (
        <div className="text-center text-gray-500">
          <FaImage className="text-4xl mx-auto mb-2" />
          <p>No images available</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden transform transition duration-300 hover:scale-105 w-full "
            >
              <img
                src={image.url}
                alt={`Image ${index + 1}`}
                className="w-full h-52 object-contain"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
