import { clx } from "../utils/clx.js";
import "./button.css";

export function Button({
  className,
  type,
  children,
  onClick,
  disabled,
  style,
}) {
  return (
    <button
      className={clx("button", className)}
      style={style}
      type={type || "button"}
      onClick={(evt) => {
        evt.stopPropagation();

        if (onClick) {
          onClick();
        }
      }}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
