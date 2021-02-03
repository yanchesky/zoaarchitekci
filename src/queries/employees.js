import { graphql, useStaticQuery } from "gatsby";

export const queryEmployees = () => {
  return useStaticQuery(graphql`
    query {
      employees: allFile(
        filter: {
          extension: { eq: "md" }
          relativeDirectory: { regex: "/employees/" }
          id: { ne: "ec85422a-8659-58ce-9ac6-8a682d222817" }
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
                      ...GatsbyImageSharpFluid
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
