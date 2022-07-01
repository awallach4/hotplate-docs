var getSidebar = require("./getSidebar")

module.exports = {
  title: "Hotplate",
  description: "An Open Source Site Builder",
  head: [
    ["meta", {name: "viewport", content: "width=device-width,initial-scale=1.0"}],
    ["meta", {charset: "utf-8"}],
    ["link", {rel: "icon", href: "/favicon-32x32.png", sizes: "32x32"}]
  ],
  themeConfig: {
    repo: "awallach4/hotplate-sites",
    nav: [
      { text: "Guide", link: "/guide/" }
    ],
    sidebar: getSidebar(),
    smoothScroll: true
  }
}
