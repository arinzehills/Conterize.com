import React from "react";
import "./Button.css";

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
  buttonColor,
  style,
}) => {
  const COLOR = ["pink", "blue"];
  const STYLES = ["btn--normal", "btn--outline", "btn--rounded"];
  const SIZES = ["btn--medium", "btn--large", "btn--wide"];
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];
  const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : null;
  const checkButtonColor = COLOR.includes(buttonColor) ? buttonColor : null;

  return (
    <button
      style={style}
      className={`btn ${checkButtonStyle} 
             ${checkButtonSize} ${checkButtonColor}`}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
