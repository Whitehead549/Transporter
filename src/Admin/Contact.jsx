import React, { useEffect, useState } from "react";
import { db } from "../Config/Config"; // Firestore config
import { collection, getDocs } from "firebase/firestore"; // Firestore functions

const Contact = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch contacts from Firestore
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "contact"));
        const contactList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setContacts(contactList);
      } catch (error) {
        console.error("Error fetching contacts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold text-center text-[#091242] mb-6">Contact Submissions</h2>

      {loading ? (
        <p className="text-center">Loading contacts...</p>
      ) : contacts.length === 0 ? (
        <p className="text-center">No contacts found.</p>
      ) : (
        <>
          {/* Table for large screens */}
          <div className="hidden md:block overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
              <thead className="bg-[#091242] text-white">
                <tr>
                  <th className="py-2 px-4 border">Full Name</th>
                  <th className="py-2 px-4 border">Email</th>
                  <th className="py-2 px-4 border">House Address</th>
                  <th className="py-2 px-4 border">Country</th>
                  <th className="py-2 px-4 border">Phone Number</th>
                  <th className="py-2 px-4 border">WhatsApp</th>
                  <th className="py-2 px-4 border">Message</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr key={contact.id} className="text-center border-b hover:bg-gray-100">
                    <td className="py-2 px-4 border">{contact.fullName}</td>
                    <td className="py-2 px-4 border">{contact.email}</td>
                    <td className="py-2 px-4 border">{contact.houseAddress}</td>
                    <td className="py-2 px-4 border">{contact.country}</td>
                    <td className="py-2 px-4 border">{contact.phoneNumber}</td>
                    <td className="py-2 px-4 border">{contact.whatsappNumber}</td>
                    <td className="py-2 px-4 border">{contact.message}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Card Layout for Mobile View */}
          <div className="md:hidden space-y-4">
            {contacts.map((contact) => (
              <div key={contact.id} className="bg-white p-4 shadow-md rounded-lg border border-gray-300">
                <p className="text-lg font-semibold text-[#091242]">{contact.fullName}</p>
                <p className="text-gray-700"><strong>Email:</strong> {contact.email}</p>
                <p className="text-gray-700"><strong>Address:</strong> {contact.houseAddress}</p>
                <p className="text-gray-700"><strong>Country:</strong> {contact.country}</p>
                <p className="text-gray-700"><strong>Phone:</strong> {contact.phoneNumber}</p>
                <p className="text-gray-700"><strong>WhatsApp:</strong> {contact.whatsappNumber}</p>
                <p className="text-gray-700"><strong>Message:</strong> {contact.message}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Contact;
