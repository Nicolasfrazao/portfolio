export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Nicolas Portfolio",
  description: "Nicolas Frazao portfolio, created to showcase my code skills, build with nextJS.",

  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      label: "Projects",
      href: "/projects",
    },
    {
      label: "Team",
      href: "/team",
    },
    {
      label: "Calendar",
      href: "/calendar",
    },
    {
      label: "Settings",
      href: "/settings",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
    {
      label: "Logout",
      href: "/logout",
    },
  ],
  links: {
    github: "https://github.com/Nicolasfrazao",
    linkedin: "https://www.linkedin.com/in/nicolas-fraz%C3%A3o-b6591225b/",
    discord: "https://discord.gg/rtkH6d22",
    sponsor: "https://patreon.com/NFDev",
  },
};
