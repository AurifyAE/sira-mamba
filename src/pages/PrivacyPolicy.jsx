import { section } from 'framer-motion/client';
import React from 'react';

const PrivacyPolicy = () => {
  return (
    <section className='bg-gray-50 min-h-screen'>
        <div className="max-w-7xl mx-auto px-6 py-20 lg:py-32 text-gray-800">
            <div className="prose prose-invert prose-lg max-w-none">
                <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8 text-center lg:text-left">
                Privacy Policy
                </h1>
                <p className="text-xl text-gray-700 mb-10 italic">
                Effective Date: December 05, 2025
                </p>

                <div className="space-y-10 text-gray-800 leading-relaxed">
                <p>
                    At <strong>Siramamba Refinery FZC</strong> (“Company,” “we,” “our,” or “us”), we are committed to safeguarding your privacy and ensuring that your personal information is handled responsibly and in accordance with the applicable laws of the United Arab Emirates (“UAE”). This Privacy Policy explains how we collect, use, disclose, and protect your data when you visit our website or use our services.
                </p>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Information We Collect</h2>
                    <p>We may collect the following categories of information:</p>
                    <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li><strong>Personal Identification Information:</strong> Name, email address, phone number, company name, and other contact details.</li>
                    <li><strong>Payment Information:</strong> Credit/debit card details or banking information (where applicable).</li>
                    <li><strong>Usage Data:</strong> IP address, browser type, device details, operating system, and browsing activity (including cookies or tracking technologies).</li>
                    <li><strong>Customer Support Information:</strong> Any information you provide when contacting us via forms, email, or other communication channels.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">How We Use Your Information</h2>
                    <p>Your personal data may be used for the following purposes:</p>
                    <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>To provide, maintain, and improve our services.</li>
                    <li>To respond to inquiries and process transactions.</li>
                    <li>To send updates, newsletters, or promotional content (only where consent is provided).</li>
                    <li>To personalize your website experience and improve content relevance.</li>
                    <li>To comply with legal and regulatory obligations under UAE law.</li>
                    <li>To enhance website security and prevent fraudulent or unlawful activities.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">How We Share Your Information</h2>
                    <p>We may share your information in the following limited circumstances:</p>
                    <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li><strong>Service Providers:</strong> With trusted third-party providers (e.g., payment processors, hosting services, analytics tools) who are bound by confidentiality obligations.</li>
                    <li><strong>Legal Requirements:</strong> To comply with laws, regulations, or valid government/legal requests, including obligations under the UAE Data Protection Law.</li>
                    <li><strong>Business Transfers:</strong> In case of a merger, acquisition, or transfer of assets, your data may be included as part of the transaction.</li>
                    </ul>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Data Retention</h2>
                    <p>
                    We will retain your personal data only as long as necessary to fulfill the purposes outlined in this policy, unless longer retention is required by law. Once no longer needed, data will be securely deleted or anonymized.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Security of Your Information</h2>
                    <p>
                    We implement appropriate technical and organizational measures—such as encryption, secure servers, and regular audits—to protect your information. However, no system can guarantee absolute security, and you acknowledge this risk when using our services.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Your Rights</h2>
                    <p>In accordance with UAE data protection regulations, you have the right to:</p>
                    <ul className="list-disc pl-8 mt-4 space-y-2">
                    <li>Access the personal data we hold about you.</li>
                    <li>Rectify inaccurate or incomplete information.</li>
                    <li>Request Deletion of your data, subject to legal or contractual requirements.</li>
                    <li>Object to certain types of processing, including direct marketing.</li>
                    <li>Withdraw Consent at any time, if processing is based on your consent.</li>
                    </ul>
                    <p className="mt-4">
                    To exercise these rights, please contact us using the details provided below.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Cookies and Tracking</h2>
                    <p>
                    We use cookies and similar technologies to improve your browsing experience. Please refer to our <strong>Cookie Policy</strong> for details on how these are used and how you can manage your preferences.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">International Transfers</h2>
                    <p>
                    If it is necessary to transfer your data outside the UAE, we will take steps to ensure it is adequately protected in line with applicable legal standards.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Third-Party Links</h2>
                    <p>
                    Our website may link to third-party websites. We are not responsible for their privacy practices, and we encourage you to review their policies before sharing personal data.
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-black mt-12 mb-6">Changes to This Policy</h2>
                    <p>
                    We may update this Privacy Policy from time to time to reflect changes in our operations or legal requirements. Updates will be posted on this page with a revised “Effective Date.”
                    </p>
                </div>

                <div className="border-t border-gray-700 pt-10 mt-16">
                    <h2 className="text-2xl font-semibold text-black mb-4">Contact Us</h2>
                    <p>
                    If you have any questions about this Privacy Policy or our data practices, please contact us at:
                    </p>
                    <p className="mt-4 font-medium">
                    Siramamba Refinery FZC<br />
                    Email: info@siramamba.ae<br />
                    </p>
                </div>
                </div>
            </div>
        </div>
    </section>
  );
};

export default PrivacyPolicy;