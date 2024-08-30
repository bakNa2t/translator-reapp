import PtopTypes from "prop-types";

function ButtonStart({ onOpen }) {
  ButtonStart.propTypes = {
    onOpen: PtopTypes.func,
  };

  return (
    <button
      className="w-40 h-10 bg-gradient-to-r from-[#30cfd0] to-[#330867] rounded-full font-righteous font-bold text-base uppercase text-gray-800 tracking-widest active:translate-y-[1px] hover:shadow-lg hover:shadow-sky-400 transition duration-200"
      onClick={onOpen}
    >
      Get Started
    </button>
  );
}

export default ButtonStart;
