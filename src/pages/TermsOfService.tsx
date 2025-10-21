export default function TermsOfService() {
  const lastUpdated = 'October 20, 2025'
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-0 h-64 w-64 rounded-full bg-blue-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-purple-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-blue-200/60 bg-blue-50/60 px-4 py-1.5 text-sm font-semibold text-blue-700 shadow-sm backdrop-blur">
            Terms of Service
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="block text-gray-900">Please read carefully</span>
            <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent">The rules for using our services</span>
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-xl backdrop-blur md:p-10">
          <div className="space-y-8 text-gray-700">
            <section id="acceptance">
              <h3 className="text-xl font-bold text-gray-900">1. Acceptance of Terms</h3>
              <p className="mt-2">By accessing or using our website, booking inspections, or purchasing properties and related services, you agree to these Terms of Service.</p>
            </section>

            <section id="eligibility">
              <h3 className="text-xl font-bold text-gray-900">2. Eligibility</h3>
              <p className="mt-2">You must have the legal capacity to enter into contracts. For certain purchases, identity verification and additional documentation may be required.</p>
            </section>

            <section id="services">
              <h3 className="text-xl font-bold text-gray-900">3. Services</h3>
              <p className="mt-2">We provide real estate advisory, property sales, inspection scheduling, and supporting services. Property availability, pricing, and terms are subject to change.</p>
            </section>

            <section id="pricing">
              <h3 className="text-xl font-bold text-gray-900">4. Pricing & Payments</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>All prices will be clearly communicated prior to purchase</li>
                <li>Installment plans (where available) include specified timelines and conditions</li>
                <li>Payments are processed via secure providers; we do not store sensitive card data</li>
              </ul>
            </section>

            <section id="cancellations">
              <h3 className="text-xl font-bold text-gray-900">5. Cancellations & Refunds</h3>
              <p className="mt-2">Cancellation and refund eligibility depends on the specific property and contractual terms. We will provide applicable terms before any payment is made.</p>
            </section>

            <section id="conduct">
              <h3 className="text-xl font-bold text-gray-900">6. Acceptable Use</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Do not misuse our website or attempt to disrupt services</li>
                <li>Do not submit false information or infringe others' rights</li>
                <li>Comply with applicable laws and regulations at all times</li>
              </ul>
            </section>

            <section id="intellectual">
              <h3 className="text-xl font-bold text-gray-900">7. Intellectual Property</h3>
              <p className="mt-2">All content on this site is owned by or licensed to us. You may not copy, modify, or distribute content without permission.</p>
            </section>

            <section id="disclaimers">
              <h3 className="text-xl font-bold text-gray-900">8. Disclaimers</h3>
              <p className="mt-2">Services are provided “as is” and “as available.” We make reasonable efforts to ensure accuracy but do not guarantee completeness, reliability, or uninterrupted access.</p>
            </section>

            <section id="liability">
              <h3 className="text-xl font-bold text-gray-900">9. Limitation of Liability</h3>
              <p className="mt-2">To the maximum extent permitted by law, we are not liable for indirect, incidental, special, or consequential damages arising from your use of the website or services.</p>
            </section>

            <section id="indemnity">
              <h3 className="text-xl font-bold text-gray-900">10. Indemnification</h3>
              <p className="mt-2">You agree to indemnify and hold us harmless from claims arising out of your violation of these Terms or misuse of the services.</p>
            </section>

            <section id="changes">
              <h3 className="text-xl font-bold text-gray-900">11. Changes to Terms</h3>
              <p className="mt-2">We may update these Terms periodically. Continued use of the website or services after changes indicates your acceptance of the updated Terms.</p>
            </section>

            <section id="governing">
              <h3 className="text-xl font-bold text-gray-900">12. Governing Law & Dispute Resolution</h3>
              <p className="mt-2">These Terms are governed by applicable Nigerian law. Disputes will be resolved through good-faith negotiations and, if necessary, in the appropriate courts.</p>
            </section>

            <section id="contact">
              <h3 className="text-xl font-bold text-gray-900">13. Contact</h3>
              <p className="mt-2">Email: <a className="text-blue-600 hover:underline" href="mailto:info@righteousrichrealty.com">info@righteousrichrealty.com</a></p>
              <p className="mt-1">Phone: <a className="text-blue-600 hover:underline" href="tel:+2348000000000">+234 800 000 0000</a></p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
