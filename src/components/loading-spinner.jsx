import { Icon } from "./icon.jsx";

export function LoadingSpinner() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Icon name="progress_activity" className="spin text-big" />
    </div>
  );
}
