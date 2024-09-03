import { useEffect, useState } from "react";

import AppLayout from "./components/AppLayout";
import AppStartpage from "./components/AppStartpage";
import { MoonOutlined, SunOutlined } from "@ant-design/icons";

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
    <div className="w-full h-screen bg-gradient-to-l from-[#30cfd0] to-[#330867] dark:bg-gradient-to-l dark:from-[#f9f586] dark:to-[#96fbc4] flex justify-center items-center">
      {/*bg-gradient-to-l from-[#7dd3fc] to-[#065f46] */}
      <div className="w-[90%] max-w-lg max-[392px]:h-[90%] sm:h-auto bg-[#27272a] dark:bg-[#48d1cc] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {showApp ? (
          <AppLayout onClose={handleCloseApp} />
        ) : (
          <AppStartpage onOpen={handleOpenApp} theme={theme} />
        )}
      </div>
      <button
        className="absolute top-5 right-5 text-3xl text-yellow-300 dark:text-indigo-800 opacity-65 hover:opacity-100 transition duration-200 dark:hover:drop-shadow-icon_8_green hover:drop-shadow-icon_8_coral active:translate-y-[1px]"
        onClick={handleThemeSwap}
      >
        {theme === "dark" ? <MoonOutlined /> : <SunOutlined />}
      </button>
    </div>
  );
}

export default App;
