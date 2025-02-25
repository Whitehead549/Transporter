import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { db } from "../Config/Config";
import { doc, getDoc } from "firebase/firestore";

// Fix missing marker icons issue
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";

const customIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const MapComponent = ({ selectedCode }) => {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState(null);

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const docRef = doc(db, selectedCode, "Event");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const eventData = docSnap.data();
          if (eventData.events && eventData.events.length > 0) {
            setLocation(eventData.events[eventData.events.length - 1].location);
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching location: ", error);
      }
    };

    if (selectedCode) fetchLocation();
  }, [selectedCode]);

  useEffect(() => {
    if (!location) return; // Prevent unnecessary API calls

    const fetchCoordinates = async () => {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(location)}`
        );
        const data = await response.json();
        if (data.length > 0) {
          setPosition([parseFloat(data[0].lat), parseFloat(data[0].lon)]);
        } else {
          console.error("Address not found!");
        }
      } catch (error) {
        console.error("Error fetching coordinates:", error);
      }
    };

    fetchCoordinates();
  }, [location]);

  return (
    <div className="w-full h-[400px] rounded-lg overflow-hidden">
      {position ? (
        <MapContainer center={position} zoom={13} className="w-full h-full">
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          <Marker position={position} icon={customIcon}>
            <Popup>📍 {location}</Popup>
          </Marker>
        </MapContainer>
      ) : (
        <p>Loading map...</p>
      )}
    </div>
  );
};

export default MapComponent;
