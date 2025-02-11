import { useState, useEffect } from "react";
import { db } from "../Config/Config"; // Ensure Firebase is configured
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Package({ selectedCode }) {
  // State variables for form inputs
  const [packageType, setPackageType] = useState("");
  const [packageWeight, setPackageWeight] = useState("");
  const [packageDimensions, setPackageDimensions] = useState("");
  const [packageDescription, setPackageDescription] = useState("");
  const [numberOfItems, setNumberOfItems] = useState("");
  const [packageValue, setPackageValue] = useState("");
  const [specialHandling, setSpecialHandling] = useState("");
  const [packageReferenceNumber, setPackageReferenceNumber] = useState("");
  const [loading, setLoading] = useState(false);
  const [packages, setPackages] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Fetch packages when selectedCode changes
  useEffect(() => {
    if (selectedCode) fetchPackages();
  }, [selectedCode]);

  // Fetch packages from Firestore
  const fetchPackages = async () => {
    if (!selectedCode) return;
    try {
      const docRef = doc(db, selectedCode, "Package");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPackages(docSnap.data().packages || []);
      } else {
        setPackages([]);
      }
    } catch (error) {
      console.error("Error fetching packages: ", error);
    }
  };

  // Handle form submission
  const handleSubmit = async () => {
    if (
      !packageType ||
      !packageWeight ||
      !packageDimensions ||
      !packageDescription ||
      !numberOfItems ||
      !packageValue ||
      !packageReferenceNumber
    ) {
      alert("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const docRef = doc(db, selectedCode, "Package");
      const docSnap = await getDoc(docRef);
      const existingPackages = docSnap.exists() ? docSnap.data().packages || [] : [];

      let updatedPackages;
      if (editingId) {
        updatedPackages = existingPackages.map((pkg) =>
          pkg.id === editingId
            ? {
                id: editingId,
                packageType,
                packageWeight,
                packageDimensions,
                packageDescription,
                numberOfItems,
                packageValue,
                specialHandling,
                packageReferenceNumber,
              }
            : pkg
        );
        setEditingId(null);
      } else {
        const newPackage = {
          id: new Date().getTime().toString(),
          packageType,
          packageWeight,
          packageDimensions,
          packageDescription,
          numberOfItems,
          packageValue,
          specialHandling,
          packageReferenceNumber,
        };
        updatedPackages = [...existingPackages, newPackage];
      }

      await setDoc(docRef, { packages: updatedPackages }, { merge: true });
      alert("Package saved successfully");
      fetchPackages();
      resetForm();
    } catch (error) {
      console.error("Error saving package: ", error);
    }
    setLoading(false);
  };

  // Reset form fields
  const resetForm = () => {
    setPackageType("");
    setPackageWeight("");
    setPackageDimensions("");
    setPackageDescription("");
    setNumberOfItems("");
    setPackageValue("");
    setSpecialHandling("");
    setPackageReferenceNumber("");
  };

  // Handle editing a package
  const handleEdit = (pkg) => {
    setEditingId(pkg.id);
    setPackageType(pkg.packageType);
    setPackageWeight(pkg.packageWeight);
    setPackageDimensions(pkg.packageDimensions);
    setPackageDescription(pkg.packageDescription);
    setNumberOfItems(pkg.numberOfItems);
    setPackageValue(pkg.packageValue);
    setSpecialHandling(pkg.specialHandling);
    setPackageReferenceNumber(pkg.packageReferenceNumber);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">
        {editingId ? `Edit Package for ${selectedCode}` : `Create New Package for ${selectedCode}`}
      </h2>

      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Package Type"
            value={packageType}
            onChange={(e) => setPackageType(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Package Weight"
            value={packageWeight}
            onChange={(e) => setPackageWeight(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Package Dimensions"
            value={packageDimensions}
            onChange={(e) => setPackageDimensions(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Package Description"
            value={packageDescription}
            onChange={(e) => setPackageDescription(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="number"
            placeholder="Number of Items"
            value={numberOfItems}
            onChange={(e) => setNumberOfItems(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text" // Changed from number to text
            placeholder="Package Value"
            value={packageValue}
            onChange={(e) => setPackageValue(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Special Handling"
            value={specialHandling}
            onChange={(e) => setSpecialHandling(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Package Reference Number"
            value={packageReferenceNumber}
            onChange={(e) => setPackageReferenceNumber(e.target.value)}
            className="w-full p-2 border rounded"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition"
          >
            {loading ? "Saving..." : editingId ? "Update Package" : "Create Package"}
          </button>
        </div>
      </form>

      <h2 className="text-xl font-semibold mt-6 mb-4">All Packages</h2>
      {packages.length > 0 ? (
        <ul className="space-y-4">
          {packages.map((pkg) => (
            <li key={pkg.id} className="p-4 border rounded bg-gray-100 flex justify-between">
              <div>
                <p className="text-gray-700"><span className="font-semibold">Package Type:</span> {pkg.packageType}</p>
                <p className="text-gray-700"><span className="font-semibold">Package Weight:</span> {pkg.packageWeight}</p>
                <p className="text-gray-700"><span className="font-semibold">Package Dimensions:</span> {pkg.packageDimensions}</p>
                <p className="text-gray-700"><span className="font-semibold">Package Description:</span> {pkg.packageDescription}</p>
                <p className="text-gray-700"><span className="font-semibold">Number of Items:</span> {pkg.numberOfItems}</p>
                <p className="text-gray-700"><span className="font-semibold">Package Value:</span> {pkg.packageValue}</p>
                <p className="text-gray-700"><span className="font-semibold">Special Handling:</span> {pkg.specialHandling}</p>
                <p className="text-gray-700"><span className="font-semibold">Package Reference Number:</span> {pkg.packageReferenceNumber}</p>
                <button onClick={() => handleEdit(pkg)} className="w-full bg-yellow-500 text-white p-2 rounded-lg mt-2 hover:bg-yellow-600 transition">Edit</button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No packages available.</p>
      )}
    </div>
  );
}