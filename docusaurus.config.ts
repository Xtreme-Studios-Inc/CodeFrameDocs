import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: "CodeFrame",
  tagline:
    "CodeFrame is the next-generation low-level build tool bringing speed, simplicity, and modern features you expect from tools like Bun or npm, to C, C++ and Assembly.\n\n⚠️ Early Release Notice\nThis release is intended as a proof of concept and may not be ready for serious production builds yet.\n\n",
  favicon: "img/CF_Logo.ico",

  markdown: {
    mermaid: true,
  },
  themes: ["@docusaurus/theme-mermaid"],

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://codeframe.run",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Xtreme-Studios-Inc", // Usually your GitHub org/user name.
  projectName: "CodeFrameDocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        blog: false,
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ["rss", "atom"],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: "warn",
        //   onInlineAuthors: "warn",
        //   onUntruncatedBlogPosts: "warn",
        // },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/codeframe-social-card.jpg",
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      // title: "",
      title: "CodeFrame",
      logo: {
        alt: "CodeFrame Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Docs",
        },
        {
          to: "/package-list", // Path to your markdown page
          label: "Packages",
          position: "left",
        },
        {
          to: "/roadmap", // Path to your markdown page
          label: "Roadmap",
          position: "left",
        },
        // { to: "/blog", label: "Blog", position: "left" },
        {
          href: "https://github.com/Xtreme-Studios-Inc/XCodeFrame",
          // label: "GitHub",
          className: "navbar-github-link",
          position: "right",
          "aria-label": "GitHub repository",
        },
        {
          type: "html",
          position: "right",
          value: `
            <a href="https://github.com/Xtreme-Studios-Inc/XCodeFrame"
                target="_blank"
                style=" display: flex;
                        align-items: center;
                        text-decoration: none;
                        color: white;
                        background-color: #353c49ff;
                        padding: 7px 9px;
                        border-radius: 0.4em;
              ">
                <img src="/img/github-mark-white.svg" alt="GitHub" width="27px"/>
                <span style="
                        display: flex;
                        align-items: center;
                        height: 100%;
                        color: white;
                        font-weight: semibold;
                        font-family: sans-serif;
                        font-size: 12px;
                        margin-left: 7px;
                        white-space: nowrap;
                        position: relative; 
                        top: 1px;
                ">Coming Soon</span>
            </a>
            `,
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        // {
        //   title: "Docs",
        //   items: [
        //     {
        //       label: "Tutorial",
        //       to: "/docs/introduction",
        //     },
        //   ],
        // },
        {
          title: "Notable Pages",
          items: [
            {
              label: "Introduction",
              to: "/docs/introduction",
            },
            {
              label: "Getting Started",
              to: "/docs/getting-started",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Discussions",
              href: "https://github.com/Xtreme-Studios-Inc/CodeFrameDocs/discussions",
            },
            {
              label: "Issues",
              href: "https://github.com/Xtreme-Studios-Inc/CodeFrameDocs/issues",
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/@xconsciouscreator",
            },
            // {
            //   label: "Stack Overflow",
            //   href: "https://stackoverflow.com/questions/tagged/docusaurus",
            // },
            // {
            //   label: "Discord",
            //   href: "https://discordapp.com/invite/docusaurus",
            // },
            // {
            //   label: "X",
            //   href: "https://x.com/docusaurus",
            // },
          ],
        },
        {
          title: "More",
          items: [
            // {
            //   label: "Blog",
            //   to: "/blog",
            // },
            {
              label: "GitHub Repo (coming soon)",
              href: "https://github.com/Xtreme-Studios-Inc/XCodeFrame",
            },
            {
              label: "Releases",
              href: "https://github.com/Xtreme-Studios-Inc/CodeFrameDocs/releases",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} XtremeStudios, Inc.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
    mermaid: {
      theme: { light: "neutral", dark: "forest" },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
