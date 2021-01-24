import React from "react";
import TransitionLink from "gatsby-plugin-transition-link";
import styled from "styled-components";
import { exit, entry } from "./transitionMethods";
import { useLocation } from "@reach/router";

const scrollToTop = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

const FadeInOutLinkWrapper = styled.li`
  color: #9ca3af;
  font-size: 1.125rem;
  margin: 0 0.5rem;

  &:hover {
    color: #6b7280;
    transition: none;
  }

  .main-section {
    transition: color 0.4s linear;
  }

  .welcome-slider {
    color: #1f2937;
  }

  .active-link {
    color: ${(props) => props.theme.colors["text-gray-800"]};
    &:hover {
      color: #1f2937;
    }
  }
`;

const StyledTransitionLink = styled(TransitionLink)`
  text-transform: uppercase;
  letter-spacing: 0.05em;
  cursor: pointer;
  color: ${(props) => props.theme.colors["gray-600"]};
  &:hover {
    text-decoration: underline;
  }
`;

export const FadeInOutLink = ({
  children,
  shouldScrollToTop,
  to,
  onlyOut,
  onClick,
}) => {
  return (
    <StyledTransitionLink
      as={shouldScrollToTop ? "span" : ""}
      activeClassName="active-link"
      to={shouldScrollToTop ? null : to}
      exit={!onlyOut && { length: 0.3, trigger: exit }}
      entry={{ delay: 0.3, length: 0.3, trigger: entry }}
      onClick={() => {
        shouldScrollToTop && scrollToTop();
        onClick && onClick();
      }}
    >
      {children}
    </StyledTransitionLink>
  );
};

const NavigationLink = ({ children, intl, ...rest }) => {
  const location = useLocation();

  const shouldScrollToTop = location.pathname === `${rest.to}`;

  return (
    <FadeInOutLinkWrapper>
      <FadeInOutLink shouldScrollToTop={shouldScrollToTop} {...rest}>
        {children}
      </FadeInOutLink>
    </FadeInOutLinkWrapper>
  );
};

export default NavigationLink;
