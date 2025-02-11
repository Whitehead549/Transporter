import { useEffect, useState } from "react";
import { db } from "../Config/Config";
import { doc, getDoc } from "firebase/firestore";

const Package = ({ selectedCode }) => {
  const [deliveryData, setDeliveryData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (selectedCode) {
      fetchDeliveryData();
    }
  }, [selectedCode]);

  const fetchDeliveryData = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, selectedCode, "Package"); // 'selectedCode' is the collection name
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const packages = docSnap.data().packages || [];

        if (packages.length > 0) {
          const firstDelivery = packages[0]; // Get only the first object

          // Extract only the required fields
          const {
            numberOfItems,
            packageDescription,
            packageDimensions,
            packageReferenceNumber,
            packageType,
            packageValue,
            packageWeight,
            specialHandling,
          } = firstDelivery;

          setDeliveryData({
            numberOfItems,
            packageDescription,
            packageDimensions,
            packageReferenceNumber,
            packageType,
            packageValue,
            packageWeight,
            specialHandling,
          });
        } else {
          setDeliveryData(null);
        }
      } else {
        setDeliveryData(null);
      }
    } catch (error) {
      console.error("Error fetching delivery data:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-xs mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-300 text-black">
      <h2 className="text-lg font-semibold mb-2 bg-[#091242] text-white p-2 rounded-t-lg">
      PACKAGE DETAILS
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : deliveryData ? (
        <table className="w-full bg-gray-100">
          <tbody>
            {Object.entries(deliveryData).map(([key, value]) => (
              <tr key={key} className="border-b border-gray-500">
                <th className="px-2 py-1 text-left text-sm font-medium">
                  {key.replace(/([A-Z])/g, " $1").trim()}
                </th>
                <td className="px-2 py-1 text-sm">
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No delivery details available.</p>
      )}
    </div>
  );
};

export default Package;
