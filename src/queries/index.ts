import { graphql, useStaticQuery } from "gatsby";

export const queryWelcomeSliderImages = () =>
  useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { relativeDirectory: { eq: "images/welcomeSlider" } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            fluid(maxWidth: 1500, quality: 95) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);
