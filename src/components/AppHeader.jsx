import PropTypes from "prop-types";

import Button from "../ui/Button";
import Logo from "../ui/Logo";

function AppHeader({ onOpen, theme }) {
  AppHeader.propTypes = {
    onOpen: PropTypes.func,
    theme: PropTypes.string,
  };

  return (
    <div className="w-full text-right space-y-5 my-20">
      <div className="flex justify-end gap-3 sm:gap-5">
        {theme === "dark" ? (
          <Logo src="public/logo-dark.png" alt="logo-dark" />
        ) : (
          <Logo src="public/logo-light.png" alt="logo-light" />
        )}
        <h1 className="font-righteous text-2xl sm:text-3xl text-sky-200 uppercase">
          <span className="text-lg sm:text-xl opacity-50 block dark:text-sky-500 text-emerald-800">
            Welcome to
          </span>{" "}
          <span className="dark:text-[#30cfd0] text-emerald-600">
            Translator ReApp
          </span>
        </h1>
      </div>
      <Button
        className={
          "w-40 h-10 dark:bg-gradient-to-r dark:from-[#30cfd0] dark:to-[#330867] bg-gradient-to-r from-[#f9f586] to-[#96fbc4] rounded-full font-righteous font-bold text-base uppercase text-gray-800 tracking-widest active:translate-y-[1px] hover:shadow-lg dark:hover:shadow-sky-400 hover:shadow-emerald-600 transition duration-200"
        }
        onClick={onOpen}
      >
        <span className="dark:drop-shadow-text_2_cyan drop-shadow-text_2_emerald">
          Get Started
        </span>
      </Button>
    </div>
  );
}

export default AppHeader;
