import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Collabortors = [
  {
    name: "GBA Taxi",
    logo: "/images/logo/GBA_logo.png",
    link: "https://www.gbataxi.com",
  },
  {
    name: "P360 Smartcap",
    logo: "/images/logo/p360tec_logo.jpg",
    link: "https://p360tec.com",
  },
  // {
  //   name: 'Winfo',
  //   logo: '/images/logo/Logo.png',
  //   link: '/',
  // },
  {
    name: "DollarPond",
    logo: "/images/logo/DollarPond_logo.jpg",
    link: "https://Dollarpond.com",
  },
  {
    name: "Moneyxpat",
    logo: "/images/logo/Moneyxpat_logo.svg",
    link: "https://moneyxpat.com",
  },
  {
    name: "Xinics",
    logo: "/images/logo/Xinics_logo.png",
    link: "https://xinics.com.hk",
  },
  {
    name: "esg-tec",
    logo: "/images/logo/esg_tec_logo.png",
    link: "https://www.esg-tec.com",
  },
  {
    name: "esghelp",
    logo: "/images/logo/esghelp_logo.svg",
    link: "https://esghelps.com",
  },
];

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12 px-4 text-sm w-full border-t border-gray-800">
      <div className="w-[90%] max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          <div className="md:col-span-1">
            <div className="mb-6 relative group">
              <div className="flex items-center">
                <div className="relative overflow-hidden mr-3">
                  <img
                    src="/images/logo/Logo.png"
                    alt="BUD Project Logo"
                    className="h-10 w-auto relative z-10"
                  />
                </div>
                <div className="border-l border-blue-700/30 pl-3 py-1">
                  <h3 className="text-white font-medium tracking-wide mb-1">
                    <span className="bg-clip-text bg-gradient-to-r text-[#B3AA82]">
                      {t("contact_info_company_name")}
                    </span>
                  </h3>
                  <h4 className="text-xs text-[#C9BB7C] font-light tracking-wider">
                    {t("contact_info_company_name_2")}
                  </h4>
                </div>
              </div>
            </div>
            <p className="text-gray-400 text-sm mb-4">{t("footnote2")}</p>
          </div>
          <div className="md:col-span-1">
            <h3 className="text-base font-medium mb-4 text-white">
              {t("quick_link")}
            </h3>
            <ul className="space-y-2">
              <li>
                <HashLink
                  to="/#home"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("nav_home")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#about"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("nav_about")}
                </HashLink>
              </li>
              <li>
                <HashLink
                  to="/#projects"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("nav_work")}
                </HashLink>
              </li>
              <li>
                <Link
                  to="/BUD"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("work_bud")}
                </Link>
              </li>
              <li>
                <Link
                  to="/index"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("servicet12")}
                </Link>
              </li>
              <li>
                <Link
                  to="/AuditServicesPage"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("new_audit_services_title1")}
                </Link>
              </li>
              <li>
                <Link
                  to="/Subsidies"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("new_innovation_subsidies_title")}
                </Link>
              </li>
              <li>
                <Link
                  to="/STP"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("work_hkstp")}
                </Link>
              </li>
              <li>
                <HashLink
                  to="/#contact"
                  className="text-gray-400 hover:text-blue-300 transition-colors"
                >
                  {t("nav_contact")}
                </HashLink>
              </li>
            </ul>
          </div>
          <div className="md:col-span-1"></div>
          <div className="md:col-span-1">
            <h3 className="text-base font-medium mb-4 text-white">
              {t("footer_collaborator")}
            </h3>
            <div className="max-h-[200px] overflow-y-auto pr-1 no-scrollbar">
              <div className="grid grid-cols-2 gap-3">
                {Collabortors.map((collaborator, index) => (
                  <a
                    key={index}
                    href={collaborator.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gray-800/80 rounded-lg border border-gray-700 flex items-center justify-center p-1.5 overflow-hidden group-hover:border-blue-500/60 group-hover:shadow-sm group-hover:shadow-blue-500/20 transition-all duration-300">
                        <img
                          src={collaborator.logo}
                          alt={collaborator.name}
                          className="h-full w-full object-contain"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/40x40/333/fff?text=${collaborator.name.substring(
                              0,
                              2,
                            )}`;
                          }}
                        />
                      </div>
                      <span className="mt-1.5 text-xs text-gray-400 text-center line-clamp-1 group-hover:text-blue-300 transition-colors">
                        {collaborator.name}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 text-xs text-gray-500">
          <p>{t("footer_copyright", { year: currentYear })}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
