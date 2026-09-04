import { useState } from "react";
import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { useTranslation } from "react-i18next";
import GreenButton from "../components/GreenButton.tsx";

// const overviewSection = () => {
//   // Program Overview
//   <section className="bg-gray-200 relative text-black">
//     <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-10"></div>
//   <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
//     <div className="flex flex-col md:flex-row gap-12">
//       <div className="md:w-1/2">
//         <h2 className="text-3xl font-semibold mb-6">
//           <span className="text-blue-700">Science & Technology Parks:</span> Driving Innovation
//         </h2>
//         <p className="mb-6 text-base leading-relaxed">
//           The STP Program provides comprehensive support for startups at various stages of development,
//           from early ideation to established businesses looking to scale. Our mission is to foster innovation
//           and accelerate the growth of technology-driven companies in Hong Kong.
//         </p>
//         <p className="mb-6 text-base leading-relaxed">
//           With access to funding, mentorship, networking opportunities, and state-of-the-art facilities,
//           the STP Program offers everything entrepreneurs need to transform their ideas into successful businesses.
//         </p>
//
//         <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
//           <div className="bg-white p-5 rounded-lg shadow-md border border-blue-100">
//             <div className="text-blue-700 mb-3">
//               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
//               </svg>
//             </div>
//             <h3 className="font-medium text-lg">World-Class Facilities</h3>
//             <p className="text-gray-600 text-sm mt-2">Access modern workspaces, labs, and specialized equipment</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-md border border-blue-100">
//             <div className="text-blue-700 mb-3">
//               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//               </svg>
//             </div>
//             <h3 className="font-medium text-lg">Expert Mentorship</h3>
//             <p className="text-gray-600 text-sm mt-2">Guidance from industry leaders and seasoned entrepreneurs</p>
//           </div>
//         </div>
//       </div>
//
//       <div className="md:w-1/2 flex flex-col gap-6">
//         <div className="h-64 bg-gradient-to-br from-blue-700/10 to-gray-700/10 rounded-xl overflow-hidden shadow-lg border border-blue-700/20">
//           <div className="w-full h-full bg-[url('/images/startup-meeting.jpg')] bg-cover bg-center hover:scale-105 transition-transform duration-500"></div>
//         </div>
//
//         <div className="grid grid-cols-2 gap-6">
//           <div className="bg-white p-5 rounded-lg shadow-md border border-blue-100">
//             <div className="text-blue-700 mb-3">
//               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
//               </svg>
//             </div>
//             <h3 className="font-medium text-lg">Financial Support</h3>
//             <p className="text-gray-600 text-sm mt-2">Up to HK$21.5M in funding</p>
//           </div>
//           <div className="bg-white p-5 rounded-lg shadow-md border border-blue-100">
//             <div className="text-blue-700 mb-3">
//               <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
//               </svg>
//             </div>
//             <h3 className="font-medium text-lg">Global Network</h3>
//             <p className="text-gray-600 text-sm mt-2">Connect with partners worldwide</p>
//           </div>
//         </div>
//       </div>
//     </div>
//
//     <div className="mt-16 text-center">
//       <a
//         href="#programs"
//         className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-600 transition-all"
//       >
//         View Program Tiers
//         <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
//         </svg>
//       </a>
//     </div>
//   </div>
// </section>
// }
// const keySection = () => {
//   // Key Features
//   <section className="bg-blue-900/10 text-white relative">
//     <div className="absolute inset-0 bg-[url('/images/tech-pattern.png')] bg-repeat opacity-5"></div>
//     <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
//       <h2 className="text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
//         Program Features
//       </h2>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         <div className="bg-gradient-to-br from-blue-800/30 to-gray-800/30 border border-blue-700/20 p-8 rounded-xl flex flex-col items-center hover:shadow-lg hover:shadow-blue-700/10 transition-all duration-300">
//           <div className="h-16 w-16 mb-6 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full flex items-center justify-center">
//             <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold mb-4 text-center">R&D Resources</h3>
//           <p className="text-center text-blue-100/70 mb-6">
//             Access to cutting-edge laboratories, testing facilities, and specialized equipment for product development.
//           </p>
//           <ul className="space-y-2 w-full">
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Prototyping labs</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Testing equipment</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Research partnerships</span>
//             </li>
//           </ul>
//         </div>
//
//         <div className="bg-gradient-to-br from-blue-800/30 to-gray-800/30 border border-blue-700/20 p-8 rounded-xl flex flex-col items-center hover:shadow-lg hover:shadow-blue-700/10 transition-all duration-300">
//           <div className="h-16 w-16 mb-6 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full flex items-center justify-center">
//             <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold mb-4 text-center">Business Services</h3>
//           <p className="text-center text-blue-100/70 mb-6">
//             Comprehensive support from legal and accounting to marketing and international expansion.
//           </p>
//           <ul className="space-y-2 w-full">
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">IP protection</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Marketing strategy</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Financial planning</span>
//             </li>
//           </ul>
//         </div>
//
//         <div className="bg-gradient-to-br from-blue-800/30 to-gray-800/30 border border-blue-700/20 p-8 rounded-xl flex flex-col items-center hover:shadow-lg hover:shadow-blue-700/10 transition-all duration-300">
//           <div className="h-16 w-16 mb-6 bg-gradient-to-br from-blue-600/20 to-indigo-600/20 rounded-full flex items-center justify-center">
//             <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold mb-4 text-center">Network Access</h3>
//           <p className="text-center text-blue-100/70 mb-6">
//             Connect with investors, industry leaders, and potential clients through our extensive network.
//           </p>
//           <ul className="space-y-2 w-full">
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Investor showcases</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Industry partnerships</span>
//             </li>
//             <li className="flex items-center gap-2">
//               <svg className="w-4 h-4 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"></path>
//               </svg>
//               <span className="text-sm text-blue-100/80">Global tech events</span>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   </section>
//
// }
// const successStorySection = () => {
//   // Success Stories
//   <section className="bg-gray-900 text-white relative">
//     <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-5"></div>
//     <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
//       <h2 className="text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
//         Success Stories
//       </h2>
//
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//         {[
//           {
//             name: "NeuralTech AI",
//             image: "bg-[url('/images/startup-1.jpg')]",
//             industry: "Artificial Intelligence",
//             description: "Developed groundbreaking neural interface technology and secured $12M Series A after graduating from our Acceleration program.",
//             result: "Acquired for $75M"
//           },
//           {
//             name: "GreenSync",
//             image: "bg-[url('/images/startup-2.jpg')]",
//             industry: "CleanTech",
//             description: "Created revolutionary energy management systems that reduce commercial building consumption by 40%, supported by our Incubation program.",
//             result: "Series B funding: $28M"
//           },
//           {
//             name: "MediChart",
//             image: "bg-[url('/images/startup-3.jpg')]",
//             industry: "HealthTech",
//             description: "Built secure blockchain-based medical records platform that's now used by over 200 hospitals worldwide.",
//             result: "IPO valued at $350M"
//           }
//         ].map((story, index) => (
//           <div key={index} className="bg-gradient-to-br from-blue-900/30 to-gray-800/30 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-blue-700/10 transition-all duration-300 border border-blue-900/30">
//             <div className="h-48 overflow-hidden">
//               <div className={`w-full h-full ${story.image} bg-cover bg-center hover:scale-105 transition-all duration-500`}></div>
//             </div>
//             <div className="p-6">
//               <div className="flex justify-between items-center mb-3">
//                 <h3 className="text-xl font-semibold text-blue-200">{story.name}</h3>
//                 <span className="px-3 py-1 bg-blue-700/30 text-blue-200 text-xs rounded-full">{story.industry}</span>
//               </div>
//               <p className="text-blue-100/80 mb-4 text-sm">{story.description}</p>
//               <div className="flex justify-between items-center">
//                 <span className="text-green-400 font-medium">{story.result}</span>
//                 <a href="#" className="text-blue-400 hover:text-blue-300 text-sm flex items-center gap-2">
//                   Read more
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M5 12h14"></path>
//                     <path d="m12 5 7 7-7 7"></path>
//                   </svg>
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// }
// const faqSection = () => {
//   // FAQ Section
//   <section className="bg-gray-200 text-black relative">
//     <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-10"></div>
//     <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
//       <h2 className="text-3xl font-semibold mb-12 text-center">
//         Frequently Asked Questions
//       </h2>
//
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//         {[
//           {
//             question: "What types of startups are eligible for the STP program?",
//             answer: "We accept startups across technology sectors including AI, biotech, cleantech, fintech, and advanced manufacturing that demonstrate innovation and market potential."
//           },
//           {
//             question: "How selective is the admission process?",
//             answer: "Our acceptance rate is approximately 8-12% depending on the program tier. We evaluate based on innovation level, team qualifications, market opportunity, and growth potential."
//           },
//           {
//             question: "Can international startups apply?",
//             answer: "Yes, international startups are welcome to apply. If accepted, we provide assistance with company registration, visas, and relocation to Hong Kong."
//           },
//           {
//             question: "Do you take equity in participating startups?",
//             answer: "For Ideation and Incubation tiers, we don't take equity. For Acceleration and Elite tiers, we typically take 3-8% equity depending on funding provided and program resources."
//           },
//           {
//             question: "What happens after the program ends?",
//             answer: "Graduates join our alumni network with continued access to certain resources, investor introductions, and opportunities to mentor new cohorts. Many advance to higher program tiers."
//           },
//           {
//             question: "Are there specific application deadlines?",
//             answer: "While we review applications quarterly, we accept applications on a rolling basis. However, the Elite program has two fixed cohorts per year with specific deadlines."
//           }
//         ].map((faq, index) => (
//           <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all">
//             <h3 className="text-lg font-medium mb-3 text-blue-900">{faq.question}</h3>
//             <p className="text-gray-600">{faq.answer}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   </section>
// }

