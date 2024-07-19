import { useState } from "react";
import { clx } from "../utils/clx.js";
import { Button } from "./button.jsx";
import { Icon } from "./icon.jsx";
import { apiCall } from "../utils/api-call.js";
import { useCurrentUser } from "../hooks/current-user.js";
import { useNavigate } from "react-router-dom";

import "./reaction-buttons.css";

const VOTE_STATE = {
  NONE: 0,
  UP: 1,
  DOWN: -1,
};

export function ReactionButtons({ travel }) {
  const currentUser = useCurrentUser();
  const navigate = useNavigate();

  const [currentReaction, setCurrentReaction] = useState(
    travel.currentReaction
  );
  const reactionsCount =
    travel.reactionsCount + currentReaction - travel.currentReaction;

  async function onUpVote() {
    if (!currentUser) {
      navigate(`/login?redirect=/travels/${travel.id}`);
      return;
    }
    if (currentReaction == VOTE_STATE.UP) {
      setCurrentReaction(VOTE_STATE.NONE);
      await apiCall("delete", `/travels/${travel.id}/reactions`);
      return;
    }
    setCurrentReaction(VOTE_STATE.UP);
    await apiCall("post", `/travels/${travel.id}/reactions`, {
      reaction: VOTE_STATE.UP,
    });
  }

  async function onDownVote() {
    if (!currentUser) {
      navigate(`/login?redirect=/travels/${travel.id}`);
      return;
    }
    if (currentReaction == VOTE_STATE.DOWN) {
      setCurrentReaction(VOTE_STATE.NONE);
      await apiCall("delete", `/travels/${travel.id}/reactions`);
      return;
    }
    setCurrentReaction(VOTE_STATE.DOWN);
    await apiCall("post", `/travels/${travel.id}/reactions`, {
      reaction: VOTE_STATE.DOWN,
    });
  }

  return (
    <section className="reaction-buttons">
      <Button
        className={clx(currentReaction == VOTE_STATE.DOWN && "danger")}
        onClick={onDownVote}
      >
        <Icon name="thumb_down" />
      </Button>
      <p>{reactionsCount}</p>
      <Button
        className={clx(currentReaction == VOTE_STATE.UP && "success")}
        onClick={onUpVote}
      >
        <Icon name="thumb_up" />
      </Button>
    </section>
  );
}
