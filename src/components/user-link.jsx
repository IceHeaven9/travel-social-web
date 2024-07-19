import { Link } from "react-router-dom";
import placeholderAvatarImage from "../assets/placeholder-avatar.png";

import "./user-link.css";

export function UserLink({ user }) {
  return (
    <Link to={`/profile/${user.id}`} className="user-link">
      <img
        className="avatar"
        src={user.avatar ?? placeholderAvatarImage}
        alt={user.username}
      />
      <p>{user.username}</p>
    </Link>
  );
}
