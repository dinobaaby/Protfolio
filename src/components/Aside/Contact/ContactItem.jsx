import PropTypes from "prop-types";

export default function ContactItem({ icon, title, des }) {
  return (
    <div className="aside-contactitem">
      {icon}
      <div className="contactitem-des">
        <span>{title}</span>
        <p>{des}</p>
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.element.isRequired,
  title: PropTypes.string.isRequired,
  des: PropTypes.string.isRequired,
};
