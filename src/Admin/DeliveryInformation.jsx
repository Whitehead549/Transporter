import { useState, useEffect } from "react";
import { db } from "../Config/Config"; // Ensure Firebase is configured
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function DeliveryInformation({ selectedCode }) {
  const [trackingNumber, setTrackingNumber] = useState("");
  const [shipper, setShipper] = useState("");
  const [receiver, setReceiver] = useState("");
  const [pickupAddress, setPickupAddress] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [expectedDate, setExpectedDate] = useState("");
  const [deliveryTime, setDeliveryTime] = useState("");
  const [signatureRequired, setSignatureRequired] = useState(false);
  const [loading, setLoading] = useState(false);
  const [deliveries, setDeliveries] = useState([]);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    if (selectedCode) fetchDeliveries();
  }, [selectedCode]);

  const fetchDeliveries = async () => {
    if (!selectedCode) return;
    try {
      const docRef = doc(db, selectedCode, "Delivery");
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setDeliveries(docSnap.data().deliveries || []);
      } else {
        setDeliveries([]);
      }
    } catch (error) {
      console.error("Error fetching deliveries: ", error);
    }
  };

  const handleSubmit = async () => {
    if (!trackingNumber || !shipper || !receiver || !pickupAddress || !deliveryAddress || !expectedDate || !deliveryTime) {
      alert("All fields are required.");
      return;
    }
    setLoading(true);
    try {
      const docRef = doc(db, selectedCode, "Delivery");
      const docSnap = await getDoc(docRef);
      const existingDeliveries = docSnap.exists() ? docSnap.data().deliveries || [] : [];

      let updatedDeliveries;
      if (editingId) {
        updatedDeliveries = existingDeliveries.map((delivery) =>
          delivery.id === editingId
            ? { id: editingId, trackingNumber, shipper, receiver, pickupAddress, deliveryAddress, expectedDate, deliveryTime, signatureRequired }
            : delivery
        );
        setEditingId(null);
      } else {
        const newDelivery = {
          id: new Date().getTime().toString(),
          trackingNumber,
          shipper,
          receiver,
          pickupAddress,
          deliveryAddress,
          expectedDate,
          deliveryTime,
          signatureRequired,
        };
        updatedDeliveries = [...existingDeliveries, newDelivery];
      }

      await setDoc(docRef, { deliveries: updatedDeliveries }, { merge: true });
      alert("Delivery saved successfully");
      fetchDeliveries();
      resetForm();
    } catch (error) {
      console.error("Error saving delivery: ", error);
    }
    setLoading(false);
  };

  const resetForm = () => {
    setTrackingNumber("");
    setShipper("");
    setReceiver("");
    setPickupAddress("");
    setDeliveryAddress("");
    setExpectedDate("");
    setDeliveryTime("");
    setSignatureRequired(false);
  };

  const handleEdit = (delivery) => {
    setEditingId(delivery.id);
    setTrackingNumber(delivery.trackingNumber);
    setShipper(delivery.shipper);
    setReceiver(delivery.receiver);
    setPickupAddress(delivery.pickupAddress);
    setDeliveryAddress(delivery.deliveryAddress);
    setExpectedDate(delivery.expectedDate);
    setDeliveryTime(delivery.deliveryTime);
    setSignatureRequired(delivery.signatureRequired);
  };

  return (
    <div className="w-full max-w-2xl mx-auto p-4 sm:p-6 md:p-8 bg-white shadow-md rounded-xl">
  <h2 className="text-lg sm:text-xl font-semibold mb-4 text-center">
    {editingId ? `Edit Delivery for ${selectedCode}` : `Create New Delivery for ${selectedCode}`}
  </h2>

  <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        placeholder="Tracking Number"
        value={trackingNumber}
        onChange={(e) => setTrackingNumber(e.target.value)}
        className="w-full p-3 border rounded-md sm:text-sm"
      />
      <input
        type="text"
        placeholder="Shipper"
        value={shipper}
        onChange={(e) => setShipper(e.target.value)}
        className="w-full p-3 border rounded-md sm:text-sm"
      />
      <input
        type="text"
        placeholder="Receiver"
        value={receiver}
        onChange={(e) => setReceiver(e.target.value)}
        className="w-full p-3 border rounded-md sm:text-sm"
      />
      <input
        type="text"
        placeholder="Pickup Address"
        value={pickupAddress}
        onChange={(e) => setPickupAddress(e.target.value)}
        className="w-full p-3 border rounded-md sm:text-sm"
      />
      <input
        type="text"
        placeholder="Delivery Address"
        value={deliveryAddress}
        onChange={(e) => setDeliveryAddress(e.target.value)}
        className="w-full p-3 border rounded-md sm:text-sm"
      />
      <input
        type="date"
        value={expectedDate}
        onChange={(e) => setExpectedDate(e.target.value)}
        className="w-full p-3 border rounded-md sm:text-sm"
      />
      <input
        type="time"
        value={deliveryTime}
        onChange={(e) => setDeliveryTime(e.target.value)}
        className="w-full p-3 border rounded-md sm:text-sm"
      />
    </div>

    <label className="flex items-center space-x-2 mt-4">
      <input
        type="checkbox"
        checked={signatureRequired}
        onChange={(e) => setSignatureRequired(e.target.checked)}
        className="form-checkbox h-5 w-5"
      />
      <span className="text-sm">Signature Required</span>
    </label>

    <button
      type="submit"
      disabled={loading}
      className="w-full bg-blue-500 text-white p-3 rounded-lg mt-4 hover:bg-blue-600 transition sm:text-sm"
    >
      {loading ? "Saving..." : editingId ? "Update Delivery" : "Create Delivery"}
    </button>
  </form>

  <h2 className="text-lg sm:text-xl font-semibold mt-6 mb-4 text-center">All Deliveries</h2>
  {deliveries.length > 0 ? (
    <ul className="space-y-4">
      {deliveries.map((delivery) => (
        <li key={delivery.id} className="p-4 border rounded-lg bg-gray-100">
          <div className="text-sm space-y-1">
            <p><span className="font-semibold">Tracking Number:</span> {delivery.trackingNumber}</p>
            <p><span className="font-semibold">Shipper:</span> {delivery.shipper}</p>
            <p><span className="font-semibold">Receiver:</span> {delivery.receiver}</p>
            <p><span className="font-semibold">Pickup Address:</span> {delivery.pickupAddress}</p>
            <p><span className="font-semibold">Delivery Address:</span> {delivery.deliveryAddress}</p>
            <p><span className="font-semibold">Expected Delivery Date:</span> {delivery.expectedDate}</p>
            <p><span className="font-semibold">Delivery Time:</span> {delivery.deliveryTime}</p>
            <p><span className="font-semibold">Signature Required:</span> {delivery.signatureRequired ? "Yes" : "No"}</p>
          </div>
          <button
            onClick={() => handleEdit(delivery)}
            className="w-full sm:w-auto bg-yellow-500 text-white p-2 rounded-lg mt-2 sm:mt-0 hover:bg-yellow-600 transition sm:text-sm"
          >
            Edit
          </button>
        </li>
      ))}
    </ul>
  ) : (
    <p className="text-gray-500 text-center">No deliveries available.</p>
  )}
</div>


  );
}

