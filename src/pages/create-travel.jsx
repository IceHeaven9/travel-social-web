import { toast } from "react-toastify";
import { FormButton } from "../components/forms/form-button.jsx";
import { Form } from "../components/forms/form.jsx";
import { Input } from "../components/forms/input.jsx";
import { MediaInput } from "../components/forms/media-input.jsx";
import { PageTitle } from "../components/page-title.jsx";
import { useAuthGuard } from "../hooks/auth-guard.js";
import { createTravelSchema } from "../validations/travels/create-travel.js";
import { useNavigate } from "react-router-dom";
import { useSafeApiCall } from "../hooks/safe-api-call.js";
import { Textarea } from "../components/forms/textarea.jsx";

export function CreateTravelPage() {
  useAuthGuard("/travels/create");

  const navigate = useNavigate();
  const apiCall = useSafeApiCall();

  async function onSubmit(data) {
    const { id } = await apiCall("post", "/travels", {
      title: data.title,
      rating: data.rating,
      description: data.description,
    });

    toast.success("Travel creado correctamente");

    try {
      if (data.files?.length > 0) {
        await Promise.all(
          data.files.map(async (file) => {
            await apiCall("post", `/travels/${id}/photos`, file);
          })
        );
      }
    } catch (err) {
      console.error(err);
      toast.error("Hubo un error al cargar alguna de las imágenes");
    }

    navigate(`/travels/${id}`);
  }

  return (
    <main>
      <PageTitle>Crea un nuevo Travel</PageTitle>

      <Form onSubmit={onSubmit} validationSchema={createTravelSchema}>
        <Input name={"title"} label={"Titulo"} type={"text"} />
        <Input name={"rating"} label={"Rating del viaje"} type={"number"} />
        <Textarea name={"description"} label={"Descripción"} />
        <MediaInput name="files" label="Archivos" />

        <FormButton>Enviar!</FormButton>
      </Form>
    </main>
  );
}
