import { useContext } from "react";
import { FormContext } from "../../contexts/form/form-context.js";
import { Button } from "../button.jsx";
import { isEmpty } from "../../utils/is-empty.js";
import { LoadingSpinner } from "../loading-spinner.jsx";
import "./form.css";
import { clx } from "../../utils/clx.js";

export function FormButton({ className, children }) {
  const { isLoading, validationErrors } = useContext(FormContext);

  return (
    <Button
      type="submit"
      className={clx("bg-success", className)}
      disabled={isLoading || !isEmpty(validationErrors)}
    >
      {isLoading && <LoadingSpinner />}
      {!isLoading && children}
    </Button>
  );
}
