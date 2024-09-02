import PropTypes from "prop-types";

// import ButtonStart from "./ButtonStart";
import AppBanner from "./AppBanner";
import AppHeader from "./AppHeader";

function AppStartpage({ onOpen }) {
  AppStartpage.propTypes = {
    onOpen: PropTypes.func,
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center p-6 sm:p-12">
      <AppBanner />
      <AppHeader onOpen={onOpen} />
    </div>
  );
}

export default AppStartpage;
