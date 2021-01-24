import React from "react";
import styled from "styled-components";
import { media } from "src/helpers";
import { Link } from "gatsby";
import { useLocation } from "@reach/router";

const Container = styled.div`
  position: fixed;
  width: 100%;
  z-index: 2;
  top: 85px;
  left: 0;
`;

const Wrapper = styled.form`
  position: relative;
  margin: 0 auto;
  text-transform: uppercase;

  display: flex;
  justify-content: flex-end;
  background: white;
  max-width: ${(props) => props.theme.sizes.maxWidth};
  width: calc(100% - 3rem);
  ${media.mobile`
    width: calc(100% - 6rem);
  `}
`;

const SubLink = styled(Link)`
  position: relative;
  margin-left: 1rem;
  font-size: 0.75rem;
  letter-spacing: 0.5px;
  padding: 0.5rem 0;
  color: ${(props) => props.theme.colors["gray-400"]};
  text-shadow: 0.5px 0 0 ${(props) => props.theme.colors["gray-400"]};

  ${media.iphone`
    font-size: 0.875rem;
  `};
`;

const SubPages = () => {
  const location = useLocation();

  return (
    <Container>
      <Wrapper>
        <SubLink className={location.hash === "" ? "checked" : ""} to="#">
          O&nbsp;nas
        </SubLink>
        <SubLink
          className={location.hash === "#employees-section" ? "checked" : ""}
          to="#employees-section"
        >
          Zespół
        </SubLink>
        <SubLink
          className={location.hash === "#our-clients-section" ? "checked" : ""}
          to="#our-clients-section"
        >
          Klienci
        </SubLink>
        <SubLink
          className={location.hash === "#prizes-section" ? "checked" : ""}
          to="#prizes-section"
        >
          Nagrody
        </SubLink>
      </Wrapper>
    </Container>
  );
};

export default SubPages;
