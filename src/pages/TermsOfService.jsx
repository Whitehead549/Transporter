import React from "react";

const TermsOfService = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
        {/* Header */}
        <header className="my-8">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#091242] mb-4">
            
          </h1>
          <p className="text-lg text-gray-600">Effective Date: January 11, 2025</p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 text-[#4A5568]">
          {sections.map(({ title, content }, index) => (
            <section key={index} className="text-left">
              <h2 className="lg:text-2xl sm:text-3xl font-semibold text-[#091242] mb-4">
                {title}
              </h2>
              {Array.isArray(content) ? (
                <ul className="list-disc pl-6 space-y-2 lg:text-lg">
                  {content.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              ) : (
                <p className="lg:text-lg">{content}</p>
              )}
            </section>
          ))}

          {/* Contact Section */}
          <section className="text-left">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#091242] mb-4">
              Contact Us
            </h2>
            <p>
              If you have any questions or concerns regarding these terms, please contact us:
            </p>
            <p className="font-semibold text-[#091242]">Email: contact@rapidoxlogistics.com</p>
          </section>
        </div>

        {/* Footer */}
        <footer className="pt-12 text-center">
          <p className="text-sm sm:text-base font-semibold text-[#091242]">
            By using our services or accessing our website, you acknowledge that you have read, understood, and agreed to these terms.
          </p>
        </footer>
      </section>
    </div>
  );
};

const sections = [
  {
    title: "Acceptance of Terms",
    content:
      "By using our services or accessing our website, you agree to be bound by these Terms. If you do not agree, please do not use our services or website.",
  },
  {
    title: "Services",
    content: [
      "We provide logistics services, including transportation, warehousing, and freight forwarding.",
      "Our services are subject to our tariffs, rates, and charges, which are available upon request.",
    ],
  },
  {
    title: "Use of Website",
    content:
      "Our website is for personal and non-commercial use. You may not modify, copy, distribute, or sell any information obtained from our website.",
  },
  {
    title: "Intellectual Property",
    content:
      "Our website and content, including trademarks and copyrighted materials, are our property. You may not use them without prior written consent.",
  },
  {
    title: "Disclaimer of Warranties",
    content:
      "Our services and website are provided 'as is' without warranties, express or implied, including merchantability and fitness for a particular purpose.",
  },
  {
    title: "Limitation of Liability",
    content:
      "We are not liable for any direct, indirect, incidental, or consequential damages arising from the use of our services or website.",
  },
  {
    title: "Indemnification",
    content:
      "You agree to indemnify and hold us harmless from any claims, damages, and expenses arising from your use of our services or website.",
  },
  {
    title: "Governing Law",
    content:
      "These Terms are governed by the laws of the State of Louisiana and the federal laws of the United States.",
  },
  {
    title: "Dispute Resolution",
    content:
      "Any disputes shall be resolved through binding arbitration in accordance with the American Arbitration Association.",
  },
  {
    title: "Changes to Terms",
    content:
      "We reserve the right to modify these Terms at any time. Continued use constitutes acceptance of modified Terms.",
  },
];

export default TermsOfService;
