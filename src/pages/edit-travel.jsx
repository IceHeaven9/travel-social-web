import { toast } from "react-toastify";
import { FormButton } from "../components/forms/form-button.jsx";
import { Form } from "../components/forms/form.jsx";
import { Input } from "../components/forms/input.jsx";
import { MediaInput } from "../components/forms/media-input.jsx";
import { PageTitle } from "../components/page-title.jsx";
import { useAuthGuard } from "../hooks/auth-guard.js";
import { createTravelSchema } from "../validations/travels/create-travel.js";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { LoadingSpinner } from "../components/loading-spinner.jsx";
import { Textarea } from "../components/forms/textarea.jsx";
import { MediaPreview } from "../components/forms/media-preview.jsx";
import { useSafeApiCall } from "../hooks/safe-api-call.js";

export function EditTravelPage() {
  const { travelId } = useParams();

  useAuthGuard(`/travels/${travelId}/edit`);

  const [isLoading, setIsLoading] = useState(true);
  const [travel, setTravel] = useState(null);
  const [travelImages, setTravelImages] = useState([]);

  const navigate = useNavigate();
  const apiCall = useSafeApiCall();

  async function getTravel() {
    const result = await apiCall("get", `/travels/${travelId}`);
    setTravel(result);
    await getTravelImages();
    setIsLoading(false);
  }

  async function getTravelImages() {
    try {
      const result = await apiCall("get", `/travels/${travelId}/photos`);
      setTravelImages(result);
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTravel();
  }, [travelId]);

  async function onSubmit(data) {
    try {
      await apiCall("patch", `/travels/${travel.id}`, {
        title: data.title,
        rating: data.rating,
        description: data.description,
      });

      try {
        await Promise.all(
          data.files?.map(async (file) => {
            await apiCall("post", `/travels/${travel.id}/photos`, file);
          })
        );
      } catch (err) {
        console.error(err);
        toast.error("Hubo un error al cargar alguna de las imágenes");
      }

      navigate(`/travels/${travel.id}`);
      toast.success("Travel editado con éxito");
    } catch (err) {
      console.error(err);
      toast.error(err.message);
    }
  }

  async function onDeleteImage(index) {
    const image = travelImages[index];
    try {
      await apiCall("delete", `/travels/${travel.id}/photos/${image.id}`);
      setTravelImages((old) => old.filter((img) => image.id != img.id));
      toast.success("Imagen del Travel eliminada con éxito");
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }

  if (isLoading) {
    return (
      <main>
        <PageTitle>Editar Travel</PageTitle>
        <LoadingSpinner />
      </main>
    );
  }

  return (
    <main>
      <PageTitle>Editar Travel</PageTitle>

      <h3 style={{ textAlign: "center" }}>{travel.title}</h3>

      <Form
        onSubmit={onSubmit}
        validationSchema={createTravelSchema}
        initialData={{
          title: travel.title,
          rating: travel.rating,
          description: travel.description,
        }}
      >
        <Input name={"title"} label={"Titulo"} type={"text"} />
        <Input name={"rating"} label={"Rating del viaje"} type={"number"} />
        <Textarea name={"description"} label={"Descripción"} />

        <div className="input">
          <label>Imágenes cargadas</label>
          <MediaPreview images={travelImages} onDeleteImage={onDeleteImage} />
        </div>
        <MediaInput name="files" label="Cargar nuevas imágenes" />

        <FormButton>Enviar!</FormButton>
      </Form>
    </main>
  );
}
