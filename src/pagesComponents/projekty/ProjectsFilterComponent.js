import React from "react";
import styled from "styled-components";
import { media } from "src/helpers";
import { useIntl } from "gatsby-plugin-intl";

const Wrapper = styled.form`
  margin: 4rem 1.5rem 1rem;
  ${media.mobile`
    margin: 4rem 0 1rem;
  `};
  padding: 0;
`;

const TagTitle = styled.label`
  position: relative;
  margin: 0.125rem 1rem 0.125rem 0.25rem;
  display: inline-block;
  cursor: pointer;
  text-transform: uppercase;

  //text-shadow: 0.5px 0 0 ${(props) => props.theme.colors["gray-500"]};
  font-size: 0.875rem;
  color: ${(props) => props.theme.colors["gray-500"]};

  &:after {
    content: "";
    position: absolute;
    width: 100%;
    display: block;
    height: 1px;
    background: rgb(107, 114, 128);
    transform: scaleX(0);
    transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
  }
`;

const Input = styled.input`
  display: none;

  &:checked + ${TagTitle} {
    &:after {
      transform: scaleX(1.05);
      transition: transform 0.5s cubic-bezier(0.25, 1, 0.5, 1);
    }
  }
`;

const ProjectFilterComponents = ({ tags, onClick }) => {
  const t = useIntl();
  if (!tags) return null;
  return (
    <Wrapper>
      <div style={{ maxWidth: "1366px", margin: "0 auto" }}>
        {[`${t.formatMessage({ id: "everything" })}`, ...tags].map(
          (tag, index) => {
            const name = `tag-${tag}`;
            return (
              <React.Fragment key={`tag-filter-element-${index}`}>
                <Input
                  defaultChecked={index === 0}
                  type="radio"
                  name="tag-element"
                  id={name}
                  value={tag}
                />
                <TagTitle
                  className="text-gray-500"
                  onClick={() =>
                    onClick(
                      tag === `${t.formatMessage({ id: "everything" })}`
                        ? ""
                        : tag
                    )
                  }
                  htmlFor={name}
                >
                  {tag}
                </TagTitle>
              </React.Fragment>
            );
          }
        )}
      </div>
    </Wrapper>
  );
};

export default ProjectFilterComponents;
