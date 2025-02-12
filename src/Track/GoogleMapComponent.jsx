import React, { useEffect, useState } from "react";
import { db } from "../Config/Config"; // Ensure your Firebase config is set up
import { doc, getDoc } from "firebase/firestore";

const GoogleMapComponent = ({selectedCode}) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const docRef = doc(db, selectedCode, "Event");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const eventData = docSnap.data();
          if (eventData.events && eventData.events.length > 0) {
            setLocation(eventData.events[eventData.events.length - 1].location); // Using the last index location
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching location: ", error);
      }
    };

    fetchLocation();
  }, []);

  const encodedAddress = encodeURIComponent(location);
  const mapUrl = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div style={{ width: "100%", height: "400px", borderRadius: "10px", overflow: "hidden" }}>
      {location ? (
        <iframe
          title="Google Map"
          width="100%"
          height="100%"
          style={{ border: "0" }}
          loading="lazy"
          allowFullScreen
          src={mapUrl}
        ></iframe>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default GoogleMapComponent;