import React, { useRef, useState, useEffect } from "react";
import { db } from "../../Config/Config"; // Ensure Firebase is initialized
import { doc, getDoc } from "firebase/firestore";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import stamp from "../../assets/RAPIDOX 001.png";
import logo from "../../assets/navLogo.png";  // Adjust the path as needed

const Invoice = ({selectedCode}) => {
  const invoiceRef = useRef();
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, selectedCode, "Delivery");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const deliveries = docSnap.data().deliveries;
          if (deliveries && deliveries.length > 0) {
            const firstDelivery = deliveries[0]; // Get first object in the array
            setInvoiceData({
              invoiceNumber: firstDelivery.TrackingIdentifier || "Unknown ID",
              expectedDelivery: firstDelivery.ExpectedDate || "Unknown Date",
              shipper: firstDelivery.Shipper || "Unknown Shipper",
              receiver: firstDelivery.Receiver || "Unknown Receiver",
              pickupAddress: firstDelivery.PickupAddress || "Unknown Address",
              deliveryAddress: firstDelivery.DeliveryAddress || "Unknown Address",
              packageDetails: {
                description: "Electronic Components",
                dimensions: "50x30x20 cm",
                referenceNumber: "ABC123456",
                type: "Fragile",
                value: "$200",
                weight: "10kg",
              },
            });
          }
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      }
    };

    fetchData();
  }, []);

  const handleDownload = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("p", "mm", "a4");
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
      pdf.save("Invoice.pdf");
    });
  };

  if (!invoiceData) {
    return <p>Loading Invoice Data...</p>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <div ref={invoiceRef} className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 bg-white shadow-lg border border-gray-300 overflow-y-auto">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-4 border-blue-800 pb-4 mb-4">
      {/* Logo Container */}
      <div className="flex-shrink-0">
        <img
          src={logo}
          alt="Company Logo"
          className="h-auto w-[100px] sm:w-[110px] md:w-[120px] lg:w-[128px]" // Responsive width
        />
      </div>

      {/* Details Container */}
      <div className="text-right mt-4 sm:mt-0 text-sm sm:text-md font-semibold text-gray-700 grid gap-1">
        <p className="grid grid-cols-[auto_1fr] gap-2">
          <span className="whitespace-nowrap">Tracking Identifier:</span> 
          <span className="font-normal text-gray-600">{invoiceData.invoiceNumber}</span>
        </p>
        <p className="grid grid-cols-[auto_1fr] gap-2">
          <span className="whitespace-nowrap">Expected Date:</span> 
          <span className="font-normal text-gray-600">{invoiceData.expectedDelivery}</span>
        </p>  
      </div>

     </header>

        <div className="mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4 border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm">
  <div>
    <h2 className="text-md font-semibold text-blue-900 border-b pb-2 mb-2">Shipper Details</h2>
    <p className="text-sm font-medium text-gray-700">Name: <span className="font-normal text-gray-600">{invoiceData.shipper}</span></p>
    <p className="text-sm font-medium text-gray-700">Pickup Address: <span className="font-normal text-gray-600">{invoiceData.pickupAddress}</span></p>
  </div>
  <div>
    <h2 className="text-md font-semibold text-blue-900 border-b pb-2 mb-2">Receiver Details</h2>
    <p className="text-sm font-medium text-gray-700">Name: <span className="font-normal text-gray-600">{invoiceData.receiver}</span></p>
    <p className="text-sm font-medium text-gray-700">Delivery Address: <span className="font-normal text-gray-600">{invoiceData.deliveryAddress}</span></p>
  </div>
</div>

        <div className="mb-4 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-blue-900 text-white">
                <th className="py-2 px-3 text-left text-xs sm:text-sm font-semibold" colSpan="2">Package Details</th>
              </tr>
            </thead>
            <tbody>
              {Object.entries(invoiceData.packageDetails).map(([key, value]) => (
                <tr key={key} className="bg-white border-b border-gray-300">
                  <td className="py-2 px-3 text-xs sm:text-sm text-gray-700 font-semibold capitalize">{key.replace(/([A-Z])/g, ' $1')}:</td>
                  <td className="py-2 px-3 text-xs sm:text-sm text-gray-700">{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <footer className="text-center text-xs sm:text-sm text-gray-500 mt-4 border-t pt-3">
          <p>Thank you for choosing Rapidox Logistics!</p>
          <p>
            If you have any questions, contact us at{" "}
            <a href="mailto:support@yourlogistics.com" className="text-blue-900 hover:underline">
            contact@rapidoxlogistics.com
            </a>
          </p>
          <div className="mt-2 flex justify-center sm:justify-start">
            <img src={stamp} alt="Authorized Stamp" className="w-20 h-20 sm:w-24 sm:h-24 object-cover" />
          </div>
        </footer>
      </div>

      <button onClick={handleDownload} className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800">
        Download Invoice
      </button>
    </div>
  );
};

export default Invoice;
