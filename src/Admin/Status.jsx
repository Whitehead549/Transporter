import { useState, useEffect } from "react";
import { db } from "../Config/Config"; // Ensure Firebase is configured
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Status({ selectedCode }) {
  const [formData, setFormData] = useState({
    deliveryNotes: "",
    deliveryCarrier: "",
    deliveryMethod: "",
    deliveryFees: "",
    paymentMethod: "",
    deliveryAttempt: "",
    deliveryConfirmation: "", // Changed to text input
    redeliveryOptions: "",
    currentStatus: "",
    currentLocation: "",
  });

  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (selectedCode) fetchEvents();
  }, [selectedCode]);

  const fetchEvents = async () => {
    if (!selectedCode) return;
    try {
      const docRef = doc(db, selectedCode, "Status");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setEvents(docSnap.data().events || []);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching status: ", error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const requiredFields = Object.keys(formData);
    if (requiredFields.some((field) => !formData[field])) {
      alert("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const docRef = doc(db, selectedCode, "Status");
      const docSnap = await getDoc(docRef);
      const existingEvents = docSnap.exists() ? docSnap.data().events || [] : [];

      let updatedEvents;
      if (editingId) {
        updatedEvents = existingEvents.map((event) =>
          event.id === editingId ? { ...event, ...formData } : event
        );
        setEditingId(null);
      } else {
        const newEvent = {
          id: new Date().getTime().toString(),
          ...formData,
        };
        updatedEvents = [...existingEvents, newEvent];
      }

      await setDoc(docRef, { events: updatedEvents }, { merge: true });
      alert("Status updated successfully");
      fetchEvents();
      setFormData({
        deliveryNotes: "",
        deliveryCarrier: "",
        deliveryMethod: "",
        deliveryFees: "",
        paymentMethod: "",
        deliveryAttempt: "",
        deliveryConfirmation: "", // Reset to empty string
        redeliveryOptions: "",
        currentStatus: "",
        currentLocation: "",
      });
    } catch (error) {
      console.error("Error updating status: ", error);
      alert("Failed to update status. Please try again.");
    }
    setLoading(false);
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setFormData({
      deliveryNotes: event.deliveryNotes || "",
      deliveryCarrier: event.deliveryCarrier || "",
      deliveryMethod: event.deliveryMethod || "",
      deliveryFees: event.deliveryFees || "",
      paymentMethod: event.paymentMethod || "",
      deliveryAttempt: event.deliveryAttempt || "",
      deliveryConfirmation: event.deliveryConfirmation || "", // Set to text value
      redeliveryOptions: event.redeliveryOptions || "",
      currentStatus: event.currentStatus || "",
      currentLocation: event.currentLocation || "",
    });
  };

  return (
    <div className="max-w-lg w-full mx-auto p-6 bg-white shadow-md rounded-xl sm:max-w-xl md:max-w-2xl lg:max-w-3xl">
      <h2 className="text-xl font-semibold mb-4 text-center sm:text-left">
        {editingId ? `Edit Status for ${selectedCode} ` : `Create new Status for ${selectedCode} `}
      </h2>

      {Object.keys(formData).map((key) => (
        <div className="mb-4" key={key}>
          <label className="block text-sm font-medium">
            {key.replace(/([A-Z])/g, " $1").trim()}
          </label>
          <input
            type={key === "deliveryFees" ? "number" : "text"} // Keep deliveryFees as number
            name={key}
            value={formData[key]}
            onChange={handleChange}
            className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition disabled:opacity-50"
      >
        {loading ? "Saving..." : editingId ? "Save Changes" : "Save Status"}
      </button>

      {events.length > 0 ? (
        <ul className="space-y-4 mt-6">
          {events.map((event) => (
            <li key={event.id} className="p-4 border rounded bg-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <p className="text-gray-700"><span className="font-semibold">Location:</span> {event.currentLocation}</p>
                <p className="text-gray-700"><span className="font-semibold">Status:</span> {event.currentStatus}</p>
                <p className="text-gray-700"><span className="font-semibold">Delivery Notes:</span> {event.deliveryNotes}</p>
                <p className="text-gray-700"><span className="font-semibold">Carrier:</span> {event.deliveryCarrier}</p>
                <p className="text-gray-700"><span className="font-semibold">Method:</span> {event.deliveryMethod}</p>
                <p className="text-gray-700"><span className="font-semibold">Fees:</span> ${event.deliveryFees}</p>
                <p className="text-gray-700"><span className="font-semibold">Payment Method:</span> {event.paymentMethod}</p>
                <p className="text-gray-700"><span className="font-semibold">Delivery Attempt:</span> {event.deliveryAttempt}</p>
                <p className="text-gray-700"><span className="font-semibold">Redelivery Options:</span> {event.redeliveryOptions}</p>
                <p className="text-gray-700"><span className="font-semibold">Delivery Confirmation:</span> {event.deliveryConfirmation}</p> {/* Display text value */}
              </div>

              <button
                onClick={() => handleEdit(event)}
                className="w-full sm:w-auto bg-yellow-500 text-white p-2 rounded-lg mt-2 hover:bg-yellow-600 transition"
              >
                Edit
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500 mt-4 text-center">No events available.</p>
      )}
    </div>
  );
}