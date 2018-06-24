const colors = require("../../src/styles/colors");

module.exports = {
  siteTitle: "Septanto", // <title>
  shortSiteTitle: "Septanto Homepage", // <title> ending for posts and pages
  siteDescription: "a blog about NLP & Computational Linguistics",
  siteUrl: "https://septanto.github.io",
  pathPrefix: "",
  siteImage: "preview.jpg",
  siteLanguage: "en",
  // author
  authorName: "septanto",
  authorTwitterAccount: "septanto",
  // info
  infoTitle: "septanto",
  infoTitleNote: "homepage",
  // manifest.json
  manifestName: "PersonalBlog",
  manifestShortName: "PersonalBlog", // max 12 characters
  manifestStartUrl: "/",
  manifestBackgroundColor: colors.background,
  manifestThemeColor: colors.background,
  manifestDisplay: "standalone",
  // contact
  contactEmail: "s.s.adi.nugroho@gmail.com",
  // social
  authorSocialLinks: [
    { name: "github", url: "https://github.com/septanto" },
    // { name: "facebook", url: "http://facebook.com/gtrst19" },
    { name: "medium", url: "https://medium.com/@septanto" },
    { name: "linkedin", url: "https://www.linkedin.com/in/septanto/"}
  ]
};
