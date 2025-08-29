import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurWork from "./pages/OurWork";
import Reports from "./pages/Reports";
import GetInvolved from "./pages/GetInvolved";

function Layout() {
  const location = useLocation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // ✅ Splash screen sirf "/" par hi chalega
    if (location.pathname === "/") {
      setLoading(true);
    } else {
      setLoading(false);
    }
  }, [location.pathname]);

  // ✅ Footer sirf homepage par
  const shouldShowFooter = location.pathname === "/";

  return (
    <>
      {loading ? (
        // ✅ SplashScreen ko video khatam hote hi band karenge
        <SplashScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/our-work" element={<OurWork />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/join-us" element={<GetInvolved />} />
            </Routes>
          </main>
          {shouldShowFooter && <Footer />}
        </>
      )}
    </>
  );
}

export default function App() {
  return (
    <Router>
      <Layout />
    </Router>
  );
}
