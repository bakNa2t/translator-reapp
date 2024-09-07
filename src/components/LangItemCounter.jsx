import PropTypes from "prop-types";

function LangItemCounter({ children }) {
  LangItemCounter.propTypes = {
    children: PropTypes.node,
  };

  return (
    <div className="absolute bottom-2 right-2 text-emerald-600 dark:text-slate-600 text-xs sm:text-sm">
      {children}
    </div>
  );
}

export default LangItemCounter;
