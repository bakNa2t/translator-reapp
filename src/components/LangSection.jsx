import PropTypes from "prop-types";

function LangSection({ value, onChange, onKeyDown, readOnly }) {
  LangSection.propTypes = {
    value: PropTypes.string,
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
      readOnly={readOnly}
    ></textarea>
  );
}

export default LangSection;
