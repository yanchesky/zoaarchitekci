import { graphql, useStaticQuery } from "gatsby";

export const queryProjects = () => {
  return useStaticQuery(graphql`
    query {
      projects: allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { regex: "/projects/" }
        }
      ) {
        edges {
          node {
            id
            name
            relativeDirectory
            childMarkdownRemark {
              rawMarkdownBody
              html
              frontmatter {
                id
                tags
                title
                slug
                year
                language
                street
                thumbnail {
                  id
                  childImageSharp {
                    fluid(maxWidth: 450, quality: 85) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  `);
};
