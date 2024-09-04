import PropTypes from "prop-types";

function LangItem({ children, onClick, key }) {
  LangItem.propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    key: PropTypes.string,
  };

  return (
    <li
      className="cursor-pointer dark:hover:bg-[#a8edea] hover:bg-[#48d1cc] transition duration-200 p-2 rounded"
      onClick={onClick}
      key={key}
    >
      {children}
    </li>
  );
}

export default LangItem;
