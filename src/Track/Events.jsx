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
    <div className="max-w-lg mx-auto text-black text-sm md:text-base">
    <h2 className="text-lg font-semibold mb-2 bg-[#091242] text-white p-2 rounded-t-lg text-center">
      EVENTS
    </h2>
  
    {loading ? (
      <p className="text-center text-gray-500">Loading...</p>
    ) : events.length > 0 ? (
      <div className="overflow-auto">
        <table className="w-full max-w-full border-collapse border border-gray-300 text-sm text-gray-600">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-400 px-2 py-1 text-left">Date</th>
              <th className="border border-gray-400 px-2 py-1 text-left">Description</th>
              <th className="border border-gray-400 px-2 py-1 text-left">Location</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, index) => (
              <tr key={index} className="border-b border-gray-300">
                <td className="border border-gray-400 px-2 py-1">{event.date}</td>
                <td className="border border-gray-400 px-2 py-1 truncate overflow-hidden whitespace-nowrap">
                  {event.description}
                </td>
                <td className="border border-gray-400 px-2 py-1 truncate overflow-hidden whitespace-nowrap">
                  {event.location}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    ) : (
      <p className="text-center text-gray-500">No events available.</p>
    )}
  </div>
  
  );
};

export default Events;
