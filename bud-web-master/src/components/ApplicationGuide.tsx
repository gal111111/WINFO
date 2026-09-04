import { useTranslation } from "react-i18next";

const ApplicationGuide = () => {
  const { t } = useTranslation();

  // 表格數據結構
  const guideData = [
    {
      consideration: t("guide_budget_over_20w"),
      recommendation: t("guide_recommend_general_ecommerce"),
      highlighted: false,
    },
    {
      consideration: t("guide_project_over_12_months"),
      recommendation: t("guide_recommend_general_ecommerce"),
      highlighted: true,
    },
    {
      consideration: t("guide_need_mainland_assistance"),
      recommendation: t("guide_recommend_general_ecommerce"),
      highlighted: false,
    },
    {
      consideration: t("guide_ecommerce_larger_budget"),
      recommendation: t("guide_recommend_ecommerce"),
      highlighted: true,
    },
    {
      consideration: t("guide_no_new_business_expansion"),
      recommendation: t("guide_recommend_ecommerce_application"),
      highlighted: false,
    },
    {
      consideration: t("guide_simple_short_term_measures"),
      recommendation: t("guide_recommend_application"),
      highlighted: true,
    },
    {
      consideration: t("guide_hope_fast_approval"),
      recommendation: t("guide_recommend_application"),
      highlighted: false,
    },
  ];

  return (
    <section className="bg-gradient-to-r from-blue-100 to-blue-50  text-white relative">
      <div className="w-[90%] max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Subtitle and Key Points */}
          <div className="p-6 bg-gray-50 border-b border-gray-300">
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">-</span>
                <span>{t("guide_point_1")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">-</span>
                <span>{t("guide_point_2")}</span>
              </li>
              <li className="flex items-start">
                <span className="text-gray-500 mr-2">-</span>
                <span>{t("guide_point_3")}</span>
              </li>
            </ul>
          </div>

          {/* Main Comparison Table */}
          <table className="w-full border-collapse">
            {/* Table Headers */}
            <thead>
              <tr>
                <th className="bg-blue-400 text-white p-4 border border-gray-400 text-xl font-bold w-1/2">
                  {t("guide_considerations")}
                </th>
                <th className="bg-blue-400 text-white p-4 border border-gray-400 text-xl font-bold w-1/2">
                  {t("guide_recommendations")}
                </th>
              </tr>
            </thead>

            {/* Table Body */}
            <tbody>
              {guideData.map((row, index) => (
                <tr key={index}>
                  <td
                    className={`p-4 border border-gray-400 text-center text-gray-800 font-normal ${
                      row.highlighted ? "bg-white-200" : "bg-white"
                    }`}
                  >
                    {row.consideration}
                  </td>
                  <td
                    className={`p-4 border border-gray-400 text-center text-gray-800 font-normal ${
                      row.highlighted ? "bg-white-200" : "bg-white"
                    }`}
                  >
                    {row.recommendation}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ApplicationGuide;
