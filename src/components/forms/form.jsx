import { useEffect, useState } from "react";
import { FormContext } from "../../contexts/form/form-context.js";
import { validate } from "../../validations/validate.js";
import "./form.css";
import { clx } from "../../utils/clx.js";

export function Form({
  onSubmit,
  validationSchema,
  resetOnSubmit,
  initialData,
  className,
  children,
}) {
  if (!validationSchema) throw "Falta el validationSchema";

  const [isLoading, setIsLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState({});
  const [isFormTouched, setIsFormTouched] = useState(false);
  const [formData, setFormData] = useState(initialData ?? {});

  function updateField(fieldName, value) {
    setIsFormTouched(true);
    setFormData((old) => {
      return {
        ...old,
        [fieldName]: value,
      };
    });
  }

  const { value, error } = validate(validationSchema, formData);

  useEffect(() => {
    if (error) {
      setValidationErrors(
        Object.fromEntries(error.details.map((d) => [d.context.key, d.message]))
      );
      return;
    }
    setValidationErrors({});
  }, [formData]);

  async function internalOnSubmit(event) {
    setIsLoading(true);
    event.preventDefault();

    if (error) {
      setIsLoading(false);
      return;
    }

    await onSubmit(value);

    if (resetOnSubmit) {
      setIsFormTouched(false);
      setFormData({});
    }

    setIsLoading(false);
  }

  return (
    <form
      onSubmit={internalOnSubmit}
      className={clx("form", isLoading && "loading", className)}
    >
      <FormContext.Provider
        value={{
          validationErrors,
          isFormTouched,
          isLoading,
          updateField,
          formData,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
}
