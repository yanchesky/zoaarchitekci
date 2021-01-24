exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const ProjectTemplate = require.resolve(`./src/templates/ProjectTemplate.js`);
  const result = await graphql(`
    {
      projects: allFile(
        filter: {
          relativeDirectory: { regex: "/projects/" }
          extension: { eq: "md" }
        }
      ) {
        edges {
          node {
            id
            name
            relativeDirectory
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
              }
            }
          }
        }
        group(field: relativeDirectory) {
          edges {
            node {
              childMarkdownRemark {
                id
                frontmatter {
                  slug
                  language
                }
              }
              relativeDirectory
            }
          }
        }
      }
    }
  `);
  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  const languageLinks = result.data.projects.group.reduce((prev, curr) => {
    let parentKey = null;
    const value = curr.edges.reduce((innerPrev, innerCurr) => {
      const val = innerCurr.node.childMarkdownRemark.frontmatter.slug;
      const key =
        innerCurr.node.childMarkdownRemark.frontmatter.language || "default";
      parentKey = innerCurr.node.relativeDirectory;
      return {
        ...innerPrev,
        [key]: val,
      };
    }, {});
    const key = parentKey;
    return {
      ...prev,
      [key]: value,
    };
  }, {});

  result.data.projects.edges.forEach(({ node }) => {
    console.log("node:", node);
    createPage({
      path: node.childMarkdownRemark.frontmatter.slug,
      component: ProjectTemplate,
      context: {
        slug: node.childMarkdownRemark.frontmatter.slug,
        testData: languageLinks[node.relativeDirectory],
      },
    });
  });
};
