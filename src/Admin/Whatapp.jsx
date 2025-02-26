import { useState, useEffect } from "react";
import { db } from "../Config/Config";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const Whatapp = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [savedNumber, setSavedNumber] = useState(null);
  const whatsappRef = doc(db, "whatapp", "uniqueNumber");

  useEffect(() => {
    const fetchNumber = async () => {
      const docSnap = await getDoc(whatsappRef);
      if (docSnap.exists()) {
        setSavedNumber(docSnap.data().phoneNumber);
        setPhoneNumber(docSnap.data().phoneNumber);
      }
    };
    fetchNumber();
  }, []);

  const handleSave = async () => {
    if (!phoneNumber) return alert("Please enter a phone number");
    try {
      await setDoc(whatsappRef, { phoneNumber });
      setSavedNumber(phoneNumber);
      alert("Phone number updated successfully");
    } catch (error) {
      console.error("Error saving number: ", error);
      alert("Failed to save number");
    }
  };

  return (
    <div className="pt-[8rem]">
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-lg ">
      <h2 className="text-xl font-bold mb-4">WhatsApp Number</h2>
      {savedNumber ? (
        <p className="text-green-600 font-semibold">Saved Number: {savedNumber}</p>
      ) : (
        <p className="text-gray-600">No number saved yet</p>
      )}
      <input
        type="tel"
        placeholder="Enter WhatsApp number"
        value={phoneNumber}
        onChange={(e) => setPhoneNumber(e.target.value)}
        className="w-full p-2 border rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-green-500"
      />
      <button
        onClick={handleSave}
        className="w-full bg-green-500 text-white p-2 rounded-lg hover:bg-green-600 transition"
      >
        Save/Update Number
      </button>
    </div>
    </div>
  );
};

export default Whatapp;
