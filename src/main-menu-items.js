export const SHOW_OPTIONS = {
	ALWAYS: "ALWAYS",
	ANONYMOUS: "ANONYMOUS",
	LOGGED_IN: "LOGGED_IN",
};

export const mainMenuItems = [
	{
		icon: "home",
		label: "Home",
		url: "/",
		showOn: SHOW_OPTIONS.ALWAYS,
	},
	{
		icon: "person",
		label: "Companions",
		url: "/companions",
		showOn: SHOW_OPTIONS.ALWAYS,
	},
	{
		icon: "explore",
		label: "Explore",
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
		label: "Nuevo Travel",
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
