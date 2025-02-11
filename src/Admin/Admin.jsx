import React, { useEffect, useState } from "react";
import { db } from "../Config/Config";
import { collection, onSnapshot, query, where, addDoc } from "firebase/firestore";
import Section from "./Section";

const Admin = () => {
  const [codes, setCodes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");
  const [selectedCode, setSelectedCode] = useState(""); // State to store selected code

  useEffect(() => {
    const codesRef = collection(db, "codes");
    const q = query(codesRef, where("code", "!=", null));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const codeValues = querySnapshot.docs.map((doc) => doc.data().code);
      setCodes(codeValues);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const generateCode = () => {
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let randomCode = "";
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomCode += characters[randomIndex];
    }
    setCode(randomCode);
    setMessage("");
  };

  const addToFirestore = async () => {
    if (!code) {
      setMessage("⚠️ Please generate a code first!");
      return;
    }

    try {
      await addDoc(collection(db, "codes"), {
        code,
        timestamp: new Date(),
      });

      if (/[^a-zA-Z0-9]/.test(code)) {
        setMessage("❌ Code contains invalid characters.");
        return;
      }

      await addDoc(collection(db, code), {
        message: "Collection created with this code!",
        timestamp: new Date(),
      });

      setMessage(`✅ Code added to Firestore and collection '${code}' created!`);
    } catch (error) {
      console.error("Error adding document: ", error);
      setMessage(`❌ Failed to add code. Error: ${error.message}`);
    }
  };

  const handleSelect = (selectedCode) => {
    console.log("Selected code:", selectedCode);
    setSelectedCode(selectedCode); // Update state with selected code
  };

  return (
    <div className="flex flex-col gap-8 px-8 py-8 bg-gray-100 min-h-screen">
      <div className="flex flex-col md:flex-row justify-center items-start gap-8 pt-16">
        <div className="flex-1 max-w-lg">
          <div className="bg-white px-6 md:p-8 rounded-xl shadow-xl w-full min-h-[460px] flex flex-col justify-center">
            <h2 className="text-2xl font-semibold text-center mb-6 text-gray-700">Generate Code</h2>
            <button
              onClick={generateCode}
              className="w-full py-3 px-4 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
            >
              Generate Code
            </button>

            {code && (
              <div className="text-center mt-6 p-4 bg-gray-50 border rounded-lg">
                <p className="text-lg font-semibold text-gray-700">Generated Code:</p>
                <p className="text-2xl font-bold text-blue-500 tracking-wider">{code}</p>
                <button
                  onClick={addToFirestore}
                  className="mt-4 w-full py-3 px-4 bg-green-500 text-white font-medium rounded-lg hover:bg-green-600 transition"
                >
                  Save Code to Firestore
                </button>
              </div>
            )}

            {message && (
              <p
                className={`mt-4 text-center font-medium ${
                  message.includes("✅")
                    ? "text-green-600"
                    : message.includes("❌")
                    ? "text-red-500"
                    : "text-yellow-500"
                }`}
              >
                {message}
              </p>
            )}
          </div>
        </div>

        <div className="flex-1 max-w-lg bg-white shadow-lg rounded-xl p-6">
          <h1 className="text-2xl font-semibold text-gray-700 mb-6 text-center">Codes</h1>
          {loading ? (
            <p className="text-gray-500 text-center animate-pulse">Loading...</p>
          ) : codes.length > 0 ? (
            <ul className="space-y-3">
              {codes.map((code, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center p-4 bg-gray-50 border rounded-lg"
                >
                  <span className="text-gray-800 font-medium">{code}</span>
                  <button
                    onClick={() => handleSelect(code)}
                    className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
                  >
                    Select
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-500 text-center">No codes found</p>
          )}
        </div>
      </div>

      {/* Pass selectedCode as a prop to Section */}
      <div className="w-full mt-6">
        <Section selectedCode={selectedCode} />
      </div>
    </div>
  );
};

export default Admin;
