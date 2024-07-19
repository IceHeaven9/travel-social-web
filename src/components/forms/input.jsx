import { useContext } from "react";
import { clx } from "../../utils/clx.js";
import { FormContext } from "../../contexts/form/form-context.js";
import "./form.css";

export function Input({ name, type, label }) {
  const { isLoading, isFormTouched, updateField, validationErrors, formData } =
    useContext(FormContext);

  const isTouched = isFormTouched;
  const error = validationErrors[name];

  return (
    <div className="input-container">
      <div className={clx("input", isTouched && error && "danger")}>
        <label htmlFor={name}>{label}</label>
        <input
          id={name}
          name={name}
          type={type}
          disabled={isLoading}
          value={formData[name] || ""}
          onChange={(evt) => {
            updateField(name, evt.target.value);
          }}
        />
      </div>
      {isTouched && error && <p className="error danger">{error}</p>}
    </div>
  );
}
