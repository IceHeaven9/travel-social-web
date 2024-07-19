import { Link } from "react-router-dom";
import { Button } from "../button.jsx";
import { Icon } from "../icon.jsx";
import placeholderAvatarImage from "../../assets/placeholder-avatar.png";
import { useContext } from "react";
import { AuthContext } from "../../contexts/auth/auth-context.js";

export function NavbarProfileSection() {
  const { currentUser } = useContext(AuthContext);

  return (
    <section className="navbar-profile-section">
      {currentUser && (
        <Link to="/my/profile">
          <Button>
            <img
              src={currentUser.avatar ?? placeholderAvatarImage}
              className="navbar-avatar"
              alt={currentUser.username}
            />
            {currentUser.username}
          </Button>
        </Link>
      )}

      {!currentUser && (
        <Link to="/login">
          <Button>
            <Icon name="account_circle" />
            Sign In
          </Button>
        </Link>
      )}
    </section>
  );
}
