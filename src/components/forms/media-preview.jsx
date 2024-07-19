import { Button } from "../button.jsx";
import { FilePreview } from "../file-preview.jsx";
import { Icon } from "../icon.jsx";
import "./form.css";

export function MediaPreview({ images, onDeleteImage }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        width: "100%",
        padding: "0.5rem",
        flexWrap: "wrap",
      }}
    >
      <ul
        style={{
          width: "100%",
          marginBottom: "0.5rem",
          display: "grid",
          gridTemplateColumns: "1fr",
        }}
      >
        {images.map((image, index) => {
          return (
            <li
              key={index}
              style={{
                border: "1px solid var(--dark)",
                padding: "0.25rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <FilePreview file={image} />
              <Button
                onClick={() => {
                  onDeleteImage(index);
                }}
              >
                <Icon name="delete" />
              </Button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
