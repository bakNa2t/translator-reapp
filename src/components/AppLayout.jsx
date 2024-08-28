import { useState } from "react";
import PropTypes from "prop-types";

import { lang } from "../data/langData";

function AppLayout({ onClose }) {
  AppLayout.propTypes = {
    onClose: PropTypes.func,
  };

  const [selectedLangFrom, setSelectedLangFrom] = useState("en");
  const [selectedLangTo, setSelectedLangTo] = useState("en");
  const [isDisplayLang, setIsDisplayLang] = useState(false);
  const [currentLangSelection, setCurrentLangSelection] = useState(null);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");

  function handleLangClick(type) {
    setCurrentLangSelection(type);
    setIsDisplayLang(true);
  }

  function handleLangSelection(langCode) {
    if (currentLangSelection === "from") {
      setSelectedLangFrom(langCode);
    } else {
      setSelectedLangTo(langCode);
    }

    setIsDisplayLang(false);
  }

  function handleSwapLang() {
    setSelectedLangFrom(selectedLangTo);
    setSelectedLangTo(selectedLangFrom);
  }

  async function handleTranslateText() {
    if (!inputText.trim()) {
      setTranslatedText("");
      return;
    } else {
      const res = await fetch(
        `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
          inputText
        )}&langpair=${selectedLangFrom}|${selectedLangTo}`
      );

      const data = res.json();

      setTranslatedText(data.responseData.translatedText);
    }
  }

  console.log(setInputText, translatedText);

  return (
    <main className="w-full flex flex-col gap-y-4 justify-center items-center px-8 pt-12 pb-12 relative">
      {/* button to close the app */}
      <button
        className="absolute top-2 right-4 text-xl text-gray-300"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>

      {/*header of the app to show selected languages  */}
      <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#7dd3fc] to-[#065f46] text-slate-800 rounded-lg">
        <div className="lang" onClick={() => handleLangClick("from")}>
          <span className="opacity-50 text-sm">From</span>{" "}
          {lang[selectedLangFrom] || "English"}
        </div>

        {/* button to swap languages */}
        <i
          className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"
          onClick={handleSwapLang}
        ></i>

        <div className="lang" onClick={() => handleLangClick("to")}>
          <span className="opacity-50 text-sm">To</span>{" "}
          {lang[selectedLangTo] || "English"}
        </div>
      </div>

      {isDisplayLang && (
        <div className="w-[calc(100%-4rem)] h-[calc(100%-9rem)] bg-gradient-to-r from-[#7dd3fc] to-[#065f46] absolute top-32 left-8 z-10 rounded shadow-lg p-4 overflow-y-scroll scrollbar-hide">
          <ul>
            {Object.entries(lang).map(([langCode, langName]) => (
              <li
                className="cursor-pointer hover:bg-emerald-600 transition duration-200 p-2 rounded"
                key={langCode}
                onClick={() => handleLangSelection(langCode)}
              >
                {langName}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* textarea for translation and counter  */}
      <div className="w-full relative">
        <textarea name="" id="" className="textarea"></textarea>
        <div className="absolute bottom-2 right-2 text-slate-700">0 / 200</div>
      </div>

      {/* button to exucte translation */}
      <button>
        <i
          className="fa-solid fa-chevron-down w-12 h-12 bg-gradient-to-r from-[#7dd3fc] to-[#065f46] rounded-full text-2xl text-slate-900 flex justify-center items-center active:translate-y-[1px]"
          onClick={handleTranslateText}
        ></i>
      </button>

      {/* textarea for result of translation */}
      <div className="w-full">
        <textarea name="" id="" className="textarea"></textarea>
      </div>
    </main>
  );
}

export default AppLayout;
