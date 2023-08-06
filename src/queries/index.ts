import { graphql, useStaticQuery } from "gatsby";

export const queryWelcomeSliderImages = () =>
  useStaticQuery(graphql`
    query {
      backgrounds: allFile(
        filter: { relativeDirectory: { eq: "images/welcomeSlider" } }
      ) {
        nodes {
          relativePath
          id
          name
          ext
          childImageSharp {
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  `);
