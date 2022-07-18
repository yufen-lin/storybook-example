import React from "react";
import "./Button.css";

export const Button = ({
  variant = "primary",
  label,
  size = "medium",
  ...props
}) => {
  return (
    <button
      type="button"
      className={`storybook-button storybook-button--${variant} storybook-button--${size}`}
      {...props}
    >
      {label}
    </button>
  );
};
