import authorAvatar from "../../public/images/author/logo.png";
export const siteConfig = {
  name: "SoyMilk",
  description:
    "SoyMilk Blog for everyone",
  author: "Keyla Samara",
  authorImage: authorAvatar,
  social: {
    github: "",
    twitter: "",
    facebook: "",
  },
};

export type SiteConfig = typeof siteConfig;
