import PropTypes from "prop-types";

function LangSection({ value, placeholder, onChange, onKeyDown, readOnly }) {
  LangSection.propTypes = {
    value: PropTypes.string,
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onKeyDown: PropTypes.func,
    readOnly: PropTypes.bool,
  };

  return (
    <textarea
      value={value}
      onChange={onChange}
      onKeyDown={onKeyDown}
      className="textarea"
      placeholder={placeholder}
      readOnly={readOnly}
    ></textarea>
  );
}

export default LangSection;
