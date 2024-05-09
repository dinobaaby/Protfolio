import PropTypes from "prop-types";
import "./CardSkill.css";
export default function CardSkill({ icon, title, des, ...rest }) {
  return (
    <div className={`card-skill-item ${rest}`}>
      {icon}
      <div>
        <span>{title}</span>
        <p>{des}</p>
      </div>
    </div>
  );
}

CardSkill.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};
