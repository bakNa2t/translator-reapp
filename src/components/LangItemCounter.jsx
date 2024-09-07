import PropTypes from "prop-types";

function LangItemCounter({ itemCounter, maxItems }) {
  LangItemCounter.propTypes = {
    itemCounter: PropTypes.number,
    maxItems: PropTypes.number,
  };

  return (
    <div className="absolute bottom-2 right-2 text-emerald-600 dark:text-slate-600 text-xs sm:text-sm">
      {itemCounter}/{maxItems}
    </div>
  );
}

export default LangItemCounter;
