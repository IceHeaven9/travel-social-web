import { HamburgerMenu } from "./hamburger-menu.jsx";
import { NavbarProfileSection } from "./navbar-profile-section.jsx";
import { SearchBar } from "./search-bar.jsx";

import "./navbar.css";

export function Navbar() {
  return (
    <nav id="main-navbar">
      <HamburgerMenu />
      <SearchBar />
      <NavbarProfileSection />
    </nav>
  );
}
