import React, { useState, useEffect, useRef } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { db } from "../../Config/Config";
import { doc, getDoc } from "firebase/firestore";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import markerShadowPng from "leaflet/dist/images/marker-shadow.png";
import Delivery from "../../Track/Delivery";
import Info from "../../Track/Info";
import Package from "../../Track/Package";
import Events from "../../Track/Events";
import ImageGallery from "../../Track/ImageGallery";
import Invoice from "./Invoice";
import { X } from "lucide-react";
import JsBarcode from "jsbarcode"; // Import JsBarcode

const customIcon = L.icon({
  iconUrl: markerIconPng,
  shadowUrl: markerShadowPng,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Clientel = ({ selectedCode }) => {
  const [location, setLocation] = useState("");
  const [position, setPosition] = useState(null);
  const [showInvoice, setShowInvoice] = useState(false);
  const barcodeRef = useRef(null); // Ref for barcode SVG

  // Fetch location from Firestore
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

  // Fetch coordinates from OpenStreetMap Nominatim API
  useEffect(() => {
    if (!location) return;

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

  // Generate barcode using JsBarcode
  useEffect(() => {
    if (barcodeRef.current && selectedCode) {
      JsBarcode(barcodeRef.current, selectedCode, {
        format: "CODE128",
        displayValue: false,
        lineColor: "#000",
        width: 1.8,
        height: 70,
        margin: 0,
      });
    }
  }, [selectedCode]);

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 min-h-screen lg:py-[6rem]">
       {/* Heading */}
      <div className="flex justify-center mb-1 lg:mb-8 mt-12 lg:mt-1">
        <h1 className="text-xl md:text-4xl font-bold text-center mb-1 relative z-10 text-[#091242]">
          Tracking Details
        </h1>
      </div>
      <div className="hidden lg:block">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-12xl mx-auto">
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <Events selectedCode={selectedCode} />
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <Info selectedCode={selectedCode} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <div className="w-full h-96 lg:h-[600px] rounded-lg overflow-hidden">
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
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <ImageGallery selectedCode={selectedCode} />
            </div>
          </div>
          <div className="space-y-4">
            <div className="p-4 bg-white rounded-lg shadow">
              <Delivery selectedCode={selectedCode} />
            </div>
            <div className="p-4 bg-white rounded-lg shadow">
              <Package selectedCode={selectedCode} />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="py-8 px-4 sm:px-6 bg-gray-50 min-h-screen">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-12xl mx-auto">
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <Events selectedCode={selectedCode} />
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Info selectedCode={selectedCode} />
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Delivery selectedCode={selectedCode} />
              </div>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white rounded-lg shadow">
                <div className="w-full h-64 sm:h-96 rounded-lg overflow-hidden">
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
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <ImageGallery selectedCode={selectedCode} />
              </div>
              <div className="p-4 bg-white rounded-lg shadow">
                <Package selectedCode={selectedCode} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Barcode and Print Invoice Button */}
      <div className="flex flex-col items-center justify-center mt-3 lg:mt-8 space-y-10">
      <div className="bg-white pb-2 rounded-lg shadow w-full max-w-[200px] mx-auto sm:max-w-[250px] md:max-w-[300px]">
        <svg ref={barcodeRef} className="w-full h-auto"></svg>
      </div>
        <button
          onClick={() => setShowInvoice(true)}
          className="px-6 py-2 bg-custom_blue text-white font-semibold rounded shadow"
        >
           Download Details
        </button>
      </div>

      {/* Invoice Modal */}
      {showInvoice && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[9999]">
          <div className="bg-white rounded-lg shadow-lg relative w-full max-w-3xl lg:max-w-3xl md:max-w-full sm:max-w-full sm:p-4 h-full max-h-screen overflow-y-auto">
            <button
              onClick={() => setShowInvoice(false)}
              className="absolute top-4 right-4 w-6 h-6 md:w-7 md:h-7 lg:w-7 lg:h-7 flex items-center justify-center rounded-full bg-gray-800 text-white hover:bg-gray-600 transition duration-300 sm:w-7 sm:h-7 sm:top-3 sm:right-3 z-[10000]"
            >
              <X size={28} className="sm:size-20" />
            </button>
            <div className="w-full h-full overflow-y-auto">
              <Invoice selectedCode={selectedCode} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Clientel;