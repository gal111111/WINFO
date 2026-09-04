


import Navbar from "../components/Navbar.tsx";
import Footer from "../components/Footer.tsx";
import { useTranslation } from "react-i18next";
import GreenButton from "../components/GreenButton.tsx";

const InnovationSubsidiesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="h-[60vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/listing.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/90"></div>
        </div>
        <div className="max-w-3xl px-5 z-10">
          <h1 className="leading-snug text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t("listing_support_title")}

          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100/90 leading-relaxed">
            {t("listing_support_details_title")}
          </p>
        </div>
      </section>

      {/* 支援措施詳情 */}
      <section className="bg-gray-200 relative text-black">
        <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-10"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
            <h2 className="text-3xl font-semibold mb-12 text-center">
                 {t("listing_support_details_title")}
            </h2>
        <div className="space-y-12">
      {/* 上市維護 */}
         <div>
            <h3 className="text-xl font-semibold mb-4">
                {t("listing_support_title")}
            </h3>
            <p className="mb-4">{t("listing_support_intro")}</p>
            <ul className="list-disc pl-5 space-y-2">
                <li>{t("listing_support_item_1")}</li>
                <li>{t("listing_support_item_2")}</li>
                <li>{t("listing_support_item_3")}</li>
                <li>{t("listing_support_item_4")}</li>
            </ul>
        </div>

            {/* 上市前/後融資 */}
            <div>
              <h3 className="text-xl font-semibold mb-4">
                {t("listing_financing_section_title")}
                
              </h3>
              <p className="mb-4">{t("listing_financing_intro")}</p>
              <h3 className="text-xl font-semibold mb-4">{t("listing_exclusion_title")}</h3>
              <p className="mb-4">{t("listing_exclusion_intro")}</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>{t("listing_exclusion_item_1")}</li>
                <li>{t("listing_exclusion_item_2")}</li>
                <li>{t("listing_exclusion_item_3")}</li>
                <li>{t("listing_exclusion_item_4")}</li>
                <li>{t("listing_exclusion_item_5")}</li>
                <li>{t("listing_exclusion_item_6")}</li>
                <li>{t("listing_exclusion_item_7")}</li>
                <li>{t("listing_exclusion_item_8")}</li>
                <li>{t("listing_exclusion_item_9")}</li>
                <li>{t("listing_exclusion_item_10")}</li>
                
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 申請指引 */}
      <section className="bg-blue-900 bg-opacity-10 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/financial-pattern.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t("new_innovation_application_guidelines_title")}
          </h2>
          <ul className="list-disc pl-5 space-y-3">
            <li>{t("new_innovation_application_guidelines_process")}</li>
            <li>{t("new_innovation_application_guidelines_notes")}</li>
          </ul>
          <p className="mt-6">{t("new_innovation_application_guidelines_contact")}</p>
        </div>
      </section>

      {/* Green Button */}
      <section className="py-10 text-center">
        <GreenButton />
      </section>


      {/* Contact Section */}
      <section id="apply-form" className="bg-blue-900/20 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t('contact_title')}
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
                      <img src="/images/logo/Logo.png" alt="Company Logo" className="h-20 w-auto relative z-10" />
                    </div>

                    {/* Person name with stylized design */}
                    <div className="text-center relative">
                      {/* Chinese name */}
                      <h3 className="text-2xl font-bold mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-indigo-200">
                        {t('contact_info_name')}
                      </h3>

                      {/* English name */}
                      <p className="text-sm text-blue-400/90 tracking-wider uppercase font-medium">
                        {t('contact_info_name_2')}
                      </p>

                      {/* Animated separator */}
                      <div className="my-3 mx-auto w-24 h-px bg-gradient-to-r from-transparent via-blue-500/70 to-transparent">
                        <div className="h-full w-1/2 bg-blue-400/70 mx-auto transform transition-all duration-700 group-hover:w-full"></div>
                      </div>

                      {/* Company names */}
                      <p className="text-sm font-medium text-blue-200/90">
                        {t('contact_info_company_name_2')}
                      </p>
                      <p className="text-xs text-blue-300/70 mt-1">
                        {t('contact_info_company_name')}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Contact information with enhanced styling */}
                <div className="p-6">
                  <h3 className="text-lg font-medium mb-5 text-white flex items-center">
                    <span className="inline-block w-1 h-5 bg-blue-500 mr-2.5 rounded-full"></span>
                    {t('contact_info')}
                  </h3>

                  {/* Contact details with hover effects */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                      <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-800/50 group-hover:bg-blue-700/30 transition-colors">
                        <svg className="w-5 h-5 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-blue-100/90">{t('contact_info_address')}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                      <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-800/50 group-hover:bg-blue-700/30 transition-colors">
                        <svg className="w-5 h-5 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <p className="text-sm text-blue-100/90">{t("contact_info_email")}<br/>{t("contact_info_email_2")}</p>
                       </div>

                    <div className="flex items-center gap-3 group p-2 rounded-lg hover:bg-blue-900/20 transition-colors">
                      <div className="p-2 bg-blue-900/30 rounded-lg border border-blue-800/50 group-hover:bg-blue-700/30 transition-colors">
                        <svg className="w-5 h-5 text-blue-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-blue-100/90">{t('contact_info_phone')}</p>
                        <p className="text-sm text-blue-100/90 mt-1">{t('contact_info_phone_2')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Business hours with enhanced styling */}
                  <div className="mt-6 pt-6 border-t border-blue-900/20">
                    <h4 className="flex items-center text-base font-medium mb-3 text-white">
                      <svg className="w-4 h-4 mr-2 text-blue-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      {t('contact_business_hour')}
                    </h4>
                    <div className="bg-blue-900/20 rounded-lg p-3 border border-blue-800/30">
                      <p className="text-sm text-blue-100/90">{t('contact_business_hour_1')}</p>
                      <p className="text-sm text-blue-100/90 mt-1">{t('contact_business_hour_2')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">{t('hkstp_apply_name')}</label>
                    <input
                      type="text"
                      placeholder={t('hkstp_apply_name_2')}
                      className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">{t('hkstp_apply_name_3')}</label>
                    <input
                      type="text"
                      placeholder={t('hkstp_apply_name_4')}
                      className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">{t('hkstp_apply_email')}</label>
                    <input
                      type="email"
                      placeholder={t('hkstp_apply_email_2')}
                      className="w-full p-3 border border-blue-900/50 rounded-md bg-gray-800/50 text-white text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-transparent transition-all"
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm text-blue-200 block mb-1">{t('hkstp_apply_phone')}</label>
                    <input
                      type="tel"
                      placeholder={t('hkstp_apply_phone_2')}
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
                  <label className="text-sm text-blue-200 block mb-1">{t('hkstp_apply_description')}</label>
                  <textarea
                    placeholder={t('hkstp_apply_description_2')}
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
                  {t('hkstp_apply_submit')}
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

export default InnovationSubsidiesPage;

