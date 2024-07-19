import { forwardRef, useContext } from "react";
import { FormContext } from "../../contexts/form/form-context.js";
import { clx } from "../../utils/clx.js";

import "./form.css";

export const Textarea = forwardRef(function Textarea(
  { name, label, className },
  ref
) {
  const { isLoading, isFormTouched, updateField, validationErrors, formData } =
    useContext(FormContext);

  const isTouched = isFormTouched;
  const error = validationErrors[name];

  return (
    <div
      className={clx(
        "input-container",
        isTouched && error && "danger",
        className
      )}
    >
      <div className={clx("input", isTouched && error && "danger")}>
        <label htmlFor={name}>{label}</label>
        <textarea
          ref={ref}
          className="textarea"
          name={name}
          id={name}
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
});
