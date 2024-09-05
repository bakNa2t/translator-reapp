import { useEffect } from "react";

function AppBanner() {
  useEffect(function () {
    const elem = document.querySelector(".shadow-sd_4");

    const interval = setInterval(function () {
      elem.classList.toggle("shadow-sd_5");
    }, 2000);

    return function () {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-full h-52 sm:h-64 dark:bg-gradient-to-r dark:from-[#30cfd0] dark:to-[#330867] bg-gradient-to-r from-[#f9f586] to-[#96fbc4] rounded-t-full rounded-bl-full flex flex-col justify-center dark:text-[#abecd6] text-emerald-600 pr-6 dark:shadow-sd_2 shadow-sd_4">
      <span className="font-shojumaru text-5xl sm:text-6xl text-left pl-8">
        Hello
      </span>
      <span className="text-2xl sm:text-3xl text-center">Ciao</span>
      <span className="font-notoSansJp text-3xl sm:text-4xl text-right">
        こんにちは
      </span>
      <span className="text-2xl sm:text-3xl text-right">Hola</span>
    </div>
  );
}

export default AppBanner;
