import { useState } from "react";
import { useCurrentUser } from "../hooks/current-user.js";
import { createCommentSchema } from "../validations/travels/create-comment.js";
import { Button } from "./button.jsx";
import { FormButton } from "./forms/form-button.jsx";
import { Form } from "./forms/form.jsx";
import { Textarea } from "./forms/textarea.jsx";
import { Icon } from "./icon.jsx";
import { UserLink } from "./user-link.jsx";
import { apiCall } from "../utils/api-call.js";
import { toast } from "react-toastify";

export function TravelComment({ comment, onDelete }) {
  const [internalComment, setInternalComment] = useState(comment);
  const [isEditing, setIsEditing] = useState(false);
  const currentUser = useCurrentUser();
  const isCommentOwner = currentUser?.id === internalComment.user.id;

  async function onCommentEdit(data) {
    try {
      setInternalComment((old) => {
        return { ...old, message: data.message };
      });
      await apiCall(
        "patch",
        `/travels/${internalComment.travelId}/comments/${internalComment.id}`,
        data
      );
      toast.success("Comentario editado correctamente");
      setIsEditing(false);
    } catch (err) {
      toast.error(err.message);
    }
  }

  async function onInternalDelete() {
    try {
      await apiCall(
        "delete",
        `/travels/${internalComment.travelId}/comments/${internalComment.id}`
      );
      onDelete?.();
      toast.success("Comentario eliminado correctamente");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <li className="travel-detail-comment" key={internalComment.id}>
      <UserLink user={internalComment.user} />
      {isCommentOwner && !isEditing && (
        <section className="travel-detail-comment-actions">
          <Button className={"warning"} onClick={() => setIsEditing(true)}>
            <Icon name="edit" />
          </Button>
          <Button className={"danger"} onClick={onInternalDelete}>
            <Icon name="delete" />
          </Button>
        </section>
      )}
      {!isEditing && <p>{internalComment.message}</p>}
      {isEditing && (
        <Form
          className="inline"
          onSubmit={onCommentEdit}
          validationSchema={createCommentSchema}
          initialData={{ message: internalComment.message }}
          resetOnSubmit={true}
        >
          <Textarea name="message" label="Mensaje" className="inline" />
          <FormButton>
            <Icon name="check" />
          </FormButton>
          <Button onClick={() => setIsEditing(false)}>
            <Icon name="close" />
          </Button>
        </Form>
      )}
    </li>
  );
}
