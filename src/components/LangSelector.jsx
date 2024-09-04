import PropTypes from "prop-types";

function LangSelector({ children, className, onClick }) {
  LangSelector.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };
  return (
    <div className={className} onClick={onClick}>
      {children}
    </div>
  );
}

export default LangSelector;
