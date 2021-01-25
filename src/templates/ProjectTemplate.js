import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import IntersectingImage from "src/components/IntersectingImage";
import Footer from "../components/Footer";
import { media } from "src/helpers";
import { injectIntl } from "gatsby-plugin-intl";
import Img from "gatsby-image";

const Container = styled.main`
  margin: 1.5rem;
  ${media.mobile`
    margin: 3rem;
  `};
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  grid-row-gap: 0;
  margin: 5rem auto 0;
  max-width: ${(props) => props.theme.sizes.maxWidth};

  ${media.tablet`
    grid-template-columns: 1fr 1fr 1fr;
  `}
  ${media.bigTablet`
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 5rem;
    
  `};
`;

const DescirptionWrapper = styled.div`
  padding-bottom: 3rem;
  grid-column-start: 1;
  grid-column-end: 3;
  ${media.bigTablet`
    grid-column-end: 2;
  `};
`;

const ProjectTitle = styled.h1`
  margin: 0;
  font-size: 2rem;
  margin-bottom: 1rem;
  grid-column-start: 1;
  grid-column-end: 4;
  ${media.bigTablet`
    grid-column-end: 2;
  `};
`;

const ProjectContent = styled.div`
  color: ${(props) => props.theme.colors["gray-800"]};
`;

const DetailsGridContainer = styled.div`
  display: inline-grid;
  position: relative;
  grid-column-start: 1;
  grid-column-end: 1;
  grid-template-columns: 1fr;
  grid-auto-rows: min-content;
  grid-row-gap: 1.5rem;
  grid-column-gap: 1.5rem;
  padding-top: 1.25rem;
  ${media.mobile`
    grid-template-columns: 150px 1fr;
    grid-row-gap: 2.5rem;
  `};

  ${media.tablet`
    grid-template-columns: repeat(5, 1fr);
    grid-auto-flow: column;
    grid-column-end: 5;
  `};
  ${media.bigTablet`
    grid-auto-flow: row;
    grid-column-start: 2;
    grid-column-end: 3;
    grid-template-columns: 8rem 8rem;
  `};

  ${media.desktop`
    grid-template-columns: 8rem 8rem 1fr;
  `};
`;

const DetailElement = styled.div`
  position: relative;
  display: inline-block;
  color: ${(props) => props.theme.colors["gray-700"]};
  font-size: 1.125rem;
  ${media.tablet`
    font-size: 1rem;
  `};
  line-height: 1;

  cursor: default;
  &:after {
    content: "${(props) => props.title}";
    position: absolute;
    font-size: 0.625rem;
    text-transform: uppercase;
    color: #9ca3af;
    top: -1rem;
    left: 0;
  }
`;

const ProjectTemplate = ({ intl, data }) => {
  const {
    markdownRemark: { frontmatter, html },
  } = data;

  return (
    <Container>
      <Wrapper>
        <ProjectTitle>{frontmatter.title}</ProjectTitle>
        <DescirptionWrapper>
          <ProjectContent dangerouslySetInnerHTML={{ __html: html }} />
        </DescirptionWrapper>

        <DetailsGridContainer className="">
          <DetailElement title={intl.formatMessage({ id: "location" })}>
            {frontmatter.location}
          </DetailElement>
          <DetailElement title={intl.formatMessage({ id: "year" })}>
            {frontmatter.year}
          </DetailElement>
          {frontmatter.area && (
            <DetailElement title={intl.formatMessage({ id: "area" })}>
              {frontmatter.area}
            </DetailElement>
          )}
          {frontmatter.street && (
            <DetailElement
              title={intl.formatMessage({
                id: "street",
              })}
            >
              {frontmatter.street}
            </DetailElement>
          )}
          {frontmatter.avenue && (
            <DetailElement
              title={intl.formatMessage({
                id: "avenue",
              })}
            >
              {frontmatter.avenue}
            </DetailElement>
          )}
          <DetailElement title={intl.formatMessage({ id: "client" })}>
            {frontmatter.client}
          </DetailElement>
          <DetailElement title={intl.formatMessage({ id: "status" })}>
            {intl.formatMessage({
              id: `pages.projects.statuses.${frontmatter.status}`,
            })}
          </DetailElement>
        </DetailsGridContainer>
      </Wrapper>
      <div style={{ marginTop: "3rem" }}>
        {frontmatter.images?.map(({ childImageSharp }) => (
          <Img
            key={childImageSharp.id}
            fluid={childImageSharp.fluid}
            style={{
              height: "100%",
              width: "100%",
              maxHeight: "100vh",
              marginBottom: "6rem",
            }}
            imgStyle={{ objectFit: "contain" }}
            objectFit="cover"
          />
        ))}
      </div>
      <Footer />
    </Container>
  );
};

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        year
        client
        area
        status
        street
        avenue
        location
        images {
          childImageSharp {
            id
            fluid(maxWidth: 2000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default injectIntl(ProjectTemplate);
