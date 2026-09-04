import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "./i18n"; // 引入 i18n 初始化檔案
import ReactGA from "react-ga4";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import MainPage from "./pages/Main/MainPage.tsx";
import STPPage from "./pages/STP.tsx";
import ScrollToTop from "./util/ScrollToTop.tsx";
import IndexPage from "./pages/Index.tsx";
import RouteChangeTracker from "./components/RouteChangeTracker.tsx";
import { WhatsappButton } from "./components/Whatsapp.tsx";
import BUDPage from "./pages/BUD.tsx";
import AuditServicesPage from "./pages/Audit.tsx";
import InnovationSubsidiesPage from "./pages/Subsidies.tsx";
import ListingPage from "./pages/Listing.tsx";

const gaMeasurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;

if (gaMeasurementId) {
  ReactGA.initialize(gaMeasurementId);
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  console.log("Google Analytics initialized.");
} else {
  console.warn("Google Analytics Measurement ID not found. Tracking is disabled.");
}

// ⬇️ 自動根據 URL hash 滾動到對應元素
const ScrollToHashElement = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 0);
      }
    }
  }, [hash]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <RouteChangeTracker />
      <ScrollToTop />
      <ScrollToHashElement />

      <div className="app">
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/stp" element={<STPPage />} />
          <Route path="/index" element={<IndexPage />} />
          <Route path="/BUD" element={<BUDPage />} />
          <Route path="/STP" element={<STPPage />} />
          <Route path="/AuditServicesPage" element={<AuditServicesPage />} />
          <Route path="/Subsidies" element={<InnovationSubsidiesPage />} />
          <Route path="/listing" element={<ListingPage />} />

        </Routes>
      </div>

      <WhatsappButton />
    </Router>
  );
};

export default App;