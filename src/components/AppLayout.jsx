import { useEffect, useState } from "react";
import { SwapOutlined } from "@ant-design/icons";
import PropTypes from "prop-types";

import LangSection from "./LangSection";
import LangSelector from "./LangSelector";
import Button from "./Button";
import Loader from "./Loader";

import { lang } from "../data/langData";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useLangSelect } from "../hooks/useLangSelect";

function AppLayout({ onClose }) {
  AppLayout.propTypes = {
    onClose: PropTypes.func,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [currentLangSelection, setCurrentLangSelection] = useState(null);
  const [inputText, setInputText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [itemCounter, setItemCounter] = useState(0);
  const maxItems = 200;

  const {
    handleLangSelection,
    selectedLangFrom,
    setSelectedLangFrom,
    selectedLangTo,
    setSelectedLangTo,
    isDisplayLang,
    setIsDisplayLang,
  } = useLangSelect(currentLangSelection);

  const ref = useOutsideClick(handleClickOutside, isDisplayLang);

  useEffect(
    function () {
      async function handleTranslateText() {
        if (!inputText.trim()) {
          setTranslatedText("");
          return;
        } else {
          setIsLoading(true);

          const res = await fetch(
            `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
              inputText
            )}&langpair=${selectedLangFrom}|${selectedLangTo}`
          );

          const data = await res.json();

          setTranslatedText(data.responseData.translatedText);

          setIsLoading(false);
        }
      }
      handleTranslateText();
    },

    [inputText, selectedLangFrom, selectedLangTo]
  );

  function handleLangClick(type) {
    setCurrentLangSelection(type);
    setIsDisplayLang(true);
  }

  function handleSwapText() {
    setInputText(translatedText);
    setTranslatedText(inputText);
    if (inputText.trim()) {
      handleSwapLang();
    }
  }

  function handleSwapLang() {
    setSelectedLangFrom(selectedLangTo);
    setSelectedLangTo(selectedLangFrom);
  }

  function handleUpdateInput(e) {
    const value = e.target.value;
    if (value.length <= maxItems) {
      setInputText(value);
      setItemCounter(value.length);
    }
  }

  function handleClickOutside(e) {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsDisplayLang(false);
    }
  }

  return (
    <main className="w-full flex flex-col gap-y-4 justify-center items-center px-6 sm:px-8 pt-12 pb-12 relative">
      {/* button to close the app */}
      <Button
        className={
          "absolute top-2 right-4 text-xl dark:text-gray-300 text-emerald-600 opacity-50 hover:opacity-100 transition duration-200"
        }
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </Button>

      {/*header of the app to show selected languages  */}
      <div className="w-full min-h-20 flex justify-center items-center px-4 dark:bg-gradient-to-r dark:from-[#30cfd0] dark:to-[#330867] bg-gradient-to-r from-[#f9f586] to-[#96fbc4] dark:text-neutral-800 text-teal-800 rounded-lg shadow-md shadow-[#020617]">
        <LangSelector className="lang" onClick={() => handleLangClick("from")}>
          <span className="opacity-50 text-[8px] sm:text-sm">From</span>{" "}
          <span className="dark:drop-shadow-text_2_purple drop-shadow-text_2_green">
            {lang[selectedLangFrom] || "English"}
          </span>
        </LangSelector>

        {/* button to swap languages */}
        <Button
          className={"text-2xl mx-8 cursor-pointer"}
          onClick={handleSwapLang}
        >
          <i className="fa-solid fa-arrows-rotate hover:animate-spin" />
        </Button>

        <LangSelector className="lang" onClick={() => handleLangClick("to")}>
          <span className="opacity-50 text-[8px] sm:text-sm">To</span>{" "}
          <span className="dark:drop-shadow-text_2_cyan drop-shadow-text_2_yellow">
            {lang[selectedLangTo] || "English"}
          </span>
        </LangSelector>
      </div>

      {isDisplayLang && (
        <div
          className="w-[calc(100%-4rem)] h-[calc(100%-9rem)] dark:bg-gradient-to-r dark:from-[#30cfd0] dark:to-[#330867] bg-gradient-to-r from-[#f9f586] to-[#96fbc4] absolute top-32 left-8 z-10 rounded shadow-lg p-4 overflow-y-scroll scrollbar-hide"
          ref={ref}
        >
          <ul>
            {Object.entries(lang).map(([langCode, langName]) => (
              <li
                className="cursor-pointer dark:hover:bg-[#a8edea] hover:bg-[#48d1cc] transition duration-200 p-2 rounded"
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
        <LangSection
          value={inputText}
          placeholder={"Enter text to translate..."}
          onChange={handleUpdateInput}
        />
        <div className="absolute bottom-2 right-2 text-slate-700 text-xs sm:text-sm">
          {itemCounter}/{maxItems}
        </div>
      </div>

      {/* button to exucte translation */}
      {isLoading ? (
        <Loader />
      ) : (
        <Button
          className={
            "w-10 h-10 sm:w-12 sm:h-12 font-bold dark:bg-gradient-to-r dark:from-[#30cfd0] dark:to-[#330867] bg-gradient-to-r from-[#f9f586] to-[#96fbc4] rounded-full text-xl sm:text-2xl text-slate-900 rotate-90 flex justify-center items-center active:translate-y-[1px] dark:hover:drop-shadow-text_2_cyan hover:drop-shadow-text_2_yellow transition duration-300"
          }
          onClick={handleSwapText}
        >
          <SwapOutlined />
        </Button>
      )}

      {/* textarea for result of translation */}
      <div className="w-full">
        <LangSection
          value={translatedText}
          placeholder={"Here will be the result..."}
          readOnly={true}
        />
      </div>
    </main>
  );
}

export default AppLayout;
