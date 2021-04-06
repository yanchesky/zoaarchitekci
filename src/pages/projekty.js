import React, { useState, useMemo } from "react";
import { useIntl } from "gatsby-plugin-intl";

import ProjectsLayout from "src/layouts/ProjectsLayout";

import ProjectsGridItem from "src/pagesComponents/projekty/ProjectsGridItem";
import ProjectsGridWrapper from "src/pagesComponents/projekty/ProjectsGridWrapper";
import ProjectFilterComponents from "src/pagesComponents/projekty/ProjectsFilterComponent";

import { queryProjects } from "src/queries/projects";
import { transformQueryProjects, flattenTags } from "src/helpers";
import SEO from "../components/SEO";

const Projects = () => {
  const intl = useIntl();
  const query = queryProjects();
  const [filter, setFilter] = useState("");

  const projects = useMemo(transformQueryProjects(query, intl.locale), []);
  const flattedTags = useMemo(flattenTags(projects), []);

  const filteredProjects =
    filter === ""
      ? projects
      : projects.filter((thumbnail) => thumbnail.tags.includes(filter));

  return (
    <ProjectsLayout tags={flattedTags} onFilterClick={setFilter}>
      <SEO
        title={intl.formatMessage({ id: "projects" })}
        description={
          "ZOA architekci is a Warsaw-based office for modern architecture and urban planning."
        }
      />
      <ProjectFilterComponents onClick={setFilter} tags={flattedTags} />
      <ProjectsGridWrapper flipperKey={filter}>
        {filteredProjects.map((projectThumbnail) => (
          <ProjectsGridItem
            key={projectThumbnail.id}
            project={projectThumbnail}
            locale={intl.locale}
          />
        ))}
      </ProjectsGridWrapper>
    </ProjectsLayout>
  );
};

export default Projects;
