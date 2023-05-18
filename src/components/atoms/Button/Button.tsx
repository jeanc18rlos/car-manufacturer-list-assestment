import classnames from "@/utils/classnames"
import React from "react"
import "./Button.css"
import { ButtonSize, ButtonVariant, ButtonProps } from "./Button.d"

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled,
  className,
  variant,
  size

}) => (
  <button
    className={classnames(
      "assestment-button",
      variant || ButtonVariant.Primary,
      size || ButtonSize.Medium,
      className!,
      disabled ? "disabled" : ""
    )}
    disabled={disabled}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
