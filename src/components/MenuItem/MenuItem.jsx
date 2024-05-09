import PropTypes from "prop-types";
import "./MenuItem.css";
import { Link } from "react-router-dom";
export default function MenuItem({ icon, lable, isActive, handleClick, link }) {
  return (
    <Link to={link}>
      <div
        onClick={handleClick}
        className={`menu-item ${isActive ? "active" : ""}`}
      >
        {icon}
        <span>{lable}</span>
      </div>
    </Link>
  );
}
MenuItem.propTypes = {
  icon: PropTypes.element.isRequired,
  lable: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
  handleClick: PropTypes.func,
  link: PropTypes.string.isRequired,
};
