import { useEffect } from "react";
import { Typewriter } from "react-simple-typewriter";

const words = {
  lineOne: ["Hello", "Привет", "Bonjour", "Ahoj"],
  lineTwo: ["Ciao", "Hola", "Witam", "Sveiki"],
  lineThree: ["こんにちは", "안녕하세요", "नमस्कार", "你好"],
  lineFour: ["Cәлем", "नमस्ते", "Merhaba", "با سلام"],
};

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
        <Typewriter
          words={words.lineOne}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={1500}
        />
      </span>
      <span className="text-2xl sm:text-3xl text-center">
        <Typewriter
          words={words.lineTwo}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={70}
          delaySpeed={1700}
        />
      </span>
      <span className="font-notoSansJp text-3xl sm:text-4xl text-right">
        <Typewriter
          words={words.lineThree}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={120}
          deleteSpeed={90}
          delaySpeed={1600}
        />
      </span>
      <span className="text-2xl sm:text-3xl text-right">
        <Typewriter
          words={words.lineFour}
          loop={true}
          cursor={true}
          cursorStyle="|"
          typeSpeed={100}
          deleteSpeed={80}
          delaySpeed={1600}
        />
      </span>
    </div>
  );
}

export default AppBanner;
