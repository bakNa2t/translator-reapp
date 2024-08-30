import { useState } from "react";

export function useLangSelect(currentLang) {
  const [selectedLangFrom, setSelectedLangFrom] = useState("en");
  const [selectedLangTo, setSelectedLangTo] = useState("en");
  const [isDisplayLang, setIsDisplayLang] = useState(false);

  function handleLangSelection(langCode) {
    if (currentLang === "from") {
      setSelectedLangFrom(langCode);
    } else {
      setSelectedLangTo(langCode);
    }

    setIsDisplayLang(false);
  }

  return {
    handleLangSelection,
    selectedLangFrom,
    setSelectedLangFrom,
    selectedLangTo,
    setSelectedLangTo,
    isDisplayLang,
    setIsDisplayLang,
  };
}
