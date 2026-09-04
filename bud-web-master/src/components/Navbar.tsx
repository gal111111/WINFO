import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import React, { useEffect, useRef, useState } from "react";
// @ts-ignore - react-router-hash-link types not available
import { HashLink } from 'react-router-hash-link';
import { MdLanguage } from "react-icons/md";

// 桌面版 Navbar
const DesktopNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isProjectDropdownOpen, setIsProjectDropdownOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const projectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const handleClickOutside = (event: MouseEvent) => {
      if (projectRef.current && !projectRef.current.contains(event.target as Node)) {
        setIsProjectDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageButtons = [
    { code: 'en', label: 'EN' },
    { code: 'zh-TW', label: '繁' },
    { code: 'zh-CN', label: '简' }
  ];

  const projectLinks = [
    { to: "/listing", label: t("work_listing") },
    { to: "/BUD", label: t("work_bud") },
    { to: "/index", label: t("servicet12") },
    { to: "/AuditServicesPage", label: t("new_audit_services_title1") },
    { to: "/Subsidies", label: t("new_innovation_subsidies_title") },
    { to: "/STP", label: t("work_hkstp") },
  ];

  return (
    <nav className={`sticky top-0 z-40  py-4 transition-all duration-300 ${
      scrolled ? "shadow-lg shadow-black/20 bg-gray-900/95 backdrop-blur-sm" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo + Company Name */}
        <Link to="/">
          <div className="flex items-center">
            <div className="mr-3">
              <img src="/images/logo/Logo.png" alt="BUD Project Logo" className="h-10 w-auto" />
            </div>
            <div className="border-l border-blue-700/30 pl-3 py-1">
              <h3 className="text-white font-medium tracking-wide mb-1 text-sm">
                <span className="bg-clip-text text-[#B3AA82] bg-gradient-to-r">
                  {t("contact_info_company_name")}
                </span>
              </h3>
              <h4 className="text-xs text-[#C9BB7C] font-light tracking-wider">
                {t("contact_info_company_name_2")}
              </h4>
            </div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center space-x-8">
          <HashLink to="/#home" className="text-blue-100/90 hover:text-white transition-colors duration-200">
            {t("nav_home")}
          </HashLink>
          <HashLink to="/#about" className="text-blue-100/90 hover:text-white transition-colors duration-200">
            {t("nav_about")}
          </HashLink>

          {/* Projects Dropdown */}
          <div 
            ref={projectRef} 
            className="relative"
            onMouseEnter={() => setIsProjectDropdownOpen(true)}
            onMouseLeave={() => setIsProjectDropdownOpen(false)}
          >
            <HashLink
              to="/#projects"
              className="text-blue-100/90 hover:text-white transition-colors duration-200 flex items-center gap-1 group"
            >
              {t("nav_work")}
              <svg 
                className={`w-4 h-4 transition-transform duration-300 ${isProjectDropdownOpen ? 'rotate-180' : ''}`}
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </HashLink>
            
            {/* Dropdown Menu */}
            <div className={`
              absolute left-0 top-full mt-2 w-64 
              rounded-2xl shadow-2xl shadow-black/50
              z-50 overflow-hidden
              transition-all duration-300 ease-out
              ${isProjectDropdownOpen 
                ? 'opacity-100 visible transform translate-y-0' 
                : 'opacity-0 invisible transform -translate-y-2'
              }
            `}>
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900"></div>
              <div className="relative z-10 py-2">
                {projectLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    className="group flex items-center justify-between px-4 py-3 text-sm text-gray-200 hover:text-white hover:bg-blue-900/30 transition-all duration-200 border-l-2 border-transparent hover:border-cyan-400"
                  >
                    <span className="flex-1 group-hover:translate-x-1 transition-transform duration-200">
                      {item.label}
                    </span>
                    <svg 
                      className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ))}
              </div>
              <div className="h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
            </div>
          </div>

          <HashLink to="/#contact" className="text-blue-100/90 hover:text-white transition-colors duration-200">
            {t("nav_contact")}
          </HashLink>

          {/* Language Buttons */}
          <div className="flex items-center gap-2 ml-4">
                <MdLanguage className="w-5 h-5 text-blue-100/70" />

            {languageButtons.map((lang) => (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang.code)}
                className={`px-3 py-1.5 text-sm rounded-md transition-all duration-200 ${
                  i18n.language === lang.code
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'bg-blue-900/30 text-blue-100 hover:bg-blue-800/40 hover:text-white'
                }`}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};

// 移動版 Navbar
const MobileNavbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(prev => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const languageButtons = [
    { code: 'en', label: 'EN' },
    { code: 'zh-TW', label: '繁' },
    { code: 'zh-CN', label: '简' }
  ];

  const projectLinks = [
    { to: "/listing", label: t("work_listing") },
    { to: "/BUD", label: t("work_bud") },
    { to: "/index", label: t("servicet12") },
    { to: "/AuditServicesPage", label: t("new_audit_services_title1") },
    { to: "/Subsidies", label: t("new_innovation_subsidies_title") },
    { to: "/STP", label: t("work_hkstp") }
  ];

  return (
    <nav className={`sticky top-0 z-40 py-4 transition-all duration-300 ${
      scrolled ? "shadow-lg shadow-black/20 bg-gray-900/95 backdrop-blur-sm" : ""
    }`}>
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        {/* Logo + Company Name */}
        <Link to="/" onClick={closeMobileMenu}>
          <div className="flex items-center">
            <div className="mr-2">
              <img src="/images/logo/Logo.png" alt="BUD Project Logo" className="h-8 w-auto" />
            </div>
            <div className="border-l border-blue-700/30 pl-2 py-1">
              <h3 className="text-white font-medium tracking-wide text-xs">
                <span className="bg-clip-text text-[#B3AA82] bg-gradient-to-r">
                  {t("contact_info_company_name")}
                </span>
              </h3>
              <h4 className="text-[10px] text-[#C9BB7C] font-light tracking-wider">
                {t("contact_info_company_name_2")}
              </h4>
            </div>
          </div>
        </Link>

        {/* Hamburger Menu Button */}
        <button
          className="p-2 rounded-md bg-blue-900/30 hover:bg-blue-800/40 transition-colors focus:outline-none"
          onClick={toggleMobileMenu}
        >
          <div className="flex flex-col gap-1 w-6 h-[18px]">
            <span className={`bg-white h-0.5 w-full transition-all ${isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
            <span className={`bg-white h-0.5 w-full transition-all ${isMobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`bg-white h-0.5 w-full transition-all ${isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`
        absolute top-full left-0 w-full bg-gray-900 border-b border-gray-800
        transition-all duration-300 ease-in-out
        ${isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0 overflow-hidden"}
      `}>
        <div className="px-4 py-6 space-y-6">
          {/* Navigation Links */}
          <div className="space-y-4">
            <HashLink 
              to="/#home" 
              onClick={closeMobileMenu} 
              className="block text-blue-100/90 hover:text-white transition-colors duration-200 py-2 "
            >
              {t("nav_home")}
            </HashLink>
            <HashLink 
              to="/#about" 
              onClick={closeMobileMenu} 
              className="block text-blue-100/90 hover:text-white transition-colors duration-200 py-2 "
            >
              {t("nav_about")}
            </HashLink>

            {/* Projects Section */}
            <div className="py-2 ">
              <div className="text-blue-100/90 font-medium mb-3">{t("nav_work")}</div>
              <div className="space-y-2 pl-4">
                {projectLinks.map((item, index) => (
                  <Link
                    key={index}
                    to={item.to}
                    onClick={closeMobileMenu}
                    className="block text-sm text-gray-300 hover:text-white transition-colors duration-200 py-1"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <HashLink 
              to="/#contact" 
              onClick={closeMobileMenu} 
              className="block text-blue-100/90 hover:text-white transition-colors duration-200 py-2 "
            >
              {t("nav_contact")}
            </HashLink>
          </div>

          {/* Language Buttons */}
          <div className="pt-4">
  <div className="flex items-center gap-3">
    <MdLanguage className="w-5 h-5 text-blue-100/70" />
    <div className="flex gap-2 flex-1">
      {languageButtons.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`flex-1 py-2 text-sm rounded-md transition-all duration-200 ${
            i18n.language === lang.code
              ? 'bg-blue-600 text-white shadow-md'
              : 'bg-blue-900/30 text-blue-100 hover:bg-blue-800/40 hover:text-white'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  </div>
</div>
        </div>
      </div>
    </nav>
  );
};

// 主要的 Navbar 組件
const Navbar: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileNavbar /> : <DesktopNavbar />;
};

export default Navbar;
