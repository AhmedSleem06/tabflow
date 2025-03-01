import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./screens/landing_page";
import PrivacyPolicy from "./screens/privacy_policy";
import RefundPolicy from "./screens/refund_policy";
import TermsOfService from "./screens/terms_of_service";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/termsofs" element={<TermsOfService />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
