import { useEffect, useState } from "react";

import AppLayout from "./components/AppLayout";
import AppStartpage from "./components/AppStartpage";
import { MoonOutlined } from "@ant-design/icons";

function App() {
  const [showApp, setShowApp] = useState(false);
  const [theme, setTheme] = useState("light");

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
      <div className="w-[90%] max-w-lg max-[392px]:h-[90%] sm:h-auto bg-[#27272a] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {showApp ? (
          <AppLayout onClose={handleCloseApp} />
        ) : (
          <AppStartpage onOpen={handleOpenApp} />
        )}
      </div>
      <button className="absolute top-5 right-5" onClick={handleThemeSwap}>
        <MoonOutlined className="text-3xl text-gray-600" />
      </button>
    </div>
  );
}

export default App;
