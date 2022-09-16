import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

export default defineUserConfig({
  title: 'darkRaspberry',
  lang: "en-US",
  description: "I talk about tech or anything which connects to internet.",

// Head elements and meta data
  head: [
    ["link", { rel: "apple-touch-icon", sizes: "180x180",  href: `/favicon/apple-touch-icon.png` }],
    ["link", { rel: "icon", type: "image/png", sizes: "16x16", href: `/favicon/favicon-16x16.png` }],
    ["link", { rel: "icon", type: "image/png", sizes: "32x32", href: `/favicon/favicon-32x32.png` }],
    ["link", { rel: "manifest", href: "/site.webmanifest" }],
    ["link", { rel: "mask-icon", href: "/favicon/safari-pinned-tab.svg", color: "#5bbad5" }],
    ["meta", { name: "msapplication-TileColor", content: "#00aba9" }],
    ["meta", { name: "theme-color", content: "#ffffff" }]
  ],

  
  theme: gungnirTheme({
    repo: "darkRaspberry/blog",
    docsDir: "docs",
    docsBranch: "main",

    //Personal Info
    personalInfo: {
      name: "darkRaspberry",
      avatar: "/img/avatar.webp", // Need to change in into that d logo.
      description: "I talk about tech or anything which connects to internet.",
      sns: {
        github: "darkRaspberry",
        linkedin: "darkRaspberry",
        twitter: "devRaspberry",
        email: "insidedarkpit@gmail.com",
        rss: "/rss.xml",
      }
    },

    //Header Images
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgba(68, 74, 83, .1)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgba(19, 75, 50, .2)"
      }
    ],
    
  //Navbar configs
    navbarTitle: "$ cd /home/blog",
    navbar: [
      {
        text: "Home",
        link: "/",
        icon: "fa-fort-awesome"
      },
      {
        text: "Tags",
        link: "/tags/",
        icon: "fa-tag"
      },
      {
        text: "Links",
        link: "https://links.darkrasp.ga",
        icon: "fa-satellite-dish"
      },
      {
        text: "About",
        link: "https://darkrasp.ga",
        icon: "fa-paw"
      },
    ],

      // Pages in nav bars.
    pages: {
      tags: {
        subtitle: 'Hey! Here is tags page!',
        bgImage: {
          path: '/img/pages/tags.jpg',
          mask: 'rgba(211, 136, 37, .5)'
        }
      },
    },

    //Footer
    footer: `
      &copy; 2022 | <a href="https://github.com/darkRaspberry" target="_blank">darkRaspberry</a> | Made with ❤️ in INDIA
      <br>
      Powered by <a href="https://v2.vuepress.vuejs.org" target="_blank">VuePress</a> &
      <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
    `,

    //Theme Plugins
    themePlugins: {
      mdPlus: {
        all: true
      },
      rss: {
        siteURL: "https://darkrasp.ga",
      },
      pwa: true,
      search: false
    }
  }),

// extra
  markdown: {
    headers: {
      level: [2, 3, 4, 5]
    },
    code: {
      lineNumbers: false
    }
  }
});