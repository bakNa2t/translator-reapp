import PropTypes from "prop-types";

import ButtonStart from "./ButtonStart";
import AppBanner from "./AppBanner";

function AppStartpage({ onOpen }) {
  AppStartpage.propTypes = {
    onOpen: PropTypes.func,
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 sm:p-12">
      <AppBanner />
      <div className="w-full text-right space-y-5 my-20">
        <h1 className="font-righteous text-3xl sm:text-4xl text-sky-200 uppercase">
          <span className="text-2xl sm:text-2xl opacity-50 block text-sky-500">
            Welcome to
          </span>{" "}
          <span className="text-[#30cfd0]">Translator ReApp</span>
        </h1>
        <ButtonStart onOpen={onOpen} />
      </div>
    </div>
  );
}

export default AppStartpage;
