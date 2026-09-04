import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import ReactGA from "react-ga4";

import Navbar from "../../components/Navbar.tsx";
import Footer from "../../components/Footer.tsx";

// Hard coded projects data
const projects = [
  {
    id: "listing",
    name: "work_listing",
    image: "/images/listing.jpg",
    path: "/listing",
    descriptionKeys: [
      "projects_listing_description_1",
      "projects_listing_description_2",
      "projects_listing_description_3",
      "projects_listing_description_4",
    ],
    openPDF: false,
    descriptionType: "simple",
  },
  {
    id: "bud",
    name: "work_bud",
    image: "/images/BUD.png",
    path: "/BUD",
    descriptionKeys: [
      "projects_bud_description_1",
      "projects_bud_description_2",
    ],
    openPDF: false,
    descriptionType: "simple",
  },
  {
    id: "banking",
    name: "servicet12",
    image: "/images/banking.jpg",
    path: "/index",
    descriptionKeys: [
      "projects_banking_description_1",
      "projects_banking_description_2",
      "projects_banking_description_3",
      "projects_banking_description_4",
    ],
    openPDF: false,
    descriptionType: "simple",
  },
  {
    id: "audit",
    name: "new_audit_services_title1",
    image: "/images/ccp.jpg",
    path: "/index",
    descriptionKeys: [
      "projects_audit_description_1",
      "projects_audit_description_2",
      "projects_audit_description_3",
      "projects_audit_description_4",
    ],
    openPDF: false,
    descriptionType: "simple",
  },
  {
    id: "subsidies",
    name: "new_innovation_subsidies_title",
    image: "/images/about_us.jpg",
    path: "/Subsidies",
    descriptionKeys: [
      "projects_subsidies_description_1",
      "projects_subsidies_description_2",
      "projects_subsidies_description_3",
      "projects_subsidies_description_4",
      "projects_subsidies_description_5",
      "projects_subsidies_description_6",
      "projects_subsidies_description_7",
    ],
    openPDF: false,
    descriptionType: "simple",
  },
  {
    id: "stp",
    name: "work_hkstp",
    image: "/images/hkstp.jpg",
    path: "/stp",
    descriptionKeys: [
      "projects_stp_description_1",
      "projects_stp_description_2",
      "projects_stp_description_3",
      "projects_stp_description_4",
    ],
    openPDF: false,
    descriptionType: "simple",
  },

];

const HeroSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="home"
      className="h-screen text-white flex flex-col justify-center items-center relative overflow-hidden"
    >
      {/* Background layers with parallax effect */}
      <div className="absolute inset-0 z-0">
        {/* Background image with improved contrast */}
        <div className="absolute inset-0 bg-[url('/images/Main_banner.jpg')] bg-cover bg-center opacity-70 scale-105 animate-subtle-zoom"></div>
        {/* Enhanced overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-950/90 via-gray-900/80 to-indigo-900/70"></div>
        {/* Animated accent lines */}
        <div className="absolute inset-0 opacity-20 bg-[url('/images/grid-pattern.svg')] bg-repeat"></div>
      </div>

      {/* Decorative floating elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl animate-float-slow"></div>
      <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-indigo-500/10 blur-3xl animate-float-slow-reverse"></div>

      {/* Main content container with improved layout */}
      <div className="w-full max-w-6xl px-6 z-10 relative">
        {/* Title with dramatic styling */}
        <div className="mb-16 md:mb-20 relative">
          <div className="overflow-hidden mb-2">
              <span className="block text-xs font-medium tracking-widest text-blue-300 uppercase animate-fade-in">
                Introducing
              </span>
          </div>
          <h1 className="relative">
              <span className="block text-7xl md:text-8xl lg:text-9xl font-extrabold text-left md:text-center tracking-tight mb-1 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-indigo-400 animate-shimmer">
                {t("hero_title")}
              </span>
            <span className="absolute -bottom-2 md:-bottom-3 left-0 md:left-1/2 md:-translate-x-1/2 w-16 md:w-24 h-1.5 bg-gradient-to-r from-blue-600 to-indigo-600"></span>
            <span className="absolute -bottom-2 md:-bottom-3 left-0 md:left-1/2 md:-translate-x-1/2 w-16 md:w-24 h-1.5 bg-white/70 blur-sm animate-pulse"></span>
          </h1>
        </div>

        {/* Two-column content with improved styling */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-12 md:gap-8">
          {/* Left column - Main subtitle content with perspective effect */}
          <div className="md:w-1/2 transform perspective-1000 hover:perspective-none transition-all duration-500 relative">
            <div className="absolute -left-3 top-0 w-1 h-full bg-gradient-to-b from-blue-500/0 via-blue-500/60 to-blue-500/0"></div>
            <p className="text-2xl md:text-3xl lg:text-4xl font-light leading-tight mb-8 text-gradient">
                <span className="block font-medium text-blue-300 mb-3 animate-fade-in-up">
                  {t("hero_subtitle")}
                </span>
              <span className="block font-bold text-white animate-fade-in-up animation-delay-300">
                  {t("hero_subtitle_2")}
                </span>
            </p>

            <a
              href="#projects"
              className="relative inline-flex items-center group px-8 py-4 mt-3 overflow-hidden rounded-lg"
            >
              <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-r from-blue-500 to-indigo-500 transition-all duration-300 animate-shimmer"></span>
              <span className="relative flex items-center gap-2 font-semibold text-white">
                  {t("hero_cta")}
                <svg
                  className="w-5 h-5 animate-pulse-slow"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                    <path
                      d="M13 7L18 12M18 12L13 17M18 12H6"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
            </a>
          </div>

          {/* Right column - Slogans with glass effect */}
          <div className="md:w-1/2 relative">
            <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-6 shadow-2xl shadow-blue-900/20">
              {/* Highlighted callouts */}
              <div className="flex flex-col gap-5">
                <div className="animate-fade-in-up">
                  <h1 className="font-bold text-xl md:text-2xl text-white mb-1">
                    {t("hero_slogan_heading")}
                  </h1>
                  <p className="font-bold text-xl md:text-2xl text-white mb-1">
                    {t("hero_slogan")}
                  </p>
                  <div className="h-0.5 w-16 bg-blue-400/50 rounded-full"></div>
                </div>

                <p className="text-blue-100/90 animate-fade-in-up animation-delay-300">
                  {t("hero_slogan_2")}
                </p>

                <div className="bg-gradient-to-r from-blue-900/30 to-indigo-900/30 p-4 rounded-lg border-l-4 border-blue-500 mt-2 animate-fade-in-up animation-delay-600">
                  <p className="font-medium text-blue-200 mb-1">
                    {t("hero_slogan_3")}
                  </p>
                  <p className="text-blue-100/80">{t("hero_slogan_4")}</p>
                  <p className="text-blue-100/80">{t("hero_slogan_5")}</p>
                </div>
              </div>
            </div>

            {/* Decorative corner element */}
            <div className="absolute -top-3 -right-3 w-6 h-6">
              <div className="absolute inset-0 rotate-45 bg-blue-500/50 animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Learn More indicator */}
      <div className="absolute bottom-12 z-10 animate-fade-in animation-delay-1000">
        <a href="#about" className="group flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-blue-100/70 mb-2 font-medium group-hover:text-white transition-colors">
              Discover More
            </span>
          <div className="relative w-10 h-10 flex items-center justify-center">
            <span className="absolute inset-0 rounded-full border border-blue-400/30 group-hover:border-blue-400/80 transition-all"></span>
            <span className="absolute inset-0 scale-0 group-hover:scale-100 rounded-full bg-blue-500/20 transition-transform duration-300"></span>
            <svg
              className="w-5 h-5 text-blue-400 animate-bounce"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 5L12 19M12 19L19 12M12 19L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </a>
      </div>
    </section>
  )
}

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="about"
      className="bg-gradient-to-b from-gray-50 to-blue-50 relative text-gray-800 py-24"
    >
      {/* Light background elements */}
      <div className="absolute inset-0 bg-[url('/images/dot-pattern.png')] opacity-5"></div>
      <div className="absolute inset-0 bg-gradient-to-tr from-blue-100/30 via-transparent to-indigo-100/30"></div>

      {/* Decorative light elements */}
      <div className="absolute left-0 top-1/4 w-32 h-64 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute right-0 bottom-1/3 w-48 h-48 bg-indigo-200/30 rounded-full blur-3xl"></div>

      <div className="container max-w-7xl mx-auto px-6 relative z-10">
        {/* Section heading with animation */}
        <div className="mb-16 relative text-center">
            <span className="text-xs font-medium tracking-widest text-blue-600 uppercase block mb-2 animate-fade-in">
              Our Mission
            </span>
          <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
              <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700">
                {t("about_title")}
              </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full"></span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 items-center">
          {/* Left column - Text content with enhanced layout */}
          <div className="md:col-span-3 animate-fade-in-up">
            {/* First paragraph with highlight */}
            <div className="mb-8">
              <div className="relative rounded-lg p-6 bg-white/80 backdrop-blur-sm border-l-4 border-blue-500 shadow-lg">
                <p className="text-lg md:text-xl font-medium leading-relaxed text-gray-700">
                  {t("about_text1")}
                </p>
              </div>
            </div>

            {/* Second paragraph with structured content */}
            <div className="mb-6 space-y-6">
              <div className="prose max-w-none">
                <p className="text-base md:text-lg text-gray-700 mb-4">
                  {t("about_text2").split("\n")[0]}
                </p>

                {/* Core capabilities section with better styling for bullet points */}
                <div className="space-y-4 mt-6">
                  {t("about_text2")
                    .split("\n")
                    .slice(1, 4)
                    .map(
                      (line, index) =>
                        line.trim() && (
                          <div
                            key={index}
                            className="flex items-start gap-3 group animate-fade-in-up animation-delay-300"
                          >
                            <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center border border-blue-300 group-hover:bg-blue-200 transition-colors">
                              <span className="text-blue-700">✓</span>
                            </div>
                            <p className="text-base text-gray-700 flex-1">
                              {line.replace("✅ ", "")}
                            </p>
                          </div>
                        )
                    )}
                </div>

                {/* Final paragraph */}
                <p className="text-base md:text-lg text-gray-700 mt-6 pl-4 border-l-2 border-blue-300 italic">
                  {t("about_text2").split("\n").slice(5).join(" ").trim()}
                </p>
              </div>
            </div>

            {/* Tags with improved styling */}
            <div className="flex flex-wrap gap-3 mt-8 animate-fade-in-up animation-delay-600">
                <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 rounded-full text-sm text-blue-800 border border-blue-300 hover:shadow-md transition-all hover:-translate-y-1">
                  {t("about_tag_1")}
                </span>
              <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 rounded-full text-sm text-indigo-800 border border-indigo-300 hover:shadow-md transition-all hover:-translate-y-1">
                  {t("about_tag_2")}
                </span>
              <span className="px-4 py-2 bg-gradient-to-r from-violet-100 to-violet-200 rounded-full text-sm text-violet-800 border border-violet-300 hover:shadow-md transition-all hover:-translate-y-1">
                  {t("about_tag_3")}
                </span>
            </div>
          </div>

          {/* Right column - Enhanced image presentation */}
          <div className="md:col-span-2">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 rounded-lg blur opacity-30 group-hover:opacity-50 transition duration-1000 animate-pulse-slow"></div>
              <div className="relative h-[450px] bg-white rounded-lg overflow-hidden shadow-lg border border-blue-200">
                <div className="w-full h-full bg-[url('/images/ex2.png')] bg-cover bg-center opacity-90 group-hover:scale-110 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-white/80 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="w-12 h-1 bg-blue-500 mb-3 rounded-full"></div>
                  <p className="text-lg font-semibold text-gray-900">
{t("hero_build_beyond_borders")}                  </p>
                  <p className="text-sm text-gray-700">
{t("hero_connect_integrate_expand")}                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const ProjectSection = () => {
  const { t } = useTranslation();
  
  return (
    <section
      id="projects"
      className="relative py-32 overflow-hidden bg-gradient-to-b from-gray-50 via-white to-blue-50"
    >
      {/* Dynamic background elements */}
      <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] opacity-5"></div>
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-blue-100/30 to-transparent"></div>

      <div className="container relative z-10 mx-auto px-6 max-w-7xl">
        {/* Bold section header */}
        <div className="mb-16 text-center">
          <div className="inline-block">
              <span className="text-xs font-black tracking-[0.3em] text-blue-600 uppercase block mb-2 animate-pulse">
                Our Services
              </span>
            <h2 className="text-5xl md:text-6xl font-extrabold relative inline-block">
                <span className="relative z-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-800 via-blue-600 to-indigo-700">
                  {t("work_title")}
                </span>
              <div className="absolute -bottom-4 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 to-indigo-500 skew-x-12 rounded-full transform -rotate-1"></div>
            </h2>
          </div>
        </div>

        {/* Project showcase with horizontal scrolling */}
        <div className="relative">
          <div className="md:flex md:items-center md:gap-x-4">
            {/* Desktop Navigation: Left */}
            <button
              onClick={() => {
                const container = document.getElementById("project-slider");
                if (container) {
                  const cards = container.querySelectorAll(".group");
                  if (cards.length > 1) {
                    const firstCardRect = cards[0].getBoundingClientRect();
                    const secondCardRect = cards[1].getBoundingClientRect();
                    const scrollAmount =
                      secondCardRect.left - firstCardRect.left;
                    container.scrollBy({
                      left: -scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="flex-shrink-0 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/90 shadow-lg border border-gray-100 text-blue-600 hover:text-blue-700 hover:bg-white transition-all duration-300 focus:outline-none lg:opacity-70 hover:opacity-100 hidden md:flex"
            >
              <svg
                className="w-6 h-6 transform group-hover:-translate-x-1 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5m5 7l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Scrollable container with snap effect */}
            <div
              id="project-slider"
              className="flex-1 overflow-x-auto hide-scrollbar pb-8 scroll-smooth"
            >
              <div className="flex space-x-6 md:space-x-8 snap-x snap-mandatory">
                {projects.map((project, index) => {
                  // Apply group class to each individual card component
                  const commonProps = {
                    key: project.id,
                    className:
                      "group flex-shrink-0 snap-start snap-always w-[85%] sm:w-[45%] md:w-[30%] lg:w-[28%] flex flex-col relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl border border-gray-100 hover:border-blue-200 transition-all duration-500 animate-fade-in-up hover:-translate-y-2",
                    style: { animationDelay: `${(index + 1) * 150}ms` },
                  };

                  // Project content
                  const projectContent = (
                    <>
                      {/* Glowing corner accent */}
                      <div className="absolute -right-4 -top-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-500"></div>

                      {/* Animated border highlight */}
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                      {/* Image area with hover effects */}
                      <div className="relative h-50 overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-600/40 to-indigo-600/40 opacity-0 group-hover:opacity-80 transition-opacity duration-300 z-10"></div>
                        <img
                          src={project.image}
                          alt={t(project.name)}
                          className="w-full h-full object-contain object-center transition-transform duration-700 group-hover:scale-110"
                        />

                        {/* Icon overlay on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 z-20 transition-opacity duration-300">
                          <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-500">
                            <svg
                              className="w-8 h-8 text-blue-600"
                              viewBox="0 0 24 24"
                              fill="none"
                            >
                              <path
                                d="M13.162 10.838a1 1 0 00-1.324 1.324l5 5a1 1 0 001.324-1.324l-5-5z"
                                fill="currentColor"
                              />
                              <path
                                d="M10 12a2 2 0 11-4 0 2 2 0 014 0z"
                                fill="currentColor"
                              />
                              <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M12 3a9 9 0 100 18 9 9 0 000-18zM1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12z"
                                fill="currentColor"
                              />
                            </svg>
                          </div>
                        </div>
                      </div>

                      {/* Content area */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="mb-4">
                          {/* Category badge */}
                          <div className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full mb-3">
                            {t("work_category")}
                          </div>

                          {/* Title with animated accent */}
                          <div className="relative">
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                              {t(project.name)}
                            </h3>
                            <div className="absolute -bottom-1 left-0 w-12 h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                          </div>
                        </div>

                        {/* Description section - 從 i18n 獲取內容 */}
                        <div className="mb-4 overflow-y-auto max-h-32 custom-scrollbar">
                          <div className="text-gray-600 text-sm space-y-2">
                            {project.descriptionKeys.map((key, i) => {
                              // 針對 subsidies 項目的特殊處理
                              const isSubsidies = project.id === "subsidies";
                              const shouldUseBullet = isSubsidies ? i > 0 : true; // subsidies 從第二行開始用 bullet
                              
                              return (
                                <div key={i} className={shouldUseBullet ? "flex items-start gap-2" : "mb-3"}>
                                  {shouldUseBullet ? (
                                    // 使用 bullet point
                                    <>
                                      <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                                      <p className="text-sm">
                                        {t(key)}
                                      </p>
                                    </>
                                  ) : (
                                    // 不使用 bullet point
                                    <p className="text-sm">
                                      {t(key)}
                                    </p>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        </div>

                        {/* CTA */}
                        <div className="mt-auto pt-4 border-t border-gray-100">
                            <span className="inline-flex items-center gap-2 text-blue-600 font-medium group-hover:text-blue-500 transition-colors">
                              {t("work_learn_more")}
                              <svg
                                className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300"
                                viewBox="0 0 24 24"
                                fill="none"
                              >
                                <path
                                  d="M5 12h14m-5-7l7 7-7 7"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                            </span>
                        </div>
                      </div>
                    </>
                  );

                  // Render appropriate component based on project type
                  return project.openPDF ? (
                    <a
                      {...commonProps}
                      href={project.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        console.log("Tracking button click... ", project.name);
                        ReactGA.event({
                          category: "Project Link",
                          action: `Clicked ${t(project.name)}`,
                          label: "External PDF",
                        });
                      }}
                    >
                      {projectContent}
                    </a>
                  ) : (
                    <Link
                      {...commonProps}
                      to={project.path}
                      onClick={() => {
                        console.log("Tracking button click... ", project.name);
                        ReactGA.event({
                          category: "Project Link",
                          action: `Clicked ${t(project.name)}`,
                          label: "Internal Page",
                        });
                      }}
                    >
                      {projectContent}
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Desktop Navigation: Right */}
            <button
              onClick={() => {
                const container = document.getElementById("project-slider");
                if (container) {
                  const cards = container.querySelectorAll(".group");
                  if (cards.length > 1) {
                    const firstCardRect = cards[0].getBoundingClientRect();
                    const secondCardRect = cards[1].getBoundingClientRect();
                    const scrollAmount =
                      secondCardRect.left - firstCardRect.left;
                    container.scrollBy({
                      left: scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="flex-shrink-0 z-20 w-12 h-12 items-center justify-center rounded-full bg-white/90 shadow-lg border border-gray-100 text-blue-600 hover:text-blue-700 hover:bg-white transition-all duration-300 focus:outline-none lg:opacity-70 hover:opacity-100 hidden md:flex"
            >
              <svg
                className="w-6 h-6 transform group-hover:translate-x-1 transition-transform duration-300"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14m-5-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="mt-8 flex items-center justify-center gap-4 md:hidden">
            <button
              onClick={() => {
                const container = document.getElementById("project-slider");
                if (container) {
                  const cards = container.querySelectorAll(".group");
                  if (cards.length > 1) {
                    const firstCardRect = cards[0].getBoundingClientRect();
                    const secondCardRect = cards[1].getBoundingClientRect();
                    const scrollAmount =
                      secondCardRect.left - firstCardRect.left;
                    container.scrollBy({
                      left: -scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="flex-shrink-0 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 shadow-lg border border-gray-100 text-blue-600 hover:text-blue-700 hover:bg-white transition-all duration-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M19 12H5m5 7l-7-7 7-7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              onClick={() => {
                const container = document.getElementById("project-slider");
                if (container) {
                  const cards = container.querySelectorAll(".group");
                  if (cards.length > 1) {
                    const firstCardRect = cards[0].getBoundingClientRect();
                    const secondCardRect = cards[1].getBoundingClientRect();
                    const scrollAmount =
                      secondCardRect.left - firstCardRect.left;
                    container.scrollBy({
                      left: scrollAmount,
                      behavior: "smooth",
                    });
                  }
                }
              }}
              className="flex-shrink-0 z-20 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 shadow-lg border border-gray-100 text-blue-600 hover:text-blue-700 hover:bg-white transition-all duration-300 focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M5 12h14m-5-7l7 7-7 7"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

const ContactSection = () => {
  const { t } = useTranslation();
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-gray-900 to-gray-950 text-white relative"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/images/subtle-grid.png')] opacity-5"></div>
      <div className="absolute top-0 w-full h-40 bg-blue-500/5 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 rounded-full bg-blue-700/10 blur-3xl"></div>

      <div className="w-[90%] max-w-7xl mx-auto py-24 relative z-10">
        {/* Section header with enhanced styling */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-200 to-indigo-100">
                {t("contact_title")}
              </span>
            <div className="absolute -bottom-3 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-indigo-500"></div>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Enhanced left column with logo and details */}
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
                      <br/>
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

          {/* Enhanced contact form */}
          <div className="md:col-span-2">
            <form className="space-y-5 bg-gradient-to-br from-gray-800/60 to-gray-900/60 p-6 rounded-xl border border-blue-900/20 shadow-lg backdrop-blur-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder={t("contact_name")}
                  className="w-full p-3.5 border border-blue-900/50 rounded-lg bg-gray-800/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
                <input
                  type="email"
                  placeholder={t("contact_email")}
                  className="w-full p-3.5 border border-blue-900/50 rounded-lg bg-gray-800/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
                />
              </div>
              <input
                type="text"
                placeholder={t("contact_subject")}
                className="w-full p-3.5 border border-blue-900/50 rounded-lg bg-gray-800/70 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              />
              <textarea
                placeholder={t("contact_message")}
                className="w-full p-3.5 border border-blue-900/50 rounded-lg bg-gray-800/70 text-white text-sm h-40 resize-y focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-500 transition-all"
              ></textarea>
              <button
                type="submit"
                className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white rounded-lg text-sm font-medium cursor-pointer"
              >
                {t("contact_submit")}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

const MainPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About BUD Program Section */}
      <AboutSection />

      {/* Projects Section - Bold Creative Design */}
      <ProjectSection />

      {/* Contact Section */}
      <ContactSection />

      <Footer />
    </div>
  );
};

export default MainPage;


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

