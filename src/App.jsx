import { useState } from "react";

import AppLayout from "./components/AppLayout";
import AppStartpage from "./components/AppStartpage";

function App() {
  const [showApp, setShowApp] = useState(false);

  function handleCloseApp() {
    setShowApp(false);
  }

  function handleOpenApp() {
    setShowApp(true);
  }

  return (
    <div className="w-full h-screen bg-gradient-to-l from-[#7dd3fc] to-[#065f46] flex justify-center items-center">
      <div className="w-[90%] max-w-lg bg-[#27272a] rounded-xl shadow-2xl shadow-gray-800 flex flex-col">
        {showApp ? (
          <AppLayout onClose={handleCloseApp} />
        ) : (
          <AppStartpage onOpen={handleOpenApp} />
        )}
      </div>
    </div>
  );
}

export default App;
