import { useNavigate, useSearchParams } from "react-router-dom";
import { PageTitle } from "../components/page-title.jsx";
import { useEffect } from "react";
import { LoadingSpinner } from "../components/loading-spinner.jsx";
import { useSafeApiCall } from "../hooks/safe-api-call.js";

export function ValidateEmailPage() {
  const [search] = useSearchParams();

  const email = search.get("email");
  const code = search.get("code");

  const navigate = useNavigate();
  const apiCall = useSafeApiCall();

  useEffect(() => {
    async function validateEmail() {
      try {
        await apiCall("post", "/validate-email", {
          email,
          code,
        });
        navigate("/login?validation=success");
      } catch (error) {
        switch (error.error) {
          case "INVALID_CODE": {
            navigate("/login?validation=invalid");
            break;
          }
          case "EMAIL_ALREADY_VALIDATED": {
            navigate("/login?validation=already-validated");
            break;
          }
          default: {
            navigate("/login?validation=error");
          }
        }
      }
    }
    validateEmail();
  }, [email, code]);

  return (
    <main>
      <PageTitle>Validating email</PageTitle>
      <div
        style={{
          padding: "2rem",
        }}
      >
        <LoadingSpinner />
      </div>
    </main>
  );
}
