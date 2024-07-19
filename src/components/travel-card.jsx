import "./travel-card.css";
import { UserLink } from "./user-link.jsx";
import { ReactionButtons } from "./reaction-buttons.jsx";
import { Link } from "react-router-dom";
import { CommentsButton } from "./comments-button.jsx";
import { ButtonSection } from "./button-section.jsx";
import { Button } from "./button.jsx";
import { Icon } from "./icon.jsx";
import { useCurrentUser } from "../hooks/current-user.js";
import { apiCall } from "../utils/api-call.js";
import { toast } from "react-toastify";

export function TravelCard({ travel, onDelete }) {
  const currentUser = useCurrentUser();

  const isTravelOwner = currentUser?.id === travel.user.id;

  async function onInternalDelete() {
    try {
      await apiCall("delete", `/travels/${travel.id}`);
      onDelete?.();
      toast.success("Travel deleted successfully");
    } catch (err) {
      toast.error(err.message);
    }
  }

  return (
    <li className="travel-card-container">
      <article className="travel-card">
        <div className="user-link-container">
          <UserLink user={travel.user} />
        </div>
        <Link to={`/travels/${travel.id}`}>
          {travel.mainImage && (
            <img
              className="main-image"
              src={travel.mainImage.url}
              alt={"Main image of " + travel.title}
            />
          )}

          <h3 className="title">{travel.title}</h3>
          <p className="description">{travel.description}</p>
        </Link>
        {isTravelOwner && (
          <section className="travel-card-actions">
            <Link to={`/travels/${travel.id}/edit`}>
              <Button className={"warning"}>
                <Icon name="edit" />
              </Button>
            </Link>
            <Button className={"danger"} onClick={onInternalDelete}>
              <Icon name="delete" />
            </Button>
          </section>
        )}

        <ButtonSection>
          <ReactionButtons travel={travel} />
          <CommentsButton travel={travel} />
        </ButtonSection>
      </article>
    </li>
  );
}
