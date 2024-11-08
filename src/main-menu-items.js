
export const SHOW_OPTIONS = {
  ALWAYS: "ALWAYS",
  ANONYMOUS: "ANONYMOUS",
  LOGGED_IN: "LOGGED_IN",
};

export const mainMenuItems = [
  {
    icon: "home",
    label: "Inicio",
    url: "/",
    showOn: SHOW_OPTIONS.ALWAYS,
  },
  {
    icon: "sos",
    label: "Ayuda",
    url: "/help",
    showOn: SHOW_OPTIONS.ALWAYS,
  },
  {
    icon: "explore",
    label: "Noticias",
    url: "/explore",
    showOn: SHOW_OPTIONS.ALWAYS,
  },
  {
    icon: "login",
    label: "Sign in",
    url: "/login",
    showOn: SHOW_OPTIONS.ANONYMOUS,
  },
  {
    icon: "person_add",
    label: "Sign up",
    url: "/register",
    showOn: SHOW_OPTIONS.ANONYMOUS,
  },
  {
    icon: "add",
    label: "Nueva Noticia",
    url: "/travels/create",
    showOn: SHOW_OPTIONS.LOGGED_IN,
  },
  {
    icon: "logout",
    label: "Logout",
    action: "logout",
    showOn: SHOW_OPTIONS.LOGGED_IN,
  },
];
