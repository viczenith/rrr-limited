export default function CookiePolicy() {
  const lastUpdated = 'October 20, 2025'
  return (
    <section className="relative overflow-hidden py-20">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-12 left-0 h-64 w-64 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-teal-300/20 blur-3xl" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <span className="inline-flex items-center justify-center rounded-full border border-amber-200/60 bg-amber-50/60 px-4 py-1.5 text-sm font-semibold text-amber-700 shadow-sm backdrop-blur">
            Cookie Policy
          </span>
          <h1 className="mt-6 text-4xl font-extrabold leading-tight sm:text-5xl">
            <span className="block text-gray-900">Cookies & Similar Technologies</span>
            <span className="bg-gradient-to-r from-amber-500 via-lime-500 to-teal-500 bg-clip-text text-transparent">Your choices and how we use them</span>
          </h1>
          <p className="mt-3 text-sm text-gray-500">Last updated: {lastUpdated}</p>
        </div>

        <div className="mt-10 rounded-2xl border border-gray-100 bg-white/90 p-6 shadow-xl backdrop-blur md:p-10">
          <div className="space-y-8 text-gray-700">
            <section id="what-are-cookies">
              <h3 className="text-xl font-bold text-gray-900">1. What Are Cookies?</h3>
              <p className="mt-2">Cookies are small text files stored on your device when you visit a website. They help the site function, remember your preferences, and understand how you use it.</p>
            </section>

            <section id="types">
              <h3 className="text-xl font-bold text-gray-900">2. Types of Cookies We Use</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Strictly Necessary: essential for core features (security, forms, navigation)</li>
                <li>Functional: remember preferences like language or region</li>
                <li>Analytics: help us measure and improve site performance</li>
                <li>Marketing: personalize content and measure campaign effectiveness</li>
              </ul>
            </section>

            <section id="third-parties">
              <h3 className="text-xl font-bold text-gray-900">3. Third-Party Cookies</h3>
              <p className="mt-2">We may use trusted third-party services (e.g., analytics providers) that set cookies to help us analyze usage and deliver better experiences.</p>
            </section>

            <section id="choices">
              <h3 className="text-xl font-bold text-gray-900">4. Your Choices</h3>
              <ul className="mt-2 list-inside list-disc space-y-1">
                <li>Browser Settings: block or delete cookies via your browser’s settings</li>
                <li>In-Site Controls: adjust preferences where cookie banners/managers are provided</li>
                <li>Do Not Track: we respect applicable signals where technically feasible</li>
              </ul>
              <p className="mt-2 text-sm text-gray-600">Note: blocking certain cookies may impact site functionality.</p>
            </section>

            <section id="retention">
              <h3 className="text-xl font-bold text-gray-900">5. Retention</h3>
              <p className="mt-2">Cookies persist for varying durations. Session cookies expire when you close your browser; persistent cookies remain until they expire or are deleted.</p>
            </section>

            <section id="changes">
              <h3 className="text-xl font-bold text-gray-900">6. Changes to this Policy</h3>
              <p className="mt-2">We may update this Cookie Policy from time to time. Material changes will be posted here.</p>
            </section>

            <section id="contact">
              <h3 className="text-xl font-bold text-gray-900">7. Contact</h3>
              <p className="mt-2">Questions? Email <a className="text-amber-700 hover:underline" href="mailto:info@righteousrichrealty.com">info@righteousrichrealty.com</a></p>
            </section>
          </div>
        </div>
      </div>
    </section>
  )
}
