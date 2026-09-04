import { useTranslation } from "react-i18next";

const RequiredDocuments = () => {
  const { t } = useTranslation();

  // 定義表格數據結構，確保同行對齊
  const documentRows = [
    {
      hk: { text: t("documents_hk_business_registration"), required: true },
      target: { text: t("documents_target_business_license"), required: false },
      other: { text: t("documents_other_project_leader_info"), required: true },
    },
    {
      hk: { text: t("documents_hk_certificate_incorporation"), required: true },
      target: { text: t("documents_target_capital_info"), required: false },
      other: { text: t("documents_other_deputy_leader_info"), required: true },
    },
    {
      hk: { text: t("documents_hk_annual_return"), required: true },
      target: { text: t("documents_target_audit_report"), required: false },
      other: { text: t("documents_other_company_website"), required: false },
    },
    {
      hk: { text: t("documents_hk_id_copy"), required: true },
      target: {
        text: t("documents_target_product_certification"),
        required: false,
      },
      other: {
        text: t("documents_other_company_photos"),
        required: true,
        note: t("documents_other_photo_requirements"),
      },
    },
    {
      hk: {
        text: t("documents_hk_mpf_statement"),
        required: true,
        highlight: true,
      },
      target: {
        text: t("documents_target_employee_count"),
        required: false,
        highlight: true,
      },
      other: {
        text: t("documents_other_agency_authorization"),
        required: false,
      },
    },
    {
      hk: { text: t("documents_hk_audit_report"), required: true },
      target: { text: t("documents_target_financial_report"), required: false },
      other: {
        text: t("documents_other_promotional_materials"),
        required: false,
      },
    },
    {
      hk: { text: t("documents_hk_trademark"), required: false },
      target: { text: t("documents_target_trademark"), required: false },
      other: {
        text: t("documents_other_industry_association"),
        required: false,
      },
    },
    {
      hk: {
        text: t("documents_hk_business_proof_title"),
        required: false,
        subItems: [
          { text: t("documents_hk_sales_invoice"), required: true },
          { text: t("documents_hk_contract"), required: false },
          { text: t("documents_hk_payment"), required: false },
          { text: t("documents_hk_custom_declaration"), required: false },
          { text: t("documents_hk_rental_agreement"), required: true },
        ],
      },
      target: {
        text: t("documents_target_business_proof_title"),
        required: true,
        subItems: [
          { text: t("documents_target_sales_invoice_vat"), required: false },
          { text: t("documents_target_contract"), required: false },
          { text: t("documents_target_payment"), required: false },
          { text: t("documents_target_custom_declaration"), required: false },
        ],
      },
      other: {
        text: t("documents_other_international_certification"),
        required: true,
        note: t("documents_other_certification_requirements"),
      },
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-50 py-10 md:py-20 text-white relative">
      <div className="w-[95%] md:w-[90%] max-w-7xl mx-auto relative z-10">
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center text-transparent bg-clip-text bg-blue-400 px-4">
          {t("documents_title")}
        </h2>

        <div className="flex justify-center px-2 md:px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-6xl w-full">
            {/* 桌面版表格 */}
            <div className="hidden md:block">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="bg-blue-400 text-white p-4 border border-gray-400 text-lg font-bold">
                      {t("documents_hk_company_docs")}
                    </th>
                    <th className="bg-blue-400 text-white p-4 border border-gray-400 text-lg font-bold">
                      {t("documents_target_market_docs")}
                    </th>
                    <th className="bg-blue-400 text-white p-4 border border-gray-400 text-lg font-bold">
                      {t("documents_other_docs")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {documentRows.map((row, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td
                        className={`p-4 border-l border-r border-gray-400 align-top ${
                          index % 2 === 0 ? "bg-white" : "bg-white"
                        } ${row.hk.highlight ? "bg-blue-50" : ""}`}
                      >
                        <div className="text-sm">
                          <span
                            className={
                              row.hk.required
                                ? "text-blue-400 font-medium"
                                : "text-gray-700"
                            }
                          >
                            {row.hk.text}
                          </span>
                          {row.hk.required && (
                            <span className="text-red-400 ml-1">*</span>
                          )}

                          {row.hk.subItems && (
                            <div className="mt-2 ml-3 space-y-1">
                              {row.hk.subItems.map((item, idx) => (
                                <div key={idx} className="text-xs">
                                  <span
                                    className={
                                      item.required
                                        ? "text-blue-400"
                                        : "text-gray-600"
                                    }
                                  >
                                    - {item.text}
                                  </span>
                                  {item.required && (
                                    <span className="text-red-400 ml-1">*</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>

                      <td
                        className={`p-4 border-l border-r border-gray-400 align-top ${
                          row.target.highlight ? "bg-white" : "bg-white"
                        }`}
                      >
                        <div className="text-sm">
                          <span
                            className={
                              row.target.required
                                ? "text-blue-400 font-medium"
                                : "text-gray-700"
                            }
                          >
                            {row.target.text}
                          </span>
                          {row.target.required && (
                            <span className="text-red-400 ml-1">*</span>
                          )}

                          {row.target.subItems && (
                            <div className="mt-2 ml-3 space-y-1">
                              {row.target.subItems.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs text-gray-600"
                                >
                                  - {item.text}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>

                      <td
                        className={`p-4 border-l border-r border-gray-400 align-top ${
                          index % 2 === 0 ? "bg-white" : "bg-white"
                        }`}
                      >
                        <div className="text-sm">
                          <span
                            className={
                              row.other.required
                                ? "text-blue-400 font-medium"
                                : "text-gray-700"
                            }
                          >
                            {row.other.text}
                          </span>
                          {row.other.required && (
                            <span className="text-red-400 ml-1">*</span>
                          )}

                          {row.other.note && (
                            <div className="mt-1 text-xs text-gray-600">
                              {row.other.note}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* 手機版橫向滾動表格 */}
            <div className="md:hidden overflow-x-auto">
              <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr>
                    <th className="bg-blue-400 text-white p-3 border border-gray-400 text-sm font-bold min-w-[250px]">
                      {t("documents_hk_company_docs")}
                    </th>
                    <th className="bg-blue-400 text-white p-3 border border-gray-400 text-sm font-bold min-w-[250px]">
                      {t("documents_target_market_docs")}
                    </th>
                    <th className="bg-blue-400 text-white p-3 border border-gray-400 text-sm font-bold min-w-[250px]">
                      {t("documents_other_docs")}
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {documentRows.map((row, index) => (
                    <tr key={index} className="border-b border-gray-300">
                      <td
                        className={`p-3 border-l border-r border-gray-400 align-top ${
                          index % 2 === 0 ? "bg-white" : "bg-white"
                        } ${row.hk.highlight ? "bg-blue-50" : ""}`}
                      >
                        <div className="text-xs">
                          <span
                            className={
                              row.hk.required
                                ? "text-blue-400 font-medium"
                                : "text-gray-700"
                            }
                          >
                            {row.hk.text}
                          </span>
                          {row.hk.required && (
                            <span className="text-red-400 ml-1">*</span>
                          )}

                          {row.hk.subItems && (
                            <div className="mt-2 ml-2 space-y-1">
                              {row.hk.subItems.map((item, idx) => (
                                <div key={idx} className="text-xs">
                                  <span
                                    className={
                                      item.required
                                        ? "text-blue-400"
                                        : "text-gray-600"
                                    }
                                  >
                                    - {item.text}
                                  </span>
                                  {item.required && (
                                    <span className="text-red-400 ml-1">*</span>
                                  )}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>

                      <td
                        className={`p-3 border-l border-r border-gray-400 align-top ${
                          row.target.highlight ? "bg-white" : "bg-white"
                        }`}
                      >
                        <div className="text-xs">
                          <span
                            className={
                              row.target.required
                                ? "text-blue-400 font-medium"
                                : "text-gray-700"
                            }
                          >
                            {row.target.text}
                          </span>
                          {row.target.required && (
                            <span className="text-red-400 ml-1">*</span>
                          )}

                          {row.target.subItems && (
                            <div className="mt-2 ml-2 space-y-1">
                              {row.target.subItems.map((item, idx) => (
                                <div
                                  key={idx}
                                  className="text-xs text-gray-600"
                                >
                                  - {item.text}
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      </td>

                      <td
                        className={`p-3 border-l border-r border-gray-400 align-top ${
                          index % 2 === 0 ? "bg-white" : "bg-white"
                        }`}
                      >
                        <div className="text-xs">
                          <span
                            className={
                              row.other.required
                                ? "text-blue-400 font-medium"
                                : "text-gray-700"
                            }
                          >
                            {row.other.text}
                          </span>
                          {row.other.required && (
                            <span className="text-red-400 ml-1">*</span>
                          )}

                          {row.other.note && (
                            <div className="mt-1 text-xs text-gray-600">
                              {row.other.note}
                            </div>
                          )}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Footer Note */}
            <div className="p-4 bg-white border-t border-gray-300">
              <div className="text-sm text-blue-400 font-medium text-center">
                <span className="text-red-400 text-lg">*</span>{" "}
                {t("documents_required_note")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;
