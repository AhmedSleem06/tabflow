import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "./screens/landing_page";
import PrivacyPolicy from "./screens/privacy_policy";
import RefundPolicy from "./screens/refund_policy";
import TermsOfService from "./screens/terms_of_service";
import WaitListPage from "./screens/waitlist_page";

function App() {
  return (
    <BrowserRouter basename="/tabflow">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
        <Route path="/termsofs" element={<TermsOfService />} />
        <Route path="/waitlist" element={<WaitListPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
