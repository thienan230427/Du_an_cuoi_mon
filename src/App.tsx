import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header } from "./components/Header";
import { HomePage } from "./components/HomePage";
import { SpecializationDetail } from "./components/SpecializationDetail";
import { JobPositionDetail } from "./components/JobPositionDetail";
import { GrowthTrendsPage } from "./components/GrowthTrendsPage";
import { WideApplicationsPage } from "./components/WideApplicationsPage";
import { TalentDemandPage } from "./components/TalentDemandPage";
import { Footer } from "./components/Footer";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-white">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chuyen-nganh/:id" element={<SpecializationDetail />} />
            <Route path="/vi-tri-viec-lam/:id" element={<JobPositionDetail />} />
            <Route path="/tang-truong-nganh-cntt" element={<GrowthTrendsPage />} />
            <Route path="/ung-dung-rong-rai" element={<WideApplicationsPage />} />
            <Route path="/nhu-cau-nhan-luc" element={<TalentDemandPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}