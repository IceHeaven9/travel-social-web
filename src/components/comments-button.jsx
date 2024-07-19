import { Button } from "./button.jsx";
import { Icon } from "./icon.jsx";

import "./comments-button.css";

export function CommentsButton({ travel, onClick }) {
  return (
    <Button className="comments-btn" onClick={onClick}>
      <Icon name="comment" />
      {travel.commentsCount}
    </Button>
  );
}
