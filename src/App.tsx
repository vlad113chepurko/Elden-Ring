// styles
import "./css/App.css";

// Hooks
import { useEffect, useState } from "react";

// components-desktop
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

// components-mobile
import HeaderMobile from "./components/HeaderMobile";

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
      {width >= 750 ? <Header /> : <HeaderMobile />}
      <Main />
      <Footer />
    </>
  );
}

export default App;
