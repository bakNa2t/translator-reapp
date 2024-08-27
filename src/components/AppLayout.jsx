import PropTypes from "prop-types";

function AppLayout({ onClose }) {
  AppLayout.propTypes = {
    onClose: PropTypes.func,
  };

  return (
    <div className="w-full flex flex-col gap-y-4 justify-center items-center px-8 pt-12 pb-12 relative">
      <button
        className="absolute top-2 right-4 text-xl text-gray-300"
        onClick={onClose}
      >
        <i className="fa-solid fa-xmark"></i>
      </button>
      <div className="w-full min-h-20 flex justify-center items-center px-4 bg-gradient-to-r from-[#7dd3fc] to-[#065f46] text-slate-700 rounded-lg">
        <div className="lang">From English</div>
        <i className="fa-solid fa-arrows-rotate text-2xl mx-8 cursor-pointer"></i>
        <div className="lang">To Norge</div>
      </div>
      <div className="w-full relative">
        <textarea name="" id="" className="textarea"></textarea>
        <div className="absolute bottom-2 right-2 text-slate-700">0 / 200</div>
      </div>
      <button>
        <i className="fa-solid fa-chevron-down w-12 h-12 bg-gradient-to-r from-[#7dd3fc] to-[#065f46] rounded-full text-2xl text-slate-900 flex justify-center items-center active:translate-y-[1px]"></i>
      </button>
      <div className="w-full">
        <textarea name="" id="" className="textarea"></textarea>
      </div>
    </div>
  );
}

export default AppLayout;
