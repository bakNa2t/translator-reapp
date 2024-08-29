import { useEffect, useRef } from "react";

export function useOutsideClick(handler, isLang, listenCapturing = true) {
  const ref = useRef();

  useEffect(
    function () {
      if (isLang) {
        document.addEventListener("mousedown", handler, listenCapturing);
      } else {
        document.removeEventListener("mousedown", handler, listenCapturing);
      }
      return () => {
        document.removeEventListener("mousedown", handler, listenCapturing);
      };
    },
    [handler, isLang, listenCapturing]
  );

  return ref;
}
