import { useTranslation } from "react-i18next";

const PriceListMobile = () => {
  const { t } = useTranslation();

  return (
    <div className="table-auto md:table-fixed">
      <div
        id="buttonGroup"
        className="sticky top-25 z-80  left-1/3  rounded-md shadow-xs visible"
        role="group"
      >
        <button
          type="button"
          className="px-4 py-2 text-2xl font-medium bg-gray-900   border border-gray-200 rounded-s-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2   dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 focus:ring-blue-500"
          onClick={() => {
            window.location.href = "#programs";
          }}
        >
          {t("ordinary")}
        </button>
        <button
          type="button"
          className="px-4 py-2 text-2xl font-medium bg-gray-900 text-[#C9BB7C] border-t border border-gray-200 rounded-e-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700  dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-blue-500 dark:focus:text-white"
          onClick={() => {
            window.location.href = "#luxury";
          }}
        >
          {t("luxury")}
        </button>
      </div>
      <table className="border-6 text-2xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
        <thead>
          <tr>
            <th>{t("special_service_1")}</th>
          </tr>
        </thead>
        <br></br>
        <tbody>
          <br></br>
          <tr>
            <td>{t("index_title1")}</td>
          </tr>
          <tr className="text-2xl">
            <td>1.{t("index_subtitle1")}</td>
          </tr>
          <tr className="text-2xl">
            <td>2.{t("index_subtitle2")}</td>
          </tr>
          <tr className="text-2xl">
            <td>3.{t("index_subtitle3")}</td>
          </tr>
          <tr className="text-2xl">
            <td>4.{t("index_subtitle4")}</td>
          </tr>
          <tr className="text-2xl">
            <td>5.{t("index_subtitle5")}</td>
          </tr>
          <tr className="text-2xl">
            <td>6.{t("index_subtitle6")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title2")}</td>
          </tr>
          <tr className="text-2xl">
            <td>7.{t("index_subtitle7")}</td>
          </tr>
          <tr className="text-2xl">
            <td>8.{t("index_subtitle8")}</td>
          </tr>
          <tr className="text-2xl">
            <td>9.{t("index_subtitle9")}</td>
          </tr>
          <tr className="text-2xl">
            <td>10.{t("index_subtitle10")}</td>
          </tr>
          <tr className="text-2xl">
            <td>11.{t("index_subtitle11")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title3")}</td>
          </tr>
          <tr className="text-2xl">
            <td>12.{t("index_subtitle12")}</td>
          </tr>
          <tr className="text-2xl">
            <td>13.{t("index_subtitle13")}</td>
          </tr>
          <tr className="text-2xl">
            <td>14.{t("index_subtitle14")}</td>
          </tr>
          <tr className="text-2xl">
            <td>15.{t("index_subtitle15")}</td>
          </tr>
          <tr className="text-2xl">
            <td>16.{t("index_subtitle16")}</td>
          </tr>

          <br></br>
          <tr>
            <td>{t("index_title4")}</td>
          </tr>
          <tr className="text-2xl">
            <td>17.{t("index_subtitle17")}</td>
          </tr>
          <tr className="text-2xl">
            <td>18.{t("index_subtitle18")}</td>
          </tr>
          <tr className="text-2xl">
            <td>19.{t("index_subtitle19")}</td>
          </tr>
          <tr className="text-2xl">
            <td>20.{t("index_subtitle20")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title5")}</td>
          </tr>
          <tr className="text-2xl">
            <td>21.{t("index_subtitle21")}</td>
          </tr>
          <tr className="text-2xl">
            <td>22.{t("index_subtitle22")}</td>
          </tr>
          <tr className="text-2xl">
            <td>23.{t("index_subtitle23")}</td>
          </tr>
          <tr className="text-2xl">
            <td>24.{t("index_subtitle24")}</td>
          </tr>
          <tr className="text-2xl">
            <td>25.{t("index_subtitle25")}</td>
          </tr>
          <tr className="text-2xl">
            <td>26.{t("index_subtitle26")}</td>
          </tr>
          <tr className="text-2xl">
            <td>27.{t("index_subtitle27")}</td>
          </tr>
          <tr className="text-2xl">
            <td>28.{t("index_subtitle28")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title6")}</td>
          </tr>
          <tr className="text-2xl" id="luxury">
            <td>29.{t("index_subtitle29")}</td>
          </tr>
          <tr className="text-2xl">
            <td>30.{t("index_subtitle30")}</td>
          </tr>
          <tr className="text-2xl">
            <td>31.{t("index_subtitle31")}</td>
          </tr>
          <br></br>
        </tbody>
      </table>
      <table className="border-6 text-2xl  font-semibold text-transparent bg-clip-text bg-gradient-to-r from-white to-blue-200">
        <thead>
          <tr>
            <th>{t("luxury_service")}</th>
          </tr>
        </thead>
        <br></br>
        <tbody>
          <tr>
            <td>{t("index_title7")}</td>
          </tr>
          <tr className="text-2xl">
            <td>1.{t("index_subtitle32")}</td>
          </tr>
          <tr className="text-2xl">
            <td>2.{t("index_subtitle33")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title1")}</td>
          </tr>
          <tr className="text-2xl">
            <td>3.{t("index_subtitle1")}</td>
          </tr>
          <tr className="text-2xl">
            <td>4.{t("index_subtitle2")}</td>
          </tr>
          <tr className="text-2xl">
            <td>5.{t("index_subtitle3")}</td>
          </tr>
          <tr className="text-2xl">
            <td>6.{t("index_subtitle4")}</td>
          </tr>
          <tr className="text-2xl">
            <td>7.{t("index_subtitle5")}</td>
          </tr>
          <tr className="text-2xl">
            <td>8.{t("index_subtitle6")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title2")}</td>
          </tr>
          <tr className="text-2xl">
            <td>9.{t("index_subtitle7")}</td>
          </tr>
          <tr className="text-2xl">
            <td>10.{t("index_subtitle8")}</td>
          </tr>
          <tr className="text-2xl">
            <td>11.{t("index_subtitle9")}</td>
          </tr>
          <tr className="text-2xl">
            <td>12.{t("index_subtitle10")}</td>
          </tr>
          <tr className="text-2xl">
            <td>13.{t("index_subtitle11")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title3")}</td>
          </tr>
          <tr className="text-2xl">
            <td>14.{t("index_subtitle12")}</td>
          </tr>
          <tr className="text-2xl">
            <td>15.{t("index_subtitle13")}</td>
          </tr>
          <tr className="text-2xl">
            <td>16.{t("index_subtitle14")}</td>
          </tr>
          <tr className="text-2xl">
            <td>17.{t("index_subtitle15")}</td>
          </tr>
          <tr className="text-2xl">
            <td>18.{t("index_subtitle16")}</td>
          </tr>

          <br></br>
          <tr>
            <td>{t("index_title4")}</td>
          </tr>
          <tr className="text-2xl">
            <td>19.{t("index_subtitle17")}</td>
          </tr>
          <tr className="text-2xl">
            <td>20.{t("index_subtitle18")}</td>
          </tr>
          <tr className="text-2xl">
            <td>21.{t("index_subtitle19")}</td>
          </tr>
          <tr className="text-2xl">
            <td>22.{t("index_subtitle20")}</td>
          </tr>
          <br></br>
          <tr>
            <td>
              {t("index_title5_1")}
              <a className=" bg-clip-text text-green-200">3</a>
              {t("index_title5_2")}
            </td>
          </tr>
          <tr className="text-2xl">
            <td>23.{t("index_subtitle21")}</td>
          </tr>
          <tr className="text-2xl">
            <td>24.{t("index_subtitle22")}</td>
          </tr>
          <tr className="text-2xl">
            <td>25.{t("index_subtitle23")}</td>
          </tr>
          <tr className="text-2xl">
            <td>26.{t("index_subtitle24")}</td>
          </tr>
          <tr className="text-2xl">
            <td>27.{t("index_subtitle25")}</td>
          </tr>
          <tr className="text-2xl">
            <td>28.{t("index_subtitle26")}</td>
          </tr>
          <tr className="text-2xl">
            <td>29.{t("index_subtitle27")}</td>
          </tr>
          <tr className="text-2xl">
            <td>30.{t("index_subtitle28")}</td>
          </tr>
          <br></br>
          <tr>
            <td>{t("index_title6")}</td>
          </tr>
          <tr className="text-2xl">
            <td>31.{t("index_subtitle29")}</td>
          </tr>
          <tr className="text-2xl">
            <td>32.{t("index_subtitle30")}</td>
          </tr>
          <tr className="text-2xl">
            <td>33.{t("index_subtitle31")}</td>
          </tr>
          <br></br>
          <tr className="text-sm text-blue-100/80 mb-12">
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default PriceListMobile;
