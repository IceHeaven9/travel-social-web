import { useContext, useEffect, useRef, useState } from "react";
import { FormContext } from "../../contexts/form/form-context.js";
import { clx } from "../../utils/clx.js";
import { Button } from "../button.jsx";
import "./form.css";
import { MediaPreview } from "./media-preview.jsx";

export function MediaInput({ name, label }) {
  const { isLoading, isFormTouched, updateField, validationErrors, formData } =
    useContext(FormContext);

  const inputRef = useRef(null);

  const isTouched = isFormTouched;
  const error = validationErrors[name];

  const [selectedFiles, setSelectedFiles] = useState([]);

  useEffect(() => {
    setSelectedFiles(formData[name] || []);
  }, [formData[name]]);

  return (
    <div className="input-container">
      <div className={clx("input", isTouched && error && "danger")}>
        <label htmlFor={name}>{label}</label>
        <input
          ref={inputRef}
          id={name}
          name={name}
          type="file"
          disabled={isLoading}
          multiple
          onChange={(evt) => {
            updateField(name, [...selectedFiles, ...evt.target.files]);
          }}
          className="hidden"
        />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            width: "100%",
            padding: "0.5rem",
            flexWrap: "wrap",
          }}
        >
          <MediaPreview
            images={selectedFiles}
            onDeleteImage={(index) => {
              updateField(name, selectedFiles.toSpliced(index, 1));
            }}
          />
          <Button
            onClick={() => {
              inputRef.current.click();
            }}
          >
            Seleccionar Archivo
          </Button>
        </div>
      </div>
      {isTouched && error && <p className="error danger">{error}</p>}
    </div>
  );
}
