import { useState } from "react";
import { Button } from "../button.jsx";
import { Icon } from "../icon.jsx";
import { MainNavMenu } from "./main-nav-menu.jsx";

export function HamburgerMenu() {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  return (
    <>
      <Button
        className="navbar-hamburger-button"
        onClick={() => {
          setIsMenuVisible((old) => !old);
        }}
      >
        <Icon name="menu" />
      </Button>
      <MainNavMenu
        visible={isMenuVisible}
        onClick={() => {
          setIsMenuVisible(false);
        }}
      />
    </>
  );
}
