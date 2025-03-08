import React, { useRef, useState, useEffect } from "react";
import { db } from "../../Config/Config"; // Ensure Firebase is initialized
import { doc, getDoc } from "firebase/firestore";
import stamp from "../../assets/RAPIDOX 001.png";
import logo from "../../assets/navLogo.png";
import printJS from "print-js";
import JsBarcode from "jsbarcode";

const Invoice = ({ selectedCode }) => {
  const invoiceRef = useRef();
  const barcodeRef = useRef(null);
  const [invoiceData, setInvoiceData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, selectedCode, "Delivery");
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const deliveries = docSnap.data().deliveries;
          if (deliveries && deliveries.length > 0) {
            const firstDelivery = deliveries[0];
            setInvoiceData(prevState => ({
              ...prevState,
              invoiceNumber: firstDelivery.TrackingIdentifier || "Unknown ID",
              expectedDelivery: firstDelivery.ExpectedDate || "Unknown Date",
              shipper: firstDelivery.Shipper || "Unknown Shipper",
              receiver: firstDelivery.Receiver || "Unknown Receiver",
              pickupAddress: firstDelivery.PickupAddress || "Unknown Address",
              deliveryAddress: firstDelivery.DeliveryAddress || "Unknown Address",
            }));
          }
        }

        const packageDocRef = doc(db, selectedCode, "Package");
        const packageDocSnap = await getDoc(packageDocRef);

        if (packageDocSnap.exists()) {
          const packages = packageDocSnap.data().packages;
          if (packages && packages.length > 0) {
            const packageDetails = packages[0];
            setInvoiceData(prevState => ({
              ...prevState,
              packageDetails: {
                description: packageDetails.PackageDescription || "Unknown Description",
                dimensions: packageDetails.PackageDimensions || "Unknown Dimensions",
                referenceNumber: packageDetails.PackageReferenceNumber || "Unknown Reference",
                type: packageDetails.PackageType || "Unknown Type",
                value: packageDetails.PackageValue || "Unknown Value",
                weight: packageDetails.PackageWeight || "Unknown Weight",
              },
            }));
          }
        }
      } catch (error) {
        console.error("Error fetching invoice data:", error);
      }
    };

    fetchData();
  }, [selectedCode]);

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
  }, [selectedCode, invoiceData]);

  const handlePrint = () => {
    if (invoiceRef.current) {
      printJS({
        printable: "invoiceContainer",
        type: "html",
        targetStyles: ["*"],
      });
    } else {
      console.error("Invoice element not found!");
    }
  };

  if (!invoiceData) {
    return <p>Loading Invoice Data...</p>;
  }

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
      <div
        id="invoiceContainer"
        ref={invoiceRef}
        className="invoice-container w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 bg-white shadow-lg border border-gray-300 overflow-y-auto"
      >
       <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-4 border-blue-800 pb-4 mb-4">
          {/* Logo Container */}
          <div className="flex-shrink-0">
            <img src={logo} alt="Company Logo" className="h-auto w-[108px]" />
          </div>

          {/* Invoice Details */}
          <div className="text-right mt-4 sm:mt-0 text-xs sm:text-sm md:text-sm lg:text-sm font-semibold text-gray-700 grid gap-1">
            <p className="grid grid-cols-[auto_1fr] gap-6">
              <span className="whitespace-nowrap font-semibold text-[#000]">Tracking Identifier: </span>
              <span className="font-normal text-gray-600">{selectedCode}</span>
            </p>
            <p className="grid grid-cols-[auto_1fr] gap-6">
              <span className="whitespace-nowrap font-semibold text-[#000]">Expected Date:</span>
              <span className="font-normal text-gray-600">{invoiceData.expectedDelivery}</span>
            </p>
          </div>
        </header>
        <div className="mb-6 border border-gray-300 rounded-lg p-4 bg-gray-50 shadow-sm text-md">
          <p><span className="font-bold text-[#000]">Shipper: </span>{invoiceData.shipper}</p>
          <p><span className="font-bold text-[#000]">Receiver: </span>{invoiceData.receiver}</p>
          <p><span className="font-bold text-[#000]">Pickup Address: </span>{invoiceData.pickupAddress}</p>
          <p><span className="font-bold text-[#000]">Delivery Address: </span>{invoiceData.deliveryAddress}</p>
        </div>
        <div className="mb-4 overflow-x-auto">
          <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
            <thead>
            <tr className="relative">
  <th
    className="py-2 px-3 text-center text-sm sm:text-sm md:text-lg lg:text-md font-bold text-[#ffffff] relative overflow-hidden"
    colSpan="2"
  >
    <svg
      className="absolute top-0 left-0 w-full h-full"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      <rect width="100" height="100" fill="#1E3A8A" />
    </svg>
    <span className="relative z-10">Package Details</span>
  </th>
</tr>

            </thead>
            <tbody>
              {invoiceData.packageDetails &&
                Object.entries(invoiceData.packageDetails).map(([key, value]) => (
                  <tr key={key} className="bg-white border-b border-gray-300">
                    <td className="py-2 px-3 text-xs sm:text-sm text-gray-700 font-semibold capitalize">
                      {key.replace(/([A-Z])/g, " $1")}:
                    </td>
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
          <div className="mt-4 flex justify-center">
            <svg ref={barcodeRef}></svg>
          </div>
        </footer>
      </div>
      <button
        onClick={handlePrint}
        className="mt-6 bg-blue-900 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800 print:hidden"
      >
        Print
      </button>
    </div>
  );
};

export default Invoice;
