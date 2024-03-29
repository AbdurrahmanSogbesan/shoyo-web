import React from "react";
import "./Icon.css";
import icons from "./icons";
import PropTypes from "prop-types";

function Icon({
  icon,
  height = 28,
  width = 28,
  fill = "#000000",
  onClick,
  style,
}) {
  const IconComponent = icons[icon];

  return (
    <div className="iconContainer" onClick={onClick}>
      <IconComponent height={height} width={width} fill={fill} style={style} />
    </div>
  );
}

Icon.propTypes = {
  icon: PropTypes.oneOf(Object.keys(icons)).isRequired,
  height: PropTypes.number,
  width: PropTypes.number,
  fill: PropTypes.string,
  style: PropTypes.object,
  onClick: PropTypes.func,
};

export default Icon;
