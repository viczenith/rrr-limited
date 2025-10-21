export default function PrivacyPolicy() {
  const lastUpdated = 'October 20, 2025'
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-0 h-64 w-64 rounded-full bg-rose-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-amber-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-rose-200/60 bg-rose-50/60 px-4 py-1.5 text-sm font-semibold text-rose-700 shadow-sm backdrop-blur">
            Privacy Policy
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="block text-gray-900">Your Privacy Matters</span>
            <span className="bg-gradient-to-r from-rose-500 via-amber-500 to-emerald-600 bg-clip-text text-transparent">How we collect, use, and protect your data</span>
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-xl backdrop-blur md:p-10">
          {/* Table of contents */}
          <div className="mb-8 grid gap-2 text-sm text-gray-600 md:grid-cols-2">
            <a href="#scope" className="hover:text-gray-900">1. Scope & Applicability</a>
            <a href="#information" className="hover:text-gray-900">2. Information We Collect</a>
            <a href="#use" className="hover:text-gray-900">3. How We Use Information</a>
            <a href="#legal" className="hover:text-gray-900">4. Legal Bases</a>
            <a href="#sharing" className="hover:text-gray-900">5. Sharing & Disclosure</a>
            <a href="#retention" className="hover:text-gray-900">6. Data Retention</a>
            <a href="#security" className="hover:text-gray-900">7. Security</a>
            <a href="#rights" className="hover:text-gray-900">8. Your Rights</a>
            <a href="#cookies" className="hover:text-gray-900">9. Cookies & Tracking</a>
            <a href="#children" className="hover:text-gray-900">10. Children’s Privacy</a>
            <a href="#transfers" className="hover:text-gray-900">11. Cross-Border Transfers</a>
            <a href="#changes" className="hover:text-gray-900">12. Changes to this Policy</a>
            <a href="#contact" className="hover:text-gray-900">13. Contact Us</a>
          </div>

          <div className="space-y-8 text-gray-700">
            <section id="scope">
              <h3 className="text-xl font-bold text-gray-900">1. Scope & Applicability</h3>
              <p className="mt-2">This Privacy Policy describes how we handle personal information when you visit our website, make enquiries, book inspections, participate in our affiliate program, or purchase our properties and services.</p>
            </section>

            <section id="information">
              <h3 className="text-xl font-bold text-gray-900">2. Information We Collect</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Contact details (name, email, phone number, address)</li>
                <li>Identification details where required for compliance (e.g., valid ID)</li>
                <li>Transaction data (payment info handled by secure processors)</li>
                <li>Communications (messages, enquiries, support requests)</li>
                <li>Usage data (pages viewed, device, browser, IP, approximate location)</li>
                <li>Cookies and similar technologies (see Cookie Policy)</li>
              </ul>
            </section>

            <section id="use">
              <h3 className="text-xl font-bold text-gray-900">3. How We Use Information</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>To provide our services, process enquiries, and manage bookings</li>
                <li>To verify identity and comply with legal/contractual obligations</li>
                <li>To improve our website, offerings, and customer experience</li>
                <li>To send service-related communications and updates</li>
                <li>With consent, to send marketing messages you can opt out of anytime</li>
              </ul>
            </section>

            <section id="legal">
              <h3 className="text-xl font-bold text-gray-900">4. Legal Bases</h3>
              <p className="mt-2">We rely on one or more of the following legal bases: performance of a contract, legitimate interests, compliance with legal obligations, and your consent where required.</p>
            </section>

            <section id="sharing">
              <h3 className="text-xl font-bold text-gray-900">5. Sharing & Disclosure</h3>
              <p className="mt-2">We may share personal information with trusted vendors (e.g., payment, ID verification), professional advisors, and where required by law. We do not sell your personal information.</p>
            </section>

            <section id="retention">
              <h3 className="text-xl font-bold text-gray-900">6. Data Retention</h3>
              <p className="mt-2">We retain information for as long as necessary to provide services, meet legal obligations, resolve disputes, and enforce agreements, after which we securely delete or anonymize it.</p>
            </section>

            <section id="security">
              <h3 className="text-xl font-bold text-gray-900">7. Security</h3>
              <p className="mt-2">We implement administrative, technical, and physical safeguards to protect personal information. However, no method of transmission or storage is completely secure.</p>
            </section>

            <section id="rights">
              <h3 className="text-xl font-bold text-gray-900">8. Your Rights</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Access, correction, deletion, and portability of your data</li>
                <li>Objection and restriction rights, where applicable</li>
                <li>Withdraw consent at any time without affecting prior processing</li>
                <li>Lodge a complaint with your local supervisory authority</li>
              </ul>
            </section>

            <section id="cookies">
              <h3 className="text-xl font-bold text-gray-900">9. Cookies & Tracking</h3>
              <p className="mt-2">We use cookies to enable core site functionality, understand usage, and personalize content. You can manage preferences via your browser and our in-site controls. See our Cookie Policy for details.</p>
            </section>

            <section id="children">
              <h3 className="text-xl font-bold text-gray-900">10. Children’s Privacy</h3>
              <p className="mt-2">Our services are not directed to children. We do not knowingly collect data from children without appropriate consent where required by law.</p>
            </section>

            <section id="transfers">
              <h3 className="text-xl font-bold text-gray-900">11. Cross-Border Transfers</h3>
              <p className="mt-2">Where data is transferred across borders, we use appropriate safeguards (e.g., standard contractual clauses) to protect your information in accordance with applicable law.</p>
            </section>

            <section id="changes">
              <h3 className="text-xl font-bold text-gray-900">12. Changes to this Policy</h3>
              <p className="mt-2">We may update this policy from time to time. Material changes will be highlighted on this page. Continued use of our services signifies your acceptance of the updated policy.</p>
            </section>

            <section id="contact">
              <h3 className="text-xl font-bold text-gray-900">13. Contact Us</h3>
              <p className="mt-2">Email: <a className="text-rose-600 hover:underline" href="mailto:info@righteousrichrealty.com">info@righteousrichrealty.com</a></p>
              <p className="mt-1">Phone: <a className="text-rose-600 hover:underline" href="tel:+2348000000000">+234 800 000 0000</a></p>
              <p className="mt-1">Address: Vicbalkon Tower, Utako, FCT Abuja</p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
