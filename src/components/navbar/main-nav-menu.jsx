import { useContext } from "react";
import { SHOW_OPTIONS, mainMenuItems } from "../../main-menu-items.js";
import { clx } from "../../utils/clx.js";
import { NavLink } from "../nav-link.jsx";
import { AuthContext } from "../../contexts/auth/auth-context.js";

export function MainNavMenu({ visible, onClick }) {
  const { currentUser, onLogout } = useContext(AuthContext);

  function internalOnClick(action) {
    if (action == "logout") {
      onLogout();
    }

    onClick();
  }

  return (
    <nav className={clx("navbar-main-menu md-flex", !visible && "hidden")}>
      <ul>
        {mainMenuItems
          .filter((item) => {
            switch (item.showOn) {
              case SHOW_OPTIONS.ALWAYS:
                return true;
              case SHOW_OPTIONS.ANONYMOUS:
                return !currentUser;
              case SHOW_OPTIONS.LOGGED_IN:
                return currentUser;
              default:
                return true;
            }
          })
          .map((item) => {
            return (
              <li key={item.label}>
                <NavLink {...item} onClick={internalOnClick} />
              </li>
            );
          })}
      </ul>
    </nav>
  );
}
