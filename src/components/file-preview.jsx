export function FilePreview({ file }) {
  let url = null;
  if (file instanceof File) {
    url = URL.createObjectURL(file);
  } else {
    url = file.url;
  }

  return (
    <img
      src={url}
      style={{
        width: "150px",
        height: "150px",
        objectFit: "contain",
        backgroundColor: "var(--gray)",
      }}
    />
  );
}
