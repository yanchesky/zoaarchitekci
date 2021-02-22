import { graphql, useStaticQuery } from "gatsby";

export const queryEmployees = () => {
  return useStaticQuery(graphql`
    query {
      employees: allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { regex: "/employees/" }
          name: { ne: "PAST_EMPLOYEES" }
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
                    fluid(maxWidth: 434, quality: 85) {
                      ...GatsbyImageSharpFluid_withWebp
                    }
                  }
                }
              }
            }
          }
        }
      }
      pastEmployees: allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { regex: "/past_employees/" }
        }
      ) {
        edges {
          node {
            id
            childMarkdownRemark {
              frontmatter {
                names
              }
            }
          }
        }
      }
    }
  `);
};
