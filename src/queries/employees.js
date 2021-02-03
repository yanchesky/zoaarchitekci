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
      markdownRemark(id: { eq: "ff46738e-fcaf-5135-921f-cc346dc5e5c7" }) {
        id
        frontmatter {
          names
        }
      }
    }
  `);
};
