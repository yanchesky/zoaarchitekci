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
    .sort((a, b) => parseInt(b.order) - parseInt(a.order));
};

export const transformQueryEmployees = (graphQuery) => {
  const presentEmployees = graphQuery.employees.edges
    .map((employee) => {
      const {
        childMarkdownRemark: {
          frontmatter: { name, order, image, role },
        },
      } = employee.node;
      return { name, order, image, id: employee.id, role };
    })
    .sort((a, b) => a.order - b.order);

  console.log("graphQuery.markdownRemark:", graphQuery.markdownRemark);
  const pastEmployees = graphQuery.markdownRemark.frontmatter.names;

  return {
    presentEmployees,
    pastEmployees,
  };
};
