import React from 'react';

const TermsConditions = () => {
  return (
    <section className="bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-20 sm:py-20 lg:py-32">
        <div className="prose max-w-full text-gray-800 prose-base sm:prose-lg xl:prose-xl">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 sm:mb-8 text-center lg:text-left">
            Terms & Conditions
          </h1>
          <p className="text-base sm:text-xl text-gray-600 mb-8 sm:mb-12 italic text-center lg:text-left">
            Last Updated: December 05, 2025
          </p>

          <div className="space-y-10 sm:space-y-12 leading-relaxed">

            {/* 1. Introduction */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">1. Introduction</h2>
              <p>
                By using this website, obtaining a shipping label, or purchasing/shipping materials from{' '}
                <strong>Siramamba Refinery FZC</strong> (“Company,” “we,” “us,” or “our”), you confirm that you are at least 18 years old and legally capable of entering into this Agreement.
                If acting on behalf of a business or organization, you confirm that you are authorized to bind that entity.
                By proceeding, you agree to be fully bound by these Terms and Conditions.
              </p>
            </section>

            {/* 2. Eligibility & Registration */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">2. Eligibility & Registration</h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-3">
                <li>You must be a resident of the United Arab Emirates (UAE) and provide valid identification and proof of address upon request.</li>
                <li>All information you provide must be complete, accurate, and up-to-date. You must notify the Company immediately of any changes.</li>
                <li>Transactions may be subject to Anti-Money Laundering (AML) and Know Your Customer (KYC) checks as required by UAE law.</li>
              </ul>
            </section>

            {/* 3. Orders & Pricing */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">3. Orders & Pricing</h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-3">
                <li>Goods and services displayed on the website are invitations to treat, not binding offers.</li>
                <li>Prices are based on live market rates for precious metals and may fluctuate without prior notice.</li>
                <li>The Company reserves the right to cancel or amend orders in case of pricing errors or extraordinary market conditions.</li>
              </ul>
            </section>

            {/* 4. Payments */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">4. Payments</h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-3">
                <li>Payments must be made by bank transfer within the specified time frame.</li>
                <li>Cash payments are accepted in person at the Company’s offices with valid government-issued ID and proof of address.</li>
                <li>Cash payments exceeding AED 50,000 require additional documentation verifying the legitimate source of funds.</li>
                <li>Direct cash deposits into the Company’s bank account are strictly prohibited under AML regulations.</li>
              </ul>
            </section>

            {/* 5. Shipping & Collection */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">5. Shipping & Collection</h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-3">
                <li>Customers are responsible for proper packaging, accurate labeling, and full compliance with all applicable shipping and customs regulations.</li>
                <li>Delivery is carried out by approved armored couriers or via in-person collection (by appointment only).</li>
                <li>Valid photo identification must be presented at the time of delivery or collection.</li>
                <li>The Company shall not be liable for courier delays, customs issues, force majeure, or circumstances beyond its reasonable control.</li>
              </ul>
            </section>

            {/* 6. Cancellations & Refunds */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">6. Cancellations & Refunds</h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-3">
                <li>Orders may be cancelled within <strong>one (1) business hour</strong> of placement, subject to cancellation fees and any realized market loss.</li>
                <li>After this period, orders are final and non-cancellable/non-refundable.</li>
                <li>Refunds, where approved, will only be issued to the original payment source.</li>
              </ul>
            </section>

            {/* 7. Liability */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">7. Liability</h2>
              <ul className="list-disc pl-5 sm:pl-8 space-y-2 sm:space-y-3">
                <li>The Company’s total liability is limited to the value of the relevant transaction.</li>
                <li>We shall not be liable for any indirect, consequential, or special damages, including loss of profit, business, or goodwill.</li>
                <li>No liability is accepted for delays, technical failures, or events outside the Company’s reasonable control.</li>
              </ul>
            </section>

            {/* 8. Intellectual Property */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">8. Intellectual Property</h2>
              <p>
                All content, trademarks, logos, and materials on this website are the exclusive property of Siramamba Refinery FZC and may not be copied, reproduced, or distributed without prior written consent.
              </p>
            </section>

            {/* 9. Compliance & Indemnity */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">9. Compliance & Indemnity</h2>
              <p>
                You agree to comply with all applicable UAE and international laws, including but not limited to AML, counter-terrorism financing, trade sanctions, tax, and environmental regulations.
              </p>
              <p className="mt-3 sm:mt-4">
                You shall indemnify and hold the Company harmless from any claims, losses, damages, or penalties arising from your breach of these obligations.
              </p>
            </section>

            {/* 10. Governing Law */}
            <section>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">10. Governing Law</h2>
              <p>
                These Terms and Conditions and all transactions are governed by the laws of the United Arab Emirates.
                Any disputes shall be subject to the exclusive jurisdiction of the competent courts in the UAE.
              </p>
            </section>

            {/* Contact Section */}
            <section className="border-t border-gray-300 pt-8 sm:pt-12 mt-12 sm:mt-16">
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6">Contact Us</h2>
              <p className="text-base sm:text-lg">
                For any questions regarding these Terms & Conditions, please contact:
              </p>
              <div className="mt-4 sm:mt-6 font-medium text-gray-700">
                <p>Siramamba Refinery FZC</p>
                <p>Email: info@siramamba.ae</p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </section>
  );
};

export default TermsConditions;