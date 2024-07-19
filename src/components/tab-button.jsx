import { clx } from "../utils/clx.js";
import { Button } from "./button.jsx";

export function TabButton({ active, label, onClick }) {
  return (
    <Button
      className={clx("tab-button", active && "tab-button-active")}
      onClick={onClick}
    >
      {label}
    </Button>
  );
}
