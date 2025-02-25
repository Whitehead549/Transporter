import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import stamp from '../../assets/stamp Velo88.png'; // Ensure the image is placed in the public or src folder

const Invoice = () => {
  const invoiceRef = useRef();

  const handleDownload = () => {
    const input = invoiceRef.current;
    html2canvas(input, { scale: 2 }).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (canvas.height * pdfWidth) / canvas.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('Invoice.pdf');
    });
  };

  const invoiceData = {
    invoiceNumber: 'SHIP-98765',
    date: '2023-10-01',
    expectedDelivery: '2023-10-15',
    shipFrom: {
      name: 'Your Logistics Company',
      address: '123 Warehouse Rd.',
      city: 'Logistics City',
      state: 'LG',
      zip: '54321',
      email: 'support@yourlogistics.com',
    },
    shipTo: {
      name: 'Client Company Name',
      address: '456 Client St.',
      city: 'Client City',
      state: 'CL',
      zip: '67890',
      email: 'client@clientcompany.com',
    },
    items: [
      { id: 1, description: 'Electronic Components', quantity: 5, weight: '10kg' },
      { id: 2, description: 'Furniture Parts', quantity: 2, weight: '50kg' },
      { id: 3, description: 'Office Supplies', quantity: 10, weight: '5kg' },
    ],
  };

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center p-4">
    {/* Invoice Container */}
    <div
      ref={invoiceRef}
      className="w-full max-w-2xl mx-auto px-4 sm:px-6 py-4 bg-white shadow-lg border border-gray-300 overflow-y-auto"
    >
      {/* Header Section */}
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-4 border-blue-700 pb-4 mb-4">
        <div>
          <h1 className="text-xl sm:text-2xl font-extrabold text-blue-900">Shipping Invoice</h1>
          <p className="text-xs sm:text-sm text-gray-500">Invoice #: {invoiceData.invoiceNumber}</p>
        </div>
        <div className="text-right mt-2 sm:mt-0">
          <p className="text-xs sm:text-sm font-semibold text-gray-700">Date: {invoiceData.date}</p>
          <p className="text-xs sm:text-sm font-semibold text-gray-700">
            Expected Delivery: {invoiceData.expectedDelivery}
          </p>
        </div>
      </header>
  
      {/* Ship From and Ship To Section */}
      <div className="flex flex-col sm:flex-row justify-between mb-4 gap-4">
        <div className="w-full sm:w-1/2">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Ship From:</h3>
          <p className="text-xs sm:text-sm text-gray-600">{invoiceData.shipFrom.name}</p>
          <p className="text-xs sm:text-sm text-gray-600">{invoiceData.shipFrom.address}</p>
          <p className="text-xs sm:text-sm text-gray-600">
            {invoiceData.shipFrom.city}, {invoiceData.shipFrom.state} {invoiceData.shipFrom.zip}
          </p>
          <p className="text-xs sm:text-sm text-gray-600">{invoiceData.shipFrom.email}</p>
        </div>
        <div className="w-full sm:w-1/2 sm:text-right">
          <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-1">Ship To:</h3>
          <p className="text-xs sm:text-sm text-gray-600">{invoiceData.shipTo.name}</p>
          <p className="text-xs sm:text-sm text-gray-600">{invoiceData.shipTo.address}</p>
          <p className="text-xs sm:text-sm text-gray-600">
            {invoiceData.shipTo.city}, {invoiceData.shipTo.state} {invoiceData.shipTo.zip}
          </p>
          <p className="text-xs sm:text-sm text-gray-600">{invoiceData.shipTo.email}</p>
        </div>
      </div>
  
      {/* Items Table */}
      <div className="mb-4 overflow-x-auto">
        <table className="w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-blue-700 text-white">
              <th className="py-2 px-3 text-left text-xs sm:text-sm font-semibold">#</th>
              <th className="py-2 px-3 text-left text-xs sm:text-sm font-semibold">Description</th>
              <th className="py-2 px-3 text-left text-xs sm:text-sm font-semibold">Quantity</th>
              <th className="py-2 px-3 text-left text-xs sm:text-sm font-semibold">Weight</th>
            </tr>
          </thead>
          <tbody>
            {invoiceData.items.map((item, index) => (
              <tr
                key={item.id}
                className={index % 2 === 0 ? "bg-gray-100" : "bg-white"}
              >
                <td className="py-2 px-3 text-xs sm:text-sm text-gray-700 border-b border-gray-300">{item.id}</td>
                <td className="py-2 px-3 text-xs sm:text-sm text-gray-700 border-b border-gray-300">{item.description}</td>
                <td className="py-2 px-3 text-xs sm:text-sm text-gray-700 border-b border-gray-300">{item.quantity}</td>
                <td className="py-2 px-3 text-xs sm:text-sm text-gray-700 border-b border-gray-300">{item.weight}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  
      {/* Footer Section */}
      <footer className="text-center text-xs sm:text-sm text-gray-500 mt-4 border-t pt-3">
        <p>Thank you for choosing Your Logistics Company!</p>
        <p>
          If you have any questions, contact us at{" "}
          <a
            href="mailto:support@yourlogistics.com"
            className="text-blue-600 hover:underline"
          >
            support@yourlogistics.com
          </a>
        </p>
  
        {/* Authorized Stamp Section */}
        <div className="mt-2 flex justify-center sm:justify-start">
          <img
            src={stamp}
            alt="Authorized Stamp"
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover"
          />
        </div>
      </footer>
    </div>
  
    {/* Download Button at Bottom Center */}
    <button
      onClick={handleDownload}
      className="mt-6 bg-blue-700 text-white px-6 py-2 rounded-md shadow-md hover:bg-blue-800"
    >
      Download Invoice
    </button>
  </div>
  );
};

export default Invoice;
