import PropTypes from "prop-types";

function Button({ children, className, onClick }) {
  Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onClick: PropTypes.func,
  };

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