const STPPage = () => {
  const { t } = useTranslation();
  const [isComparisonVisible, setIsComparisonVisible] = useState(false);
  const toggleComparison = (e: any) => {
    e.preventDefault();
    setIsComparisonVisible(!isComparisonVisible);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[60vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/hkstp.jpg')] bg-cover bg-center opacity-80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/90 to-blue-900/80"></div>
        </div>

        <div className="max-w-3xl px-5 z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 leading-tight">
            {t("work_hkstp_1")}
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200 leading-tight">
            {t("work_hkstp_2")}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100/90 leading-relaxed">
            {t("hkstp_description")}
          </p>
          <a
            href="#programs"
            className="text-white inline-block px-8 py-3 bg-blue-700 no-underline rounded-md font-medium hover:bg-blue-600 transition-all duration-300"
          >
            {t("hkstp_description_2")}
          </a>
        </div>
      </section>

      {/* Program Tiers */}
      <section id="programs" className="bg-gray-900 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t("hkstp_program_title")}
          </h2>

          <p className="text-center max-w-3xl mx-auto text-blue-100/80 mb-12">
            {t("hkstp_program_text")}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Ideation Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden hover:shadow-lg hover:shadow-blue-700/10 transition-all">
              <div className="bg-blue-800 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_ideation")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="text-center">
                  <span className="text-xs text-blue-300 uppercase">
                    {t("funding_up_to_table")}
                  </span>
                  <p className="text-2xl font-bold">{t("amount_ideation")}</p>
                  <span className="text-sm text-blue-100/70">
                    {t("duration_ideation")}
                  </span>
                </div>
                <div className="space-y-2 border-t border-blue-900/30 pt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_ideation1")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_ideation2")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_ideation3")}</span>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-blue-900/30">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>

            {/* Incubation Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden hover:shadow-lg hover:shadow-blue-700/10 transition-all">
              <div className="bg-blue-700 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_incubation")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="text-center">
                  <span className="text-xs text-blue-300 uppercase">
                    {t("funding_up_to_table")}
                  </span>
                  <p className="text-2xl font-bold">{t("amount_incubation")}</p>
                  <span className="text-sm text-blue-100/70">
                    {t("duration_incubation")}
                  </span>
                </div>
                <div className="space-y-2 border-t border-blue-900/30 pt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_ideation1")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_ideation2")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_ideation3")}</span>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-blue-900/30">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>

            {/* Acceleration Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden hover:shadow-lg hover:shadow-blue-700/10 transition-all">
              <div className="bg-blue-700 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_acceleration")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="text-center">
                  <span className="text-xs text-blue-300 uppercase">
                    {t("funding_up_to_table")}
                  </span>
                  <p className="text-2xl font-bold">{t("amount_incubation")}</p>
                  <span className="text-sm text-blue-100/70">
                    {t("duration_acceleration")}
                  </span>
                </div>
                <div className="space-y-2 border-t border-blue-900/30 pt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_acceleration1")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_acceleration2")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_acceleration3")}</span>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-blue-900/30">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>

            {/* Elite Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden hover:shadow-lg hover:shadow-blue-700/10 transition-all">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_elite")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div className="text-center">
                  <span className="text-xs text-blue-300 uppercase">
                    {t("funding_up_to_table")}
                  </span>
                  <p className="text-2xl font-bold">{t("amount_elite")}</p>
                  <span className="text-sm text-blue-100/70">
                    {t("duration_elite")}
                  </span>
                </div>
                <div className="space-y-2 border-t border-blue-900/30 pt-4">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_elite1")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_elite2")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-green-500"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                    <span className="text-sm">{t("desc_elite3")}</span>
                  </div>
                </div>
              </div>
              <div className="p-5 border-t border-blue-900/30">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center rounded-md hover:from-blue-600 hover:to-indigo-500 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="mt-12 text-center">
              <button
                onClick={toggleComparison}
                className="text-blue-400 hover:text-blue-300 inline-flex items-center bg-transparent border-0 cursor-pointer"
              >
                {isComparisonVisible
                  ? t("hide_program")
                  : t("view_detailed_program")}
                <svg
                  className={`w-5 h-5 ml-1 transition-transform duration-300 ${
                    isComparisonVisible ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* STP Programs Section - NEW SECTION ADDED HERE */}
      <section
        id="comparison"
        className={`bg-gray-900 text-white relative overflow-hidden transition-all duration-500 ease-in-out ${
          isComparisonVisible
            ? "max-h-[5000px] opacity-100"
            : "max-h-0 opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          {/* Mobile Cards (shown only on mobile) */}
          <div className="md:hidden space-y-8">
            {/* Ideation Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden">
              <div className="bg-blue-800 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_ideation")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("table_funding")}
                  </h4>
                  <p>{t("amount_ideation")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("duration")}
                  </h4>
                  <p>1 {t("year")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("application_timeline")}
                  </h4>
                  <p>{t("jan")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("support")}
                  </h4>
                  <p className="text-sm text-blue-100/80 mb-2 italic">
                    {t("support_all_programs_include")}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("talent_mentorship_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("startup_networking_events")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_training_workshops")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_matching_opportunities")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("corporate_partnership_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("fundraising_opportunities")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("years_of_incorporation")}
                  </h4>
                  <p className="text-sm">
                    {t("incorporation_individual_team_no_limitation")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_registered_company_2_years_less")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_non_ipo_company")}
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("support")}
                  </h4>
                  <p className="text-sm text-blue-100/80 mb-2 italic">
                    {t("support_all_programs_include")}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("talent_mentorship_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("startup_networking_events")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_training_workshops")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_matching_opportunities")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("corporate_partnership_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("fundraising_opportunities")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("minimum_employees")}
                  </h4>
                  <p className="text-sm">{t("employees_at_least_1_staff")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("valuation_revenue")}
                  </h4>
                  <p>{t("na")}</p>
                </div>
              </div>
              <div className="p-4 border-t border-blue-900/30 bg-blue-900/20">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>

            {/* Incubation Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden">
              <div className="bg-blue-700 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_incubation")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("table_funding")}
                  </h4>
                  <p>{t("amount_incubation")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("duration")}
                  </h4>
                  <p>3 {t("years")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("application_timeline")}
                  </h4>
                  <p>{t("year_round")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("support")}
                  </h4>
                  <p className="text-sm text-blue-100/80 mb-2 italic">
                    {t("support_all_programs_include")}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("talent_mentorship_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("startup_networking_events")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_training_workshops")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_matching_opportunities")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("corporate_partnership_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("fundraising_opportunities")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("years_of_incorporation")}
                  </h4>
                  <p className="text-sm">
                    {t("incorporation_hk_registered_company")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_general_startups_5_years_less")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_non_ipo_company")}
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("minimum_employees")}
                  </h4>
                  <p className="text-sm">{t("employees_2_fulltime_onsite")}</p>
                  <p className="text-sm">
                    {t("employees_min_50_percent_technical")}
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("valuation_revenue")}
                  </h4>
                  <p className="text-sm">{t("na")}</p>
                  <p className="text-sm">{t("company_has_prototype_mvp")}</p>
                </div>
              </div>
              <div className="p-4 border-t border-blue-900/30 bg-blue-900/20">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>

            {/* Acceleration Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden">
              <div className="bg-blue-600 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_acceleration")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("table_funding")}
                  </h4>
                  <p>{t("amount_acceleration")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("duration")}
                  </h4>
                  <p>2 {t("years")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("application_timeline")}
                  </h4>
                  <p>{t("by_invit")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("support")}
                  </h4>
                  <p className="text-sm text-blue-100/80 mb-2 italic">
                    {t("support_all_programs_include")}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("talent_mentorship_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("startup_networking_events")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_training_workshops")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_matching_opportunities")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("corporate_partnership_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("fundraising_opportunities")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("years_of_incorporation")}
                  </h4>
                  <p className="text-sm">
                    {t("incorporation_hk_registered_company")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_general_startups_5_years_less")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_non_ipo_company")}
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("minimum_employees")}
                  </h4>
                  <p className="text-sm">{t("employees_worldwide_max_100")}</p>
                  <p className="text-sm">
                    {t("employees_at_least_1_fulltime_onsite")}
                  </p>
                  <p className="text-sm">
                    {t("employees_min_50_percent_technical")}
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("valuation_revenue")}
                  </h4>
                  <p className="text-sm">{t("valuation_seed_series_a")}</p>
                  <p className="text-sm">{t("revenue_hkd_20million")}</p>
                </div>
              </div>
              <div className="p-4 border-t border-blue-900/30 bg-blue-900/20">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-blue-700 text-white text-center rounded-md hover:bg-blue-600 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>

            {/* Elite Card */}
            <div className="bg-gradient-to-b from-blue-900/40 to-gray-800/40 rounded-xl border border-blue-700/30 overflow-hidden">
              <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-center">
                <h3 className="text-xl font-semibold text-white">
                  {t("stage_elite")}
                </h3>
              </div>
              <div className="p-5 space-y-4">
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("table_funding")}
                  </h4>
                  <p>{t("amount_elite")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("duration")}
                  </h4>
                  <p>3 {t("years")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("application_timeline")}
                  </h4>
                  <p>{t("by_invit")}</p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("support")}
                  </h4>
                  <p className="text-sm text-blue-100/80 mb-2 italic">
                    {t("support_all_programs_include")}
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("talent_mentorship_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("startup_networking_events")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_training_workshops")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("business_matching_opportunities")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("corporate_partnership_programmes")}
                      </span>
                    </li>
                    <li className="flex items-start">
                      <svg
                        className="w-4 h-4 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        ></path>
                      </svg>
                      <span className="text-sm">
                        {t("fundraising_opportunities")}
                      </span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("years_of_incorporation")}
                  </h4>
                  <p className="text-sm">
                    {t("incorporation_hk_registered_company")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_2_years_or_more")}
                  </p>
                  <p className="text-sm">
                    {t("incorporation_non_ipo_company")}
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("minimum_employees")}
                  </h4>
                  <p className="text-sm">{t("employees_worldwide_min_30")}</p>
                  <p className="text-sm">
                    {t("employees_at_least_1_fulltime_onsite")}
                  </p>
                  <p className="text-sm">
                    {t("employees_min_50_percent_technical")}
                  </p>
                </div>
                <div>
                  <h4 className="text-blue-300 text-sm font-medium mb-1">
                    {t("valuation_revenue")}
                  </h4>
                  <p className="text-sm">{t("valuation_series_b_above")}</p>
                  <p className="text-sm">{t("revenue_hkd_50million")}</p>
                </div>
              </div>
              <div className="p-4 border-t border-blue-900/30 bg-blue-900/20">
                <a
                  href="#apply"
                  className="block w-full py-2 bg-gradient-to-r from-blue-700 to-indigo-600 text-white text-center rounded-md hover:from-blue-600 hover:to-indigo-500 transition-colors"
                >
                  {t("apply_now")}
                </a>
              </div>
            </div>
          </div>

          {/* Desktop Table (hidden on mobile) */}
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="p-4 text-left border-b border-blue-800/30"></th>
                  <th className="p-4 text-center border-b border-blue-800/30 bg-blue-800/40 rounded-tl-lg">
                    <h3 className="text-xl font-semibold">
                      {t("stage_ideation")}
                    </h3>
                  </th>
                  <th className="p-4 text-center border-b border-blue-800/30 bg-blue-700/40">
                    <h3 className="text-xl font-semibold">
                      {t("stage_incubation")}
                    </h3>
                  </th>
                  <th className="p-4 text-center border-b border-blue-800/30 bg-blue-600/40">
                    <h3 className="text-xl font-semibold">
                      {t("stage_acceleration")}
                    </h3>
                  </th>
                  <th className="p-4 text-center border-b border-blue-800/30 bg-gradient-to-r from-blue-600/40 to-indigo-600/40 rounded-tr-lg">
                    <h3 className="text-xl font-semibold">
                      {t("stage_elite")}
                    </h3>
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Funding */}
                <tr className="hover:bg-blue-900/10 transition-colors">
                  <td className="p-4 border-b border-blue-800/30 bg-gray-800/30 font-medium text-blue-300">
                    {t("table_funding")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("amount_ideation")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("amount_incubation")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("amount_acceleration")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("amount_elite")}
                  </td>
                </tr>

                {/* Duration */}
                <tr className="hover:bg-blue-900/10 transition-colors">
                  <td className="p-4 border-b border-blue-800/30 bg-gray-800/30 font-medium text-blue-300">
                    {t("duration")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    1 {t("year")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    3 {t("years")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    2 {t("years")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    3 {t("years")}
                  </td>
                </tr>

                {/* Application Timeline */}
                <tr className="hover:bg-blue-900/10 transition-colors">
                  <td className="p-4 border-b border-blue-800/30 bg-gray-800/30 font-medium text-blue-300">
                    {t("application_timeline")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("jan")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("year_round")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("by_invit")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("by_invit")}
                  </td>
                </tr>

                {/* Support - MODIFIED TO SPAN ACROSS ALL COLUMNS */}
                <tr className="hover:bg-blue-900/10 transition-colors">
                  <td className="p-4 border-b border-blue-800/30 bg-gray-800/30 font-medium text-blue-300 align-top">
                    {t("support")}
                  </td>
                  <td
                    colSpan={4}
                    className="p-6 border-b border-blue-800/30 bg-gradient-to-r from-blue-900/10 to-indigo-900/10"
                  >
                    <div className="text-center mb-3">
                      <p className="text-blue-200 font-medium">
                        {t("support_all_programs_include")}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{t("talent_mentorship_programmes")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{t("startup_networking_events")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{t("business_training_workshops")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{t("business_matching_opportunities")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{t("corporate_partnership_programmes")}</span>
                      </div>
                      <div className="flex items-start">
                        <svg
                          className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M5 13l4 4L19 7"
                          ></path>
                        </svg>
                        <span>{t("fundraising_opportunities")}</span>
                      </div>
                    </div>
                  </td>
                </tr>

                {/* Years of incorporation */}
                <tr className="hover:bg-blue-900/10 transition-colors">
                  <td className="p-4 border-b border-blue-800/30 bg-gray-800/30 font-medium text-blue-300 align-top">
                    {t("years_of_incorporation")}
                    <div className="text-xs text-blue-100/60 font-normal mt-1">
                      {t("years_of_incorporation_note")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("incorporation_individual_team_no_limitation")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_registered_company_2_years_less")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_non_ipo_company")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("incorporation_hk_registered_company")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_general_startups_5_years_less")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_non_ipo_company")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("incorporation_hk_registered_company")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_general_startups_5_years_less")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_non_ipo_company")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("incorporation_hk_registered_company")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_2_years_or_more")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("incorporation_non_ipo_company")}
                    </div>
                  </td>
                </tr>

                {/* Minimum employees */}
                <tr className="hover:bg-blue-900/10 transition-colors">
                  <td className="p-4 border-b border-blue-800/30 bg-gray-800/30 font-medium text-blue-300 align-top">
                    {t("minimum_employees")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("employees_at_least_1_staff")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("employees_2_fulltime_onsite")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("employees_min_50_percent_technical")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("employees_worldwide_max_100")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("employees_at_least_1_fulltime_onsite")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("employees_min_50_percent_technical")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("employees_worldwide_min_30")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("employees_at_least_1_fulltime_onsite")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("employees_min_50_percent_technical")}
                    </div>
                  </td>
                </tr>

                {/* Valuation & Revenue */}
                <tr className="hover:bg-blue-900/10 transition-colors">
                  <td className="p-4 border-b border-blue-800/30 bg-gray-800/30 font-medium text-blue-300 align-top">
                    {t("valuation_revenue")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30 text-center">
                    {t("na")}
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">{t("na")}</div>
                    <div className="text-sm mt-1">
                      {t("company_has_prototype_mvp")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("valuation_seed_series_a")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("revenue_hkd_20million")}
                    </div>
                  </td>
                  <td className="p-4 border-b border-blue-800/30">
                    <div className="text-sm">
                      {t("valuation_series_b_above")}
                    </div>
                    <div className="text-sm mt-1">
                      {t("revenue_hkd_50million")}
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* CTA Section */}
          {/*<div className="mt-12 text-center">*/}
          {/*  <p className="text-blue-100/70 mb-5">Not sure which program is right for you? Contact our team for guidance.</p>*/}
          {/*  <a*/}
          {/*    href="#contact"*/}
          {/*    className="px-8 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-600 transition-all duration-300 inline-flex items-center"*/}
          {/*  >*/}
          {/*    Get Program Guidance*/}
          {/*    <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">*/}
          {/*      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3"></path>*/}
          {/*    </svg>*/}
          {/*  </a>*/}
          {/*</div>*/}
        </div>
      </section>

      {/* Application Process */}
      <section id="apply" className="relative py-24">
        {/* Modern light background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50"></div>
        <div
          className="absolute inset-0 opacity-5"
          style={{ backgroundImage: "url(/images/subtle-grid.png)" }}
        ></div>
        <div className="absolute right-0 top-0 w-96 h-96 bg-blue-300/20 rounded-full filter blur-3xl"></div>
        <div className="absolute left-0 bottom-0 w-72 h-72 bg-indigo-300/20 rounded-full filter blur-3xl"></div>

        <div className="relative z-10 w-[90%] max-w-6xl mx-auto">
          {/* Section header with elegant styling */}
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              {t("apply_title")}
            </h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              {t("apply_description")}
            </p>
          </div>
          {/* Flowing timeline design */}
          <div className="relative">
            {/* Desktop timeline */}
            <div className="hidden md:block relative">
              {/* Main flowing line */}
              <div className="absolute top-12 left-0 right-0 h-4">
                <svg
                  className="w-full h-20"
                  viewBox="0 0 1200 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0,40 C300,0 500,80 800,40 C1000,10 1100,70 1200,40"
                    stroke="url(#paint0_linear)"
                    strokeWidth="3"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear"
                      x1="0"
                      y1="40"
                      x2="1200"
                      y2="40"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#3B82F6" />
                      <stop offset="1" stopColor="#6366F1" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Timeline steps container */}
              <div className="grid grid-cols-4 gap-6">
                {[
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                        ></path>
                      </svg>
                    ),
                    titleKey: "submit_application_title", // Use key instead of hardcoded string
                    descriptionKey: "submit_application_description", // Use key
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        ></path>
                      </svg>
                    ),
                    titleKey: "initial_screening_title",
                    descriptionKey: "initial_screening_description",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                        ></path>
                      </svg>
                    ),
                    titleKey: "panel_interview_title",
                    descriptionKey: "panel_interview_description",
                  },
                  {
                    icon: (
                      <svg
                        className="w-8 h-8 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        ></path>
                      </svg>
                    ),
                    titleKey: "onboarding_title",
                    descriptionKey: "onboarding_description",
                  },
                ].map((step, index) => (
                  <div key={index} className="flex flex-col items-center">
                    {/* Step marker with pulsing effect */}
                    <div
                      className={`relative ${
                        index % 2 === 0 ? "mt-4" : "mt-16"
                      }`}
                    >
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full opacity-30 animate-pulse"></div>
                      <div className="relative h-12 w-12 rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg z-10">
                        <div className="text-white font-bold">{index + 1}</div>
                      </div>
                    </div>

                    {/* Card with raised effect */}
                    <div
                      className={`mt-8 w-full bg-white rounded-xl shadow-md p-6 transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl group relative ${
                        index % 2 === 0 ? "origin-top" : "origin-bottom"
                      }`}
                    >
                      {/* Decorative corner accent */}
                      <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-bl-3xl rounded-tr-xl opacity-50"></div>

                      {/* Icon container with rotating animation on hover */}
                      <div className="flex justify-center mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-md transform transition-transform group-hover:rotate-6">
                          {step.icon}
                        </div>
                      </div>

                      {/* Content */}
                      <h3 className="text-xl font-bold text-gray-800 text-center mb-2">
                        {t(step.titleKey)}
                      </h3>
                      <p className="text-gray-600 text-center">
                        {t(step.descriptionKey)}
                      </p>

                      {/* Connection lines for desktop */}
                      {index < 3 && (
                        <div className="hidden md:block absolute -right-3 top-1/2 transform -translate-y-1/2 z-10">
                          <svg
                            className="w-6 h-6 text-indigo-500"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              {/* <br/>
            <br/>            <br/>
            <div className="mb-16 text-center">
              <p className="text-xl font-normal text-gray-800 mb-4">{t('how_to_apply_reminder')}</p>
            </div>
            <br/>

            <div className="mb-16 text-start">
              <p className="text-3xl font-normal text-gray-800 mb-4">{t('contact_us')}</p>
            </div>
            <div className="  text-white">
              <main className="text-center">
                <GreenButton />
              </main>
            </div> */}
            </div>

            {/* Mobile timeline - Vertical flowing design */}
            <div className="md:hidden space-y-12">
              {[
                {
                  icon: (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                      ></path>
                    </svg>
                  ),
                  titleKey: "submit_application_title",
                  descriptionKey: "submit_application_description",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      ></path>
                    </svg>
                  ),
                  titleKey: "initial_screening_title",
                  descriptionKey: "initial_screening_description",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      ></path>
                    </svg>
                  ),
                  titleKey: "panel_interview_title",
                  descriptionKey: "panel_interview_description",
                },
                {
                  icon: (
                    <svg
                      className="w-7 h-7 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      ></path>
                    </svg>
                  ),
                  titleKey: "onboarding_title",
                  descriptionKey: "onboarding_description",
                },
              ].map((step, index) => (
                <div key={index} className="relative">
                  {/* Vertical connector line */}
                  {index < 3 && (
                    <div className="absolute left-6 top-12 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-indigo-400 z-0"></div>
                  )}

                  <div className="flex">
                    {/* Number badge with pulsing effect */}
                    <div className="relative mr-4 z-10">
                      <div className="absolute -inset-1.5 rounded-full bg-blue-400/20 animate-pulse"></div>
                      <div className="relative w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold">
                          {index + 1}
                        </span>
                      </div>
                    </div>

                    {/* Content card with tilted design */}
                    <div className="flex-1 bg-white rounded-lg shadow-md p-5 relative overflow-hidden transform transition-all duration-300 hover:shadow-xl border border-gray-100">
                      {/* Background decorative element */}
                      <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-gradient-to-tl from-blue-100 to-transparent rounded-full opacity-30"></div>

                      {/* Icon with background */}
                      <div className="flex items-center mb-3">
                        <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-sm mr-3">
                          {step.icon}
                        </div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {t(step.titleKey)}
                        </h3>
                      </div>
                      <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg shadow-sm mr-3">
                        {step.icon}
                      </div>

                      <p className="text-gray-600 pl-12">
                        {t(step.descriptionKey)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <br />
          <br /> <br />
          <div className="mb-16 text-center">
            <p className="text-xl font-normal text-gray-800 mb-4">
              {t("how_to_apply_reminder")}
            </p>
          </div>
          <br />
          <div className="mb-16 text-start">
            <p className="text-3xl font-normal text-gray-800 mb-4">
              {t("contact_us")}
            </p>
          </div>
          <div className="  text-white">
            <main className="text-center">
              <GreenButton />
            </main>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="apply-form" className="bg-blue-900/20 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t("hkstp_apply_title")}
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="md:col-span-1">
              <div className="bg-gradient-to-br from-gray-800/80 to-gray-900/90 backdrop-blur-sm rounded-xl border border-blue-900/30 shadow-lg overflow-hidden">
                {/* Logo and name section */}
                <div className="p-6 border-b border-blue-900/20 relative">
                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-blue-500/10 rounded-full blur-xl"></div>

                  {/* Logo with glow effect */}
                  <div className="flex flex-col items-center">
                    <div className="relative mb-4 group">
                      <div className="absolute inset-0 bg-blue-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                      <img
                        src="/images/logo/Logo.png"
                        alt="Company Logo"
                        className="h-20 w-auto relative z-10"
                      />
                    </div>

                    {/* Person name with stylized design */}
                    <div className="text-center relative">
                      {/* Chinese name */}
                      <h3 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                        {t("contact_info_name")}
                      </h3>

                      {/* English name */}
                      <p className="text-sm text-blue-400/90 tracking-wider uppercase font-medium">
                        {t("contact_info_name_2")}
                      </p>

                      {/* Animated separator */}
                      <div className="my-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent">
                        <div className="h-full w-1/2 bg-blue-400/70 mx-auto transform transition-all duration-700 group-hover:w-full"></div>
                      </div>

                      {/* Company names */}
                      <p className="text-sm font-medium text-blue-200/90">
                        {t("contact_info_company_name_2")}
                      </p>
                      <p className="text-xs text-blue-300/70 mt-1">
                        {t("contact_info_company_name")}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact information with enhanced styling */}
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-5 text-white flex items-center">
                    <span className="inline-block w-1 h-5 bg-blue-500 mr-2.5 rounded-full"></span>
                    {t("contact_info")}
                  </h3>

                  {/* Contact details with hover effects */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                      <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-800/50 group-hover:bg-blue-700/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-blue-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-blue-100/90">
                          {t("contact_info_address")}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                      <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-800/50 group-hover:bg-blue-700/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-blue-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-blue-100/90">
                        {t("contact_info_email")}
                        <br />
                        {t("contact_info_email_2")}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                      <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-800/50 group-hover:bg-blue-700/30 transition-colors">
                        <svg
                          className="w-5 h-5 text-blue-300"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-blue-100/90">
                          {t("contact_info_phone")}
                        </p>
                        <p className="text-sm text-blue-100/90 mt-1">
                          {t("contact_info_phone_2")}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Business hours with enhanced styling */}
                  <div className="mt-6 pt-6 border-t border-blue-900/20">
                    <h4 className="flex items-center text-base font-medium mb-3 text-white">
                      <svg
                        className="w-4 h-4 mr-2 text-blue-400"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      {t("contact_business_hour")}
                    </h4>
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-800/30">
                      <p className="text-sm text-blue-100/90">
                        {t("contact_business_hour_1")}
                      </p>
                      <p className="text-sm text-blue-100/90 mt-1">
                        {t("contact_business_hour_2")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">
                      {t("hkstp_apply_name")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("hkstp_apply_name_2")}
                      className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">
                      {t("hkstp_apply_name_3")}
                    </label>
                    <input
                      type="text"
                      placeholder={t("hkstp_apply_name_4")}
                      className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">
                      {t("hkstp_apply_email")}
                    </label>
                    <input
                      type="email"
                      placeholder={t("hkstp_apply_email_2")}
                      className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">
                      {t("hkstp_apply_phone")}
                    </label>
                    <input
                      type="tel"
                      placeholder={t("hkstp_apply_phone_2")}
                      className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                {/*<div>*/}
                {/*  <label className="text-sm text-blue-200 block mb-1">Program of Interest*</label>*/}
                {/*  <select*/}
                {/*    className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"*/}
                {/*    required*/}
                {/*  >*/}
                {/*    <option value="" className="bg-gray-900">Select a program</option>*/}
                {/*    <option value="ideation" className="bg-gray-900">Ideation</option>*/}
                {/*    <option value="incubation" className="bg-gray-900">Incubation</option>*/}
                {/*    <option value="acceleration" className="bg-gray-900">Acceleration</option>*/}
                {/*    <option value="elite" className="bg-gray-900">Elite</option>*/}
                {/*  </select>*/}
                {/*</div>*/}

                <div>
                  <label className="text-sm text-blue-200 block mb-1">
                    {t("hkstp_apply_description")}
                  </label>
                  <textarea
                    placeholder={t("hkstp_apply_description_2")}
                    className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm h-36 resize-y focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                    required
                  ></textarea>
                </div>

                {/*<div className="flex items-start gap-2 mt-4">*/}
                {/*  <input type="checkbox" className="mt-1" required />*/}
                {/*  <p className="text-sm text-blue-100/90">I agree to the processing of my personal data according to the <a href="#privacy" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>.</p>*/}
                {/*</div>*/}

                <button
                  type="submit"
                  className="px-6 py-3 bg-blue-700 text-white border-none rounded-md text-sm cursor-pointer transition-all hover:bg-blue-600 font-medium mt-2"
                >
                  {t("hkstp_apply_submit")}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default STPPage;
