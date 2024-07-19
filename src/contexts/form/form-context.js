import { createContext } from "react";

export const FormContext = createContext({
  isLoading: false,
  validationErrors: {},
  isFormTouched: false,
  updateField: () => undefined,
  formData: {},
});
