import { useTranslation } from "react-i18next";

const PriceListDesktop = () => {
  const { t } = useTranslation();

  return (
    <div className="table-auto md:table-fixed">
      <table className="border-6 text-3xl  font-normal text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
        <thead>
          <tr>
            <th>{t("standard_services_title")}</th>
            <th>{t("premium_services_title")}</th>
          </tr>
        </thead>

        <br></br>
        <tbody>

          <tr>
            <td>{t("standard_item_1")}</td>
            <td>{t("premium_item_1")}</td>
          </tr>

          <tr>
            <td>{t("standard_item_2")}</td>
            <td>{t("premium_item_2")}</td>
          </tr>
          <tr>
            <td>{t("standard_item_3")}</td>
            <td>{t("premium_item_3")}</td>
          </tr>
          
          <tr>
            <td>{t("standard_item_4")}</td>
            <td>{t("")}</td>
          </tr>
          <tr>
            <td>{t("standard_item_5")}</td>
            <td>{t("premium_item_4")}</td>
          </tr>
          <tr>
            <td>{t("standard_item_6")}</td>
            <td>{t("standard_item_2")}</td>
          </tr>
          <tr>
            <td>{t("standard_item_7")}</td>
            <td>{t("standard_item_3")}</td>
          </tr>
          <tr>
            <td>{t("standard_item_8")}</td>
            <td>{t("standard_item_4")}</td>
          </tr>
          <tr>
            <td>{t("standard_bonus")}</td>
            <td>{t("standard_item_5")}</td>
          </tr>
          <tr>
            <td>{t("")}</td>
            <td>{t("standard_item_6")}</td>
          </tr>
          <tr>
            <td>{t("")}</td>
            <td>{t("standard_item_7")}</td>
          </tr>          
          <tr>
            <td>{t("")}</td>
            <td>{t("standard_item_8")}</td>
          </tr>

          <tr>
            <td>{t("")}</td>
            <td>{t("standard_bonus")}</td>
          </tr>





          <tr className="text-sm text-blue-100/80 mb-12">
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceListDesktop;
