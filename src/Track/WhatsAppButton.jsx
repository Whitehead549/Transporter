import React, { useState, useEffect } from "react";
import { db } from "../Config/Config"; // Adjusted import path
import { doc, onSnapshot } from "firebase/firestore";
import "@fortawesome/fontawesome-free/css/all.min.css";

const WhatsAppButton = () => {
  const [phoneNumber, setPhoneNumber] = useState("");

  useEffect(() => {
    const docRef = doc(db, "whatapp", "uniqueNumber");

    const unsubscribe = onSnapshot(
      docRef,
      (docSnap) => {
        if (docSnap.exists()) {
          setPhoneNumber(docSnap.data().phoneNumber);
        } else {
          console.log("No such document!");
        }
      },
      (error) => {
        console.error("Error fetching phone number:", error);
      }
    );

    return () => unsubscribe(); // Cleanup subscription on unmount
  }, []);

  return (
    <a
      href={`https://wa.me/${phoneNumber}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-6 lg:right-8 
                 bg-green-500 hover:bg-green-700 text-white 
                 w-24 sm:w-36 lg:w-42 p-2 sm:p-3 lg:p-4 rounded-full shadow-lg 
                 transition duration-300 ease-in-out z-50 
                 flex items-center justify-center space-x-2"
    >
      <i className="fab fa-whatsapp text-lg sm:text-xl lg:text-2xl"></i>
      <span className="text-xs sm:text-sm lg:text-base font-semibold">
        Chat
      </span>
    </a>
  );
};

export default WhatsAppButton;
