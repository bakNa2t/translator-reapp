import PropTypes from "prop-types";

import ButtonStart from "./ButtonStart";

function AppStartpage({ onOpen }) {
  AppStartpage.propTypes = {
    onOpen: PropTypes.func,
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 sm:p-12">
      <div className="w-full h-64 bg-gradient-to-r from-[#30cfd0] to-[#330867] rounded-t-full rounded-bl-full flex flex-col justify-center text-[#abecd6] pr-6">
        <span className="font-shojumaru text-5xl sm:text-6xl text-left pl-8">
          Hello
        </span>
        <span className="text-2xl sm:text-3xl text-center">Ciao</span>
        <span className="font-notoSansJp text-3xl sm:text-4xl text-right">
          こんにちは
        </span>
        <span className="text-2xl sm:text-3xl text-right">Hola</span>
      </div>
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
