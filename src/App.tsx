// styles
import "./css/App.css";

// Hooks
import { useEffect, useState } from "react";

// components-desktop
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/Footer";

// components-mobile
import HeaderMobile from "./components/header/HeaderMobile";
import UnderHeader from "./components/header/UnderHeader";

function App() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      {width >= 850 ? <Header /> : <HeaderMobile />}
      <UnderHeader />
      <Main />
      <Footer />
    </>
  );
}

export default App;
