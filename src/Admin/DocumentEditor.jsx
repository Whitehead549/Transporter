import { useState, useEffect } from "react";
import { db } from "../Config/Config"; // Ensure Firebase is configured
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function DocumentEditor({ selectedCode }) {
  const [date, setDate] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [events, setEvents] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (selectedCode) fetchEvents();
  }, [selectedCode]);

  const fetchEvents = async () => {
    if (!selectedCode) return;

    try {
      const docRef = doc(db, selectedCode, "Event");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setEvents(docSnap.data().events || []);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching events: ", error);
    }
  };

  const handleSubmit = async () => {
    if (!date || !location || !description) {
      alert("All fields are required.");
      return;
    }

    setLoading(true);
    try {
      const docRef = doc(db, selectedCode, "Event");
      const docSnap = await getDoc(docRef);
      const existingEvents = docSnap.exists() ? docSnap.data().events || [] : [];

      let updatedEvents;
      if (editingId) {
        updatedEvents = existingEvents.map((event) =>
          event.id === editingId
            ? { id: editingId, date, location, description }
            : event
        );
        setEditingId(null);
      } else {
        const newEvent = {
          id: new Date().getTime().toString(),
          date,
          location,
          description,
        };
        updatedEvents = [...existingEvents, newEvent];
      }

      await setDoc(docRef, { events: updatedEvents }, { merge: true });

      alert("Event saved successfully");
      fetchEvents();
      setDate("");
      setLocation("");
      setDescription("");
    } catch (error) {
      console.error("Error saving event: ", error);
    }
    setLoading(false);
  };

  const handleEdit = (event) => {
    setEditingId(event.id);
    setDate(event.date);
    setLocation(event.location);
    setDescription(event.description);
  };

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-xl">
      <h2 className="text-xl font-semibold mb-4">
      {editingId ? `Edit event for ${selectedCode} ` : `Create new event for ${selectedCode} `}
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium">Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium">Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full mt-1 p-2 border rounded"
        />
      </div>

      <button
        onClick={handleSubmit}
        disabled={loading}
        className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition"
      >
        {loading ? "Saving..." : editingId ? "Save Changes" : "Save Event"}
      </button>

      <h2 className="text-xl font-semibold mt-6 mb-4">All Events</h2>

      {events.length > 0 ? (
        <ul className="space-y-4">
          {events.map((event) => (
            <li
              key={event.id}
              className="p-4 border rounded bg-gray-100 flex justify-between"
            >
              <div>
                <p className="text-gray-700">
                  <span className="font-semibold">Date:</span> {event.date}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Location:</span> {event.location}
                </p>
                <p className="text-gray-700">
                  <span className="font-semibold">Description:</span> {event.description}
                </p>
                <button
                  onClick={() => handleEdit(event)}
                  className="w-full bg-yellow-500 text-white p-2 rounded-lg mt-2 hover:bg-yellow-600 transition"
                >
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No events available.</p>
      )}
    </div>
  );
}
