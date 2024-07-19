import { Button } from "../components/button.jsx";
import { Input } from "../components/forms/input.jsx";
import { PageTitle } from "../components/page-title.jsx";
import { Form } from "../components/forms/form.jsx";
import { API_HOST } from "../constants.js";
import { useNavigate } from "react-router-dom";
import { registerSchema } from "../validations/auth/register-validation.js";

export function RegisterPage() {
  const navigate = useNavigate();

  async function onSubmit(value) {
    const response = await fetch(`${API_HOST}/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });

    if (response.ok) {
      navigate("/login?validation=pending");
    } else {
      const { error, message } = await response.json();

      // if (error == "EMAIL_IN_USE") {
      //   setValidationErrors({
      //     email: message,
      //   });
      //   return;
      // }
      // if (error == "USERNAME_IN_USE") {
      //   setValidationErrors({
      //     username: message,
      //   });
      //   return;
      // }

      console.log("Error:", error, message);
    }
  }

  return (
    <main>
      <PageTitle>Register</PageTitle>
      <Form onSubmit={onSubmit} validationSchema={registerSchema}>
        <div>
          <Input name="name" type="text" label="Nombre completo" />
          <Input name="username" type="text" label="Username" />
          <Input name="email" type="email" label="Email" />
          <Input name="password" type="password" label="Contraseña" />
          <Input name="rePassword" type="password" label="Repita Contraseña" />
        </div>
        <Button type={"submit"} className={"bg-success"}>
          Enviar!
        </Button>
      </Form>
    </main>
  );
}
