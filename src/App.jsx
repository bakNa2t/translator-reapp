import { useEffect, useState } from "react";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

import AppLayout from "./components/AppLayout";
import AppStartpage from "./components/AppStartpage";
import AppFooter from "./components/AppFooter";
import Button from "./ui/Button";

function App() {
  const [showApp, setShowApp] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(function () {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setTheme("dark");
    }
  }, []);

  useEffect(
    function () {
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [theme]
  );

  function handleThemeSwap() {
    setTheme(theme === "light" ? "dark" : "light");
  }

  function handleCloseApp() {
    setShowApp(false);
  }

  function handleOpenApp() {
    setShowApp(true);
  }

  return (
    <div className="relative w-full h-screen dark:bg-gradient-to-l dark:from-[#30cfd0] dark:to-[#330867] bg-gradient-to-l from-[#f9f586] to-[#96fbc4] flex justify-center items-center">
      {/*bg-gradient-to-l from-[#7dd3fc] to-[#065f46] */}
      <div className="w-[90%] max-w-lg max-[352px]:h-[85%] sm:h-auto dark:bg-[#27272a] bg-[#48d1cc] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {showApp ? (
          <AppLayout onClose={handleCloseApp} />
        ) : (
          <AppStartpage onOpen={handleOpenApp} theme={theme} />
        )}
      </div>
      <AppFooter />
      <Button
        className="absolute top-2 right-2 text-xl sm:top-5 sm:right-5 sm:text-3xl dark:text-yellow-300 text-emerald-800 opacity-65 hover:opacity-100 transition duration-200 hover:drop-shadow-icon_8_green dark:hover:drop-shadow-icon_8_coral active:translate-y-[1px]"
        onClick={handleThemeSwap}
      >
        {theme === "dark" ? <SunOutlined /> : <MoonOutlined />}
      </Button>
    </div>
  );
}

export default App;
