import PropTypes from "prop-types";

// import ButtonStart from "./ButtonStart";
import AppBanner from "./AppBanner";
import AppHeader from "./AppHeader";

function AppStartpage({ onOpen, theme }) {
  AppStartpage.propTypes = {
    onOpen: PropTypes.func,
    theme: PropTypes.string,
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 sm:p-12">
      <AppBanner theme={theme} />
      <AppHeader onOpen={onOpen} theme={theme} />
    </div>
  );
}

export default AppStartpage;
