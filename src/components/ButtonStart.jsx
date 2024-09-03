import PtopTypes from "prop-types";

function ButtonStart({ onOpen }) {
  ButtonStart.propTypes = {
    onOpen: PtopTypes.func,
  };

  return (
    <button
      className="w-40 h-10 bg-gradient-to-r from-[#30cfd0] to-[#330867] dark:bg-gradient-to-r dark:from-[#f9f586] dark:to-[#96fbc4] rounded-full font-righteous font-bold text-base uppercase text-gray-800 tracking-widest active:translate-y-[1px] hover:shadow-lg hover:shadow-sky-400 dark:hover:shadow-emerald-600 transition duration-200"
      onClick={onOpen}
    >
      <span className="drop-shadow-text_2_cyan dark:drop-shadow-text_2_emerald">
        Get Started
      </span>
    </button>
  );
}

export default ButtonStart;
