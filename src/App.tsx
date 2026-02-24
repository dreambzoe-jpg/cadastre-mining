import React, { useEffect, useState } from 'react';
import RegulatoryAssistant from './RegulatoryAssistant';
import consultationImg from '/consultation.jpg';

const FORMSPREE_URL = 'https://formspree.io/f/mwvnwgjl';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Scroll fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const btn = form.querySelector('button[type="submit"]') as HTMLButtonElement;

    btn.textContent = 'Sending…';
    btn.disabled = true;

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: new FormData(form),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        btn.textContent = '✓ Inquiry Sent!';
        btn.classList.add('!bg-green-700');
        form.reset();
        setTimeout(() => {
          btn.textContent = 'Send Inquiry';
          btn.classList.remove('!bg-green-700');
          btn.disabled = false;
        }, 3000);
      } else {
        throw new Error('Send failed');
      }
    } catch {
      btn.textContent = 'Failed — please try again';
      btn.classList.add('!bg-red-700');
      setTimeout(() => {
        btn.textContent = 'Send Inquiry';
        btn.classList.remove('!bg-red-700');
        btn.disabled = false;
      }, 3000);
    }
  };

  return (
    <div className="bg-white text-slate-900 selection:bg-amber-100">

      {/* ── Navigation ── */}
      <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex flex-col">
              <span className="text-xl font-bold tracking-tight text-slate-900">Cadastre Mining Compliance</span>
              <span className="text-xs uppercase tracking-widest text-amber-700 font-semibold">Strategic Advisory</span>
            </div>
            <div className="flex items-center gap-6">
              <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
                <a href="#specializations" className="hover:text-amber-700 transition-colors">Specializations</a>
                <a href="#approach" className="hover:text-amber-700 transition-colors">Operational Approach</a>
              </div>
              <a href="#contact" className="hidden sm:inline-block bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-amber-800 transition-all shadow-lg shadow-slate-900/10 text-sm font-bold">
                Get in Touch
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {mobileMenuOpen && (
            <div className="md:hidden border-t border-slate-100 py-4 space-y-1">
              <a
                href="#specializations"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-amber-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Specializations
              </a>
              <a
                href="#approach"
                onClick={() => setMobileMenuOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-slate-600 hover:text-amber-700 rounded-lg hover:bg-slate-50 transition-colors"
              >
                Operational Approach
              </a>
              <a
                href="#contact"
                onClick={() => setMobileMenuOpen(false)}
                className="block mt-2 px-4 py-3 text-sm font-bold bg-slate-900 text-white rounded-lg hover:bg-amber-800 transition-colors text-center"
              >
                Get in Touch
              </a>
            </div>
          )}
        </div>
      </nav>

      <main className="hero-gradient">

        {/* ── Hero ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="fade-in">
                <div className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-50 rounded-full border border-amber-100">
                  Zambia Mining Regulatory Specialists
                </div>
                <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.1] mb-8">
                  Navigating Zambia's <br />
                  <span className="text-amber-700">Mining Lifecycle</span>
                </h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
                  Expert advisory and coordination for mining companies. From cadastre administration to statutory reporting and export approvals—compliance delivered as a structured business process.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="#contact" className="px-10 py-4 bg-amber-700 text-white rounded-lg font-bold hover:bg-amber-800 transition-all text-center shadow-xl shadow-amber-700/30 transform hover:-translate-y-0.5">
                    Schedule a Consultation
                  </a>
                  <a href="#specializations" className="px-10 py-4 border border-slate-200 bg-white rounded-lg font-bold text-slate-700 hover:bg-slate-50 transition-all text-center">
                    View Specialties
                  </a>
                </div>
              </div>

              <div className="mt-16 lg:mt-0 relative fade-in">
                <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl bg-slate-50 border border-slate-100 relative group">
                  <img
                    src={consultationImg}
                    alt="African business professionals in a consultation meeting"
                    className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent"></div>
                </div>
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 sm:left-10 sm:translate-x-0 bg-white p-6 rounded-2xl shadow-2xl border border-slate-100 z-10 w-72">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-green-50 rounded-full flex items-center justify-center shrink-0 border border-green-100">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-bold text-slate-900 leading-tight">Mines &amp; Minerals Act, 2015</p>
                      <p className="text-xs text-slate-500 mt-1 font-medium">Expert Practical Interpretation</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="h-16" />

        {/* ── Specializations ── */}
        <section id="specializations" className="py-24 bg-slate-50/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 fade-in">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Specializations</h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Comprehensive support across the regulatory value chain for license holders in the Zambian mining sector.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: 'Mining Cadastre',
                  desc: 'We handle every step — from licence applications to renewals and amendments — so nothing falls through the cracks.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />,
                  num: '01',
                },
                {
                  title: 'MOSES Reporting',
                  desc: 'Stay compliant with zero stress. We manage all MOSES submissions, production reports, and nil returns on your behalf.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                  num: '02',
                },
                {
                  title: 'Export Permits',
                  desc: 'Get your minerals moving. We fast-track export permit applications and handle every supporting document required.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />,
                  num: '03',
                },
                {
                  title: 'Legislative Guidance',
                  desc: 'Know exactly where you stand. We translate complex legislation into clear, actionable guidance your team can act on.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                  num: '04',
                },
              ].map((svc) => (
                <a href="#contact" key={svc.title} className="group no-underline">
                  <div className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 border-b-2 border-b-slate-100 hover:shadow-xl hover:bg-gradient-to-b hover:from-white hover:to-amber-50 hover:border-b-amber-700 transition-all duration-300 cursor-pointer h-full flex flex-col fade-in">
                    <div className="mb-2">
                      <span className="text-2xl font-bold text-amber-700">{svc.num}</span>
                    </div>
                    <div className="text-amber-700 mb-6 bg-amber-50 w-16 h-16 flex items-center justify-center rounded-lg group-hover:bg-amber-700 group-hover:text-white transition-colors">
                      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">{svc.icon}</svg>
                    </div>
                    <h3 className="text-xl font-bold mb-3 text-slate-800">{svc.title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm mb-5 flex-grow">{svc.desc}</p>
                    <div className="inline-flex items-center text-amber-700 font-semibold text-sm group-hover:text-amber-800 transition-colors">
                      Get in touch <span className="ml-1 inline-block group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* ── Approach ── */}
        <section id="approach" className="py-24 bg-slate-900 text-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-24 items-center">
              <div className="fade-in">
                <h2 className="text-4xl font-bold mb-8">Our <span className="text-amber-500">Operational Approach</span></h2>
                <div className="space-y-6">
                  <p className="text-slate-300 leading-relaxed text-lg">
                    We support mining licence holders in Zambia to achieve and maintain regulatory compliance through a structured, risk-focused approach.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    We begin with a regulatory assessment to identify compliance gaps across licensing, reporting, and export requirements. We then align internal workflows with statutory obligations and support accurate submission of production reports, export permits, and cadastre filings.
                  </p>
                  <p className="text-slate-300 leading-relaxed">
                    Through ongoing monitoring and post-submission support, we help clients reduce regulatory risk and operate with confidence.
                  </p>
                </div>
              </div>
              <div className="mt-16 lg:mt-0 fade-in">
                <div className="bg-slate-800 p-8 rounded-2xl border border-slate-700 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="text-center mb-6">
                    <div className="text-amber-400 mb-4">
                      <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Risk-Focused Compliance</h3>
                    <p className="text-slate-400 text-sm">Structured assessment → Workflow alignment → Ongoing monitoring</p>
                  </div>
                  <div className="space-y-3 mt-6">
                    {[
                      { n: 1, title: 'Regulatory Assessment', sub: 'Identify compliance gaps' },
                      { n: 2, title: 'Workflow Alignment', sub: 'Align with statutory obligations' },
                      { n: 3, title: 'Ongoing Monitoring', sub: 'Post-submission support & risk reduction' },
                    ].map((step) => (
                      <div key={step.n} className="flex items-center gap-3 bg-slate-700/50 rounded-xl p-4">
                        <div className="w-8 h-8 bg-amber-700 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">{step.n}</div>
                        <div>
                          <p className="text-white font-semibold text-sm">{step.title}</p>
                          <p className="text-slate-400 text-xs">{step.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ── */}
        <section id="contact" className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-slate-100 fade-in">
              <div className="lg:grid lg:grid-cols-2">
                <div className="p-12 lg:p-20 bg-amber-50/30 border-r border-slate-50">
                  <h2 className="text-4xl font-bold text-slate-900 mb-6">Let's Secure Your <span className="text-amber-700">License to Operate</span></h2>
                  <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                    Ready to streamline your reporting workflows or need guidance on a complex cadastre amendment? Let's talk about how we can help your team reduce regulatory risk.
                  </p>
                  <a
                    href="https://wa.me/message/2M66M7KPPJHUA1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 px-8 py-5 bg-green-500 hover:bg-green-600 text-white font-bold rounded-2xl transition-all shadow-xl shadow-green-500/30 transform hover:-translate-y-0.5"
                  >
                    <svg className="w-7 h-7 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.125.558 4.122 1.529 5.855L.057 23.885a.75.75 0 00.918.943l6.138-1.61A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 01-4.944-1.354l-.355-.21-3.655.959.975-3.563-.23-.368A9.694 9.694 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                    </svg>
                    <span className="text-lg">Chat on WhatsApp</span>
                  </a>
                </div>

                <div className="p-12 lg:p-20">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input name="name" type="text" placeholder="John Doe" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input name="email" type="email" placeholder="john@company.com" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Service Interest</label>
                      <select name="service" className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                        <option>Mining Cadastre Support</option>
                        <option>Statutory Reporting (MOSES)</option>
                        <option>Export Permit Facilitation</option>
                        <option>Regulatory Compliance Audit</option>
                        <option>Other / General Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <textarea name="message" rows={4} placeholder="How can we help your project?" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all" />
                    </div>
                    <button type="submit" className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-amber-800 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed">
                      Send Inquiry
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ── */}
      <footer className="bg-slate-50 border-t border-slate-200 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10 text-center md:text-left">
            <div>
              <span className="text-xl font-bold text-slate-900 tracking-tight">Cadastre Mining Compliance</span>
              <p className="text-slate-500 text-sm font-medium italic mt-1">Empowering operators with structured regulatory clarity.</p>
            </div>
            <div className="text-slate-400 text-sm font-medium">&copy; 2026 Mining Compliance Advisory. All rights reserved.</div>
            <div className="flex gap-8">
              <a href="https://www.linkedin.com/in/vabzoe" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-amber-700 font-semibold transition-colors">LinkedIn</a>
              <a href="#" className="text-slate-500 hover:text-amber-700 font-semibold transition-colors">Twitter / X</a>
            </div>
          </div>
        </div>
      </footer>

      {/* ── AI Chat Widget ── */}
      <RegulatoryAssistant />
    </div>
  );
}
