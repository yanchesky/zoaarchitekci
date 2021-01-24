export const transformQueryProjects = (graphQuery, filterString = "") => () => {
  return graphQuery.projects.edges
    .map((project) => {
      const {
        id,
        relativeDirectory,
        childMarkdownRemark: {
          html,
          frontmatter: {
            id: order,
            tags,
            thumbnail,
            title,
            year,
            slug,
            language,
          },
        },
      } = project.node;
      return {
        id,
        order,
        relativeDirectory,
        html,
        tags,
        slug,
        language,
        thumbnail,
        title,
        year,
      };
    })
    .filter(
      (thumbnail) =>
        thumbnail.language === filterString ||
        (thumbnail.language === null && filterString === "pl")
    )
    .sort((a, b) => parseInt(a.order) - parseInt(b.order));
};

export const transformQueryEmployees = (graphQuery) => {
  return graphQuery.employees.edges.map((employee) => {
    const {
      childMarkdownRemark: {
        frontmatter: { name, order, image, role },
      },
    } = employee.node;
    return { name, order, image, id: employee.id, role };
  });
};
