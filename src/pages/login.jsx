import { useContext, useEffect } from "react";
import { Button } from "../components/button.jsx";
import { Form } from "../components/forms/form.jsx";
import { Input } from "../components/forms/input.jsx";
import { PageTitle } from "../components/page-title.jsx";
import { toast } from "react-toastify";
import { useNavigate, useSearchParams } from "react-router-dom";
import { loginSchema } from "../validations/auth/login-validation.js";
import { AuthContext } from "../contexts/auth/auth-context.js";
import { apiCall } from "../utils/api-call.js";

export function LoginPage() {
  const [search] = useSearchParams();
  const validationStatus = search.get("validation");
  const navigate = useNavigate();

  const redirectToUrl = search.get("redirect");

  const { onLogin } = useContext(AuthContext);

  useEffect(() => {
    switch (validationStatus) {
      case "success": {
        toast.success("Validamos tu email, ya podes loguearte");
        break;
      }
      case "error": {
        toast.error("Hubo un error inesperado");
        break;
      }
      case "already-validated": {
        toast.warn(
          "Tu email ya estaba validado; No te preocupes, ya podes loguearte"
        );
        break;
      }
      case "invalid": {
        toast.error("El token de validación fue inválido");
        break;
      }
    }
  }, [validationStatus]);

  async function onSubmit(value) {
    try {
      const result = await apiCall("post", "/login", value);
      onLogin(result.token);
      navigate(redirectToUrl ?? "/");
    } catch (response) {
      const { error } = response;
      if (error == "INVALID_CREDENTIALS") {
        toast.error("Las credenciales son inválidas");
        return;
      }
      if (error == "EMAIL_NOT_VALIDATED") {
        toast.error(
          "Tu email aun no ha sido validado; Revisa tu casilla de correo para validar tu email"
        );
        return;
      }

      toast.error("Hubo un error inesperado, pruebe más tarde");
      return;
    }
  }

  return (
    <main>
      <PageTitle>Login</PageTitle>
      <Form onSubmit={onSubmit} validationSchema={loginSchema}>
        <div>
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Contraseña" />
        </div>
        <Button type={"submit"} className={"bg-success"}>
          Enviar!
        </Button>
      </Form>
    </main>
  );
}
