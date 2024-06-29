import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import SubscriptionPage from "./pages/SubscriptionPage.jsx";
import ConfigurationPage from "./pages/ConfigurationPage.jsx";
import SpecialPage from "./pages/SpecialPage.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route path="/subscription" element={<SubscriptionPage />} />
        <Route path="/configuration" element={<ConfigurationPage />} />
        <Route path="/special" element={<SpecialPage />} />
      </Routes>
    </Router>
  );
}

export default App;