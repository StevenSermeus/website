import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://www.stevensermeus.be", // replace this with your deployed domain
  author: "Sermeus Steven",
  desc: "My space to share my thoughts and projects.",
  title: "Steven Sermeus | Blog",
  // ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 5,
  scheduledPostMargin: 5 * 60 * 1000, // 5 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/StevenSermeus",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/steven-sermeus/",
    linkTitle: `My LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:stevensermeus@gmail.com",
    linkTitle: `Send me an email`,
    active: true,
  },
  {
    name: "Discord",
    href: "https://github.com/satnaing/astro-paper",
    linkTitle: `${SITE.title} on Discord`,
    active: false,
  },
  {
    name: "GitLab",
    href: "https://gitlab.com/StevenSermeus",
    linkTitle: `My GitLab`,
    active: true,
  },
];
