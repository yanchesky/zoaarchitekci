## 💡 About

This is project ZOA ARCHITEKCI website made in [Gatsby](https://www.gatsbyjs.com). It's focused on the best possible performance with the highest quality of presented images and renders.

Power of this website lies in images thanks to [gatsby-image](https://www.gatsbyjs.com/plugins/gatsby-image/).
Images are initially resized to 20 x 15 px, converted by base64 at build time and placed in HTML. When user enters viewport, webp images are loaded and fallback to jpg if not supported.
Site is styled using [styled-components](https://styled-components.com)

Sites other features are:
 - Multilingual by [gatsby-plugin-intl](https://www.gatsbyjs.com/plugins/gatsby-plugin-intl/),
 - SEO optimized by [gatsby-plugin-react-helmet](https://www.gatsbyjs.com/plugins/gatsby-plugin-react-helmet/)
 - Sitemap by [gatsby-plugin-sitemap](https://www.gatsbyjs.com/plugins/gatsby-plugin-sitemap/)

In projects thumbnails are animated using [react-flip-toolkit](https://github.com/aholachek/react-flip-toolkit) on category select.

## 🗄 Content

Data for page content is fetched on build time from `content` directory.
It includes:
 - Employees with images 
 - Start page slides 
 - Past employees 
 - Projects 

In every project directory there is `template.md` file with projects details. 
For language alternate versions there are `template.en.md` and `template.fr.md` 
for english in french version respectively. Images are stored in `images` directory.

## 🧑🏼‍💻 Development

1. **Requirements**
    - Node 12+
    - Gatsby CLI
2. **Scripts**

| Command                    | Description                              |
| ------------------ | ----- |
| `gatsby develop`   | Run development server with live reloading   |
| `gatsby build`     | Creates optimized production-ready application files   |
| `gatsby serve`     | Serve built page     |
| `gatsby clean`     | Clears `.cache` and `public` directories    |

## 🌍 Live

https://zoaarchitekci.pl



