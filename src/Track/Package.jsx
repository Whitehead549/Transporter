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
      const docRef = doc(db, selectedCode, "Package");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const packages = docSnap.data().packages || [];

        if (packages.length > 0) {
          const firstDelivery = packages[0];

          const {
            TotalItems,
            PackageDescription,
            PackageDimensions,
            PackageReferenceNumber,
            PackageType,
            PackageValue,
            PackageWeight,
            SpecialHandling,
          } = firstDelivery;

          setDeliveryData({
            TotalItems,
            PackageDescription,
            PackageDimensions,
            PackageReferenceNumber,
            PackageType,
            PackageValue,
            PackageWeight,
            SpecialHandling,
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
    <div className="max-w-xl mx-auto text-black h-[400px] overflow-y-auto">
    <h2 className="text-lg font-semibold mb-2 bg-[#091242] text-white p-2 rounded-t-lg text-center">
      DETAILS
    </h2>

    {loading ? (
      <p className="text-center text-gray-500">Loading...</p>
    ) : deliveryData ? (
      <div className="overflow-x-auto">
        <table className="w-full bg-white border border-gray-300 rounded-md">
          <tbody>
            {Object.entries(deliveryData).map(([key, value], index) => (
              <tr
                key={key}
                className={`border-b border-gray-300 ${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                }`}
              >
                <th className="w-48 px-4 py-2 text-left text-xs font-semibold text-gray-700 align-middle break-words whitespace-normal truncate">
                  <span title={key.replace(/([A-Z])/g, " $1").trim()}>
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </span>:
                </th>
                <td className="px-4 py-2 text-sm text-gray-600 align-middle">
                  {typeof value === "boolean" ? (value ? "Yes" : "No") : value}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p className="text-center text-gray-500">No delivery details available.</p>
    )}
  </div>
  );
};

export default Package;
