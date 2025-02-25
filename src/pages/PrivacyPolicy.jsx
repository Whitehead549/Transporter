import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center">
      <section className="max-w-6xl w-full mx-auto px-6 sm:px-10 lg:px-16 py-16 text-center">
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-[#091242] mb-4">
            
          </h1>
          <p className="text-lg text-gray-600">Effective Date: January 11, 2025</p>
        </header>

        {/* Content */}
        <div className="grid grid-cols-1 gap-10 text-[#4A5568]">
          {/* Section Wrapper */}
          {sections.map(({ title, content }, index) => (
            <section key={index} className="text-left">
              <h2 className="lg:text-2xl sm:text-3xl font-semibold text-[#091242] mb-4">
                {title}
              </h2>
              {Array.isArray(content) ? (
                <ul className="list-disc pl-6 space-y-2 lg:text-lg text-[#4A5568]">
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
              If you have any questions or concerns regarding this policy, please contact us:
            </p>
            <p className="font-semibold text-[#091242]">Email: contact@velotrustlogistics.com</p>
          </section>
        </div>

        {/* Footer */}
        <footer className="pt-12 text-center">
          <p className="text-sm sm:text-base font-semibold text-[#091242]">
            By using our website or services, you acknowledge that you have read, understood, and agreed to this policy.
          </p>
        </footer>
      </section>
    </div>
  );
};

const sections = [
  {
    title: "Introduction",
    content:
      "At Velo Trust Logistics, we value your trust and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website or use our services.",
  },
  {
    title: "Collection of Personal Information",
    content: [
      "Contact information (name, email, phone number, address)",
      "Shipping and logistics details (shipment info, tracking numbers)",
      "Payment details (credit card, bank account info)",
      "Communication preferences",
    ],
  },
  {
    title: "Use of Personal Information",
    content: [
      "Provide logistics services and support",
      "Process payments and manage accounts",
      "Communicate about services and promotions",
      "Improve our website and services",
      "Comply with legal requirements",
    ],
  },
  {
    title: "Disclosure of Personal Information",
    content: [
      "Our affiliates and subsidiaries",
      "Third-party logistics providers",
      "Payment processors",
      "Government agencies (as required by law)",
      "Business partners (with your consent)",
    ],
  },
  {
    title: "Protection of Personal Information",
    content: [
      "Encryption of sensitive information",
      "SSL technology",
      "Firewalls and intrusion detection systems",
      "Access controls and authentication procedures",
    ],
  },
  {
    title: "Cookies and Tracking Technologies",
    content:
      "We use cookies and other tracking technologies to collect browsing data. You can manage preferences in your browser settings.",
  },
  {
    title: "Your Rights and Choices",
    content: [
      "Access and correct your information",
      "Opt-out of marketing communications",
      "Request deletion of your personal data",
      "File a complaint with a regulatory authority",
    ],
  },
  {
    title: "Changes to This Policy",
    content:
      "We reserve the right to modify this policy. Changes will take effect upon posting on our website.",
  },
];

export default PrivacyPolicy;
