import { useEffect, useState } from "react";
import { db } from "../Config/Config";
import { doc, getDoc } from "firebase/firestore";

const Events = ({selectedCode}) => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    setLoading(true);
    try {
      const docRef = doc(db, selectedCode, "Event"); // Fetch document
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const eventsData = docSnap.data().events || []; // Extract events array
        setEvents(eventsData);
      } else {
        setEvents([]);
      }
    } catch (error) {
      console.error("Error fetching events:", error);
    }
    setLoading(false);
  };

  return (
    <div className="max-w-lg mx-auto p-4 bg-white shadow-lg rounded-lg border border-gray-300 text-black">
      <h2 className="text-lg font-semibold mb-2 bg-[#091242] text-white p-2 rounded-t-lg text-center">
        Events
      </h2>

      {loading ? (
        <p className="text-center text-gray-500">Loading...</p>
      ) : events.length > 0 ? (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-3 py-2 text-left">Date</th>
              <th className="border border-gray-400 px-3 py-2 text-left">Description</th>
              <th className="border border-gray-400 px-3 py-2 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="border border-gray-400 px-3 py-2">{event.date}</td>
                <td className="border border-gray-400 px-3 py-2">{event.description}</td>
                <td className="border border-gray-400 px-3 py-2">{event.location}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500">No events available.</p>
      )}
    </div>
  );
};

export default Events;
