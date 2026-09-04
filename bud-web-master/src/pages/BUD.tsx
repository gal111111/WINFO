// import { useTranslation } from "react-i18next";
import Navbar from "../components/Navbar.tsx";
import RequiredDocuments from "../components/RequiredDocuments.tsx";
import Footer from "../components/Footer.tsx";
import { useTranslation } from "react-i18next";
import ApplicationGuide from "../components/ApplicationGuide.tsx";
import GreenButton from "../components/GreenButton.tsx";

const BUDPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="h-[60vh] relative flex flex-col justify-center items-center text-center overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/images/BUD.jpg')] bg-cover bg-center opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-gray-900/90"></div>
        </div>

        <div className="max-w-3xl px-5 z-10">
          <h1 className="leading-snug text-4xl md:text-5xl lg:text-6xl mb-6 font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t("work_bud")}
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100/90 leading-relaxed">
            {t("bud_fund_description")}
          </p>
          {/* <p className="text-lg md:text-xl mb-8 text-blue-100/90 leading-relaxed">
            Supporting Hong Kong enterprises in developing markets and enhancing competitiveness
          </p> */}
          {/* <a href="#apply" className="text-white inline-block px-8 py-3 bg-blue-700 no-underline rounded-md font-medium hover:bg-blue-600 transition-all duration-300">
            Apply Now </a> */}
        </div>
      </section>

      {/* 計劃背景與目的 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 relative text-black">
        <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-10"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("bud_1")}
          </h2>
          <div className=" items-center">
            <div>
              <p className="mb-6 text-base text-lg leading-relaxed">
                {t("bud_service_title1")}
              </p>
              <p className="mb-6 text-base text-lg leading-relaxed">
                {t("bud_service_overview")}
              </p>
              <ul className="mb-6 text-base text-lg leading-relaxed list-disc pl-5">
                <li>{t("bud_service_highlight_1")}</li>
                <li>{t("bud_service_highlight_2")}</li>
                <li>{t("bud_service_highlight_3")}</li>
              </ul>
              {/* Button Download PDF */}
              {/* <a
                href="../src/assets/BUD_pdf.pdf"
                className="inline-flex items-center px-6 py-3 bg-blue-700 text-white rounded-md font-medium hover:bg-blue-600 transition-all"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Program Guide
              </a> */}
            </div>
          </div>
        </div>
      </section>

      {/* 資助詳情 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/financial-pattern.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("bud_funding_details")}
          </h2>
          <div className="text-base md:text-lg text-black leading-relaxed">
            <p className="mb-3">{t("bud_premium_item_5")}</p>
          </div>
          <div className="text-base md:text-lg text-black">
            <ul className="list-disc pl-5 space-y-3">
              <li>{t("bud_premium_item_6")}</li>
              <li>{t("bud_premium_item_7")}</li>
              <li>{t("bud_premium_item_8")}</li>
              <li>{t("bud_premium_item_9")}</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 資助範圍 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/financial-pattern.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("bud_funding_scope")}
          </h2>
          <div className="text-base md:text-lg text-black leading-relaxed">
            <p className="mb-3">{t("funding_scope_title")}</p>
          </div>
          <div className="text-base md:text-lg text-black">
            <ul className="list-disc pl-5 space-y-3">
              <li>{t("funding_scope_ad")}</li>
              <li>{t("funding_scope_exhibitions")}</li>
              <li>{t("funding_scope_patent")}</li>
              <li>{t("funding_scope_testing")}</li>
              <li>{t("funding_scope_website")}</li>
              <li>{t("funding_scope_promo")}</li>
              <li>{t("funding_scope_online_sales")}</li>
              <li>{t("funding_scope_audit")}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue-100 to-blue-50 text-black relative">
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("bud_funding_regions")}
          </h2>
          <div className="text-base md:text-lg text-gray-800 leading-relaxed space-y-6">
            <div className="text-base md:text-lg text-gray-800">
              <ul className="list-disc pl-5 space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span>
                  {t("regions_ecommerce_easy")}
                </li>
                <li className="flex items-start">
                  <span className="text-blue-500 mr-2">✔</span>
                  {t("regions_general_easy")}
                </li>
              </ul>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* 電商易 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-300/10 p-6 rounded-lg shadow-lg border border-blue-300/50 hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {t("regions_asean1")}
                </h3>
                <p className="text-sm text-blue-500">{t("regions_asean2")}</p>
              </div>
              {/* 一般申請和申請易 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-300/10 p-6 rounded-lg shadow-lg border border-blue-300/50 hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {t("regions_other_asia1")}
                </h3>
                <p className="text-sm text-blue-500">
                  {t("regions_other_asia2")}
                </p>
              </div>
              {/* 歐洲 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-300/10 p-6 rounded-lg shadow-lg border border-blue-300/50 hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {t("regions_europe1")}
                </h3>
                <p className="text-sm text-blue-500">{t("regions_europe2")}</p>
              </div>
              {/* 美洲及大洋洲 */}
              <div className="bg-gradient-to-br from-blue-500/20 to-blue-300/10 p-6 rounded-lg shadow-lg border border-blue-300/50 hover:scale-105 transition-transform duration-300">
                <h3 className="text-lg font-semibold text-blue-700 mb-2">
                  {t("regions_americas_oceania1")}
                </h3>
                <p className="text-sm text-blue-500">
                  {t("regions_americas_oceania2")}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 資助計劃比較表 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16 text-black relative">
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("bud_funding_comparison")}
          </h2>
          <div className="overflow-x-auto">
            <table className="table-auto w-full border-collapse border border-gray-300 text-left">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2">
                    {t("bud_scheme_type")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    {t("bud_funding_cap")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    {t("bud_project_duration")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    {t("bud_main_purpose")}
                  </th>
                  <th className="border border-gray-300 px-4 py-2">
                    {t("bud_region_quantity")}
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_general_application")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_amount_1m")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    24 {t("bud_months")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_general_purpose")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">39</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_easy_bud")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_amount_100k")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    12 {t("bud_months")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_easy_bud_description")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">39</td>
                </tr>
                <tr>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_ecommerce_easy")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_amount_800k")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    24 {t("bud_months")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">
                    {t("bud_ecommerce_easy_description")}
                  </td>
                  <td className="border border-gray-300 px-4 py-2">10</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold mb-4">{t("bud_notes")}</h3>
            <p className="mb-2">{t("exclusion_ecommerce_title")}</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>{t("exclusion_mobile_apps")}</li>
              <li>{t("exclusion_website_payment")}</li>
              <li>{t("exclusion_other_ecommerce")}</li>
            </ul>
          </div>
        </div>
      </section>
      {/* 申請資格 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16">
        <div className="w-[90%] max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("eligibility_title")}
          </h2>
          <div className="bg-white shadow-lg rounded-lg p-8 space-y-6">
            <h3 className="text-xl font-semibold text-blue-600">
              {t("eligibility_condition_title")}
            </h3>
            <ul className="list-disc pl-6 space-y-3 text-gray-700">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                {t("eligibility_registration")}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                {t("eligibility_operations")}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                {t("eligibility_project_scope")}
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">✔</span>
                {t("eligibility_execution")}
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 申請流程 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-16">
        <div className="w-[90%] max-w-7xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("application_process_title")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Step 1 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal text-black">
                  {t("application_method")}
                </h3>
              </div>
            </div>
            {/* Step 2 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal text-black">
                  {t("application_frequency")}
                </h3>
              </div>
            </div>
            {/* Step 3 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal text-black">
                  {t("approval_process")}
                </h3>
              </div>
            </div>
            {/* Step 4 */}
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
              </div>
              <div>
                <h3 className="text-lg font-normal text-black">
                  {t("funding_disbursement")}
                </h3>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center">
            <p className="text-gray-700">{t("contact_prompt")}</p>
          </div>
        </div>
      </section>

      {/* 申請所需文件 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 text-white relative">
        <div className="w-[90%] max-w-7xl mx-auto relative z-10"></div>
        <RequiredDocuments />
      </section>

      {/* 如何選擇不同申請計畫 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-20 text-white relative">
        <div className="w-[90%] max-w-7xl mx-auto relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("bud_how_to_choose")}
          </h2>
        </div>
        <ApplicationGuide />
      </section>

      {/* 合規要求 */}
      <section className="bg-gradient-to-r from-blue-100 to-blue-50 text-black relative">
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-8 text-center text-transparent bg-clip-text bg-blue-500">
            {t("bud_compliance")}
          </h2>
          <div className="text-base md:text-lg text-black">
            <ul className="list-disc pl-5 space-y-3">
              <li>{t("compliance_law")}</li>
              <li>{t("compliance_reports")}</li>
              <li>{t("compliance_procurement")}</li>
            </ul>
          </div>
          <br />
          <br />
          <div className="text-base md:text-lg text-black">
            {t("contact_prompt")}
          </div>
        </div>
        <div className=" text-white">
          <main className="py-10 text-center">
            <GreenButton />
          </main>
        </div>
      </section>

      {/* Contact Section */}
      <section id="apply-form" className="bg-blue-900/20 text-white relative">
        <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] bg-repeat opacity-5"></div>
        <div className="w-[90%] max-w-7xl mx-auto py-20 relative z-10">
          <h2 className="text-3xl font-semibold mb-12 text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
            {t("contact_title")}
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

export default BUDPage;
