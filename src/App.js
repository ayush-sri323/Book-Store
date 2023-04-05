import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contacts from "./pages/Contacts";
import Contacts1 from "./pages/Contacts1";
import Icons from "./pages/Icons";
import Support from "./pages/Support";
import BurgerOpen from "./pages/BurgerOpen";
import Burger from "./pages/Burger";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/about":
        title = "";
        metaDescription = "";
        break;
      case "/projects":
        title = "";
        metaDescription = "";
        break;
      case "/contacts":
        title = "";
        metaDescription = "";
        break;
      case "/contacts1":
        title = "";
        metaDescription = "";
        break;
      case "/icons":
        title = "";
        metaDescription = "";
        break;
      case "/support":
        title = "";
        metaDescription = "";
        break;
      case "/burger-open":
        title = "";
        metaDescription = "";
        break;
      case "/burger":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/contacts1" element={<Contacts1 />} />
      <Route path="/icons" element={<Icons />} />
      <Route path="/support" element={<Support />} />
      <Route path="/burger-open" element={<BurgerOpen />} />
      <Route path="/burger" element={<Burger />} />
    </Routes>
  );
}
export default App;
