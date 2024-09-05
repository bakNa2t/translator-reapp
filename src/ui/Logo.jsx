import PropTypes from "prop-types";

function Logo({ src, alt }) {
  Logo.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
  };

  return (
    <img className="my-auto w-10 h-12 sm:w-12 sm:h-16" src={src} alt={alt} />
  );
}

export default Logo;
