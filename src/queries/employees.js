import { graphql, useStaticQuery } from "gatsby";

export const queryEmployees = () => {
  return useStaticQuery(graphql`
    query {
      employees: allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { regex: "/employees/" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                order
                name
                role
                image {
                  id
                  childImageSharp {
                    fluid(maxWidth: 1000, quality: 100) {
                      ...GatsbyImageSharpFluid
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