import { useState, useEffect } from "react";
import { db } from "../Config/Config"; // Ensure Firebase is configured
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Package({ selectedCode }) {
  // State variables for form inputs
  const [PackageType, setPackageType] = useState("");
  const [PackageWeight, setPackageWeight] = useState("");
  const [PackageDimensions, setPackageDimensions] = useState("");
  const [PackageDescription, setPackageDescription] = useState("");
  const [NumberOfItems, setNumberOfItems] = useState("");
  const [PackageValue, setPackageValue] = useState("");
  const [SpecialHandling, setSpecialHandling] = useState("");
  const [PackageReferenceNumber, setPackageReferenceNumber] = useState("");
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
      !PackageType ||
      !PackageWeight ||
      !PackageDimensions ||
      !PackageDescription ||
      !NumberOfItems ||
      !PackageValue ||
      !PackageReferenceNumber
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
                PackageType,
                PackageWeight,
                PackageDimensions,
                PackageDescription,
                NumberOfItems,
                PackageValue,
                SpecialHandling,
                PackageReferenceNumber,
              }
            : pkg
        );
        setEditingId(null);
      } else {
        const newPackage = {
          id: new Date().getTime().toString(),
          PackageType,
          PackageWeight,
          PackageDimensions,
          PackageDescription,
          NumberOfItems,
          PackageValue,
          SpecialHandling,
          PackageReferenceNumber,
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
    setPackageType(pkg.PackageType);
    setPackageWeight(pkg.PackageWeight);
    setPackageDimensions(pkg.PackageDimensions);
    setPackageDescription(pkg.PackageDescription);
    setNumberOfItems(pkg.NumberOfItems);
    setPackageValue(pkg.PackageValue);
    setSpecialHandling(pkg.SpecialHandling);
    setPackageReferenceNumber(pkg.PackageReferenceNumber);
  };

  return (
    <div className="max-w-lg w-full mx-auto p-6 bg-white shadow-md rounded-xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
  <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
    {editingId ? `Edit Package for ${selectedCode}` : `Create New Package for ${selectedCode}`}
  </h2>

  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input type="text" placeholder="Package Type" value={PackageType} onChange={(e) => setPackageType(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" placeholder="Package Weight" value={PackageWeight} onChange={(e) => setPackageWeight(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" placeholder="Package Dimensions" value={PackageDimensions} onChange={(e) => setPackageDimensions(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" placeholder="Package Description" value={PackageDescription} onChange={(e) => setPackageDescription(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="number" placeholder="Number of Items" value={NumberOfItems} onChange={(e) => setNumberOfItems(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" placeholder="Package Value" value={PackageValue} onChange={(e) => setPackageValue(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" placeholder="Special Handling" value={SpecialHandling} onChange={(e) => setSpecialHandling(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
      <input type="text" placeholder="Package Reference Number" value={PackageReferenceNumber} onChange={(e) => setPackageReferenceNumber(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500" />
    </div>
    <button type="submit" disabled={loading} className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition disabled:opacity-50 mt-4">
      {loading ? "Saving..." : editingId ? "Update Package" : "Create Package"}
    </button>
  </form>

  <h2 className="text-xl font-semibold mt-6 mb-4">All Packages</h2>
  {packages.length > 0 ? (
    <ul className="space-y-4">
      {packages.map((pkg) => (
        <li key={pkg.id} className="p-4 border rounded bg-gray-100 flex flex-col sm:flex-row sm:justify-between">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <p className="text-gray-700"><span className="font-semibold">Package Type:</span> {pkg.PackageType}</p>
            <p className="text-gray-700"><span className="font-semibold">Package Weight:</span> {pkg.PackageWeight}</p>
            <p className="text-gray-700"><span className="font-semibold">Package Dimensions:</span> {pkg.PackageDimensions}</p>
            <p className="text-gray-700"><span className="font-semibold">Package Description:</span> {pkg.PackageDescription}</p>
            <p className="text-gray-700"><span className="font-semibold">Number of Items:</span> {pkg.NumberOfItems}</p>
            <p className="text-gray-700"><span className="font-semibold">Package Value:</span> {pkg.PackageValue}</p>
            <p className="text-gray-700"><span className="font-semibold">Special Handling:</span> {pkg.SpecialHandling}</p>
            <p className="text-gray-700"><span className="font-semibold">Package Reference Number:</span> {pkg.PackageReferenceNumber}</p>
          </div>
          <button onClick={() => handleEdit(pkg)} className="w-full sm:w-auto bg-yellow-500 text-white p-2 rounded-lg mt-2 sm:mt-0 hover:bg-yellow-600 transition">Edit</button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500 text-center">No packages available.</p>
  )}
</div>

  );
}