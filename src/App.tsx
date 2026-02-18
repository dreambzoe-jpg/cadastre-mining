import React, { useEffect } from 'react';
import RegulatoryAssistant from './RegulatoryAssistant';
import consultationImg from '/consultation.jpg';

export default function App() {
  // Scroll fade-in observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.fade-in').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const btn = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    btn.textContent = '✓ Inquiry Sent!';
    btn.classList.add('!bg-green-700');
    setTimeout(() => {
      btn.textContent = 'Send Inquiry';
      btn.classList.remove('!bg-green-700');
      (e.target as HTMLFormElement).reset();
    }, 3000);
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
              <a href="#contact" className="mt-2 bg-slate-900 text-white px-6 py-2.5 rounded-full hover:bg-amber-800 transition-all shadow-lg shadow-slate-900/10 text-sm font-bold w-fit">
                Get in Touch
              </a>
            </div>
            <div className="hidden md:flex space-x-8 text-sm font-medium text-slate-600">
              <a href="#specializations" className="hover:text-amber-700 transition-colors">Specializations</a>
              <a href="#approach" className="hover:text-amber-700 transition-colors">Operational Approach</a>
            </div>
          </div>
        </div>
      </nav>

      <main className="hero-gradient">

        {/* ── Hero ── */}
        <section className="relative py-20 lg:py-28 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
              <div className="fade-in">
                <div className="inline-block px-4 py-1.5 mb-8 text-xs font-semibold tracking-wider text-amber-800 uppercase bg-amber-50 rounded-full border border-amber-100">
                  Independent &amp; Firm-Based Advisory
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
                },
                {
                  title: 'MOSES Reporting',
                  desc: 'Stay compliant with zero stress. We manage all MOSES submissions, production reports, and nil returns on your behalf.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />,
                },
                {
                  title: 'Export Permits',
                  desc: 'Get your minerals moving. We fast-track export permit applications and handle every supporting document required.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />,
                },
                {
                  title: 'Legislative Guidance',
                  desc: 'Know exactly where you stand. We translate complex legislation into clear, actionable guidance your team can act on.',
                  icon: <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />,
                },
              ].map((svc) => (
                <div key={svc.title} className="bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow group fade-in">
                  <div className="text-amber-700 mb-6 bg-amber-50 w-14 h-14 flex items-center justify-center rounded-lg group-hover:bg-amber-700 group-hover:text-white transition-colors">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">{svc.icon}</svg>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-slate-800">{svc.title}</h3>
                  <p className="text-slate-600 leading-relaxed text-sm">{svc.desc}</p>
                </div>
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
                    Ready to streamline your reporting workflows or need guidance on a complex cadastre amendment? Let's talk about how I can help your team reduce regulatory risk.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-center gap-5 text-slate-700">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-lg">advisory@cadastremining.co.zm</span>
                    </div>
                    <div className="flex items-center gap-5 text-slate-700">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-md">
                        <svg className="w-6 h-6 text-amber-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-lg">Lusaka, Zambia</span>
                    </div>
                  </div>
                </div>

                <div className="p-12 lg:p-20">
                  <form className="space-y-6" onSubmit={handleFormSubmit}>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Full Name</label>
                        <input type="text" placeholder="John Doe" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all" />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-700 mb-2">Email Address</label>
                        <input type="email" placeholder="john@company.com" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all" />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Service Interest</label>
                      <select className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all appearance-none cursor-pointer">
                        <option>Mining Cadastre Support</option>
                        <option>Statutory Reporting (MOSES)</option>
                        <option>Export Permit Facilitation</option>
                        <option>Regulatory Compliance Audit</option>
                        <option>Other / General Advisory</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                      <textarea rows={4} placeholder="How can I help your project?" required className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:bg-white focus:border-transparent outline-none transition-all" />
                    </div>
                    <button type="submit" className="w-full py-5 bg-slate-900 text-white font-bold rounded-xl hover:bg-amber-800 transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98]">
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
            <div className="text-slate-400 text-sm font-medium">&copy; 2024 Mining Compliance Advisory. All rights reserved.</div>
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
