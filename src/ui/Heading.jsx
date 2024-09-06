import PropTypes from "prop-types";

function Heading({ children, className }) {
  Heading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };
  return <h1 className={className}>{children}</h1>;
}

export default Heading;
