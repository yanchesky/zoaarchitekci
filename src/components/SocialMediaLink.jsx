import styled from "styled-components";
import { media } from "../helpers";

const SocialMediaLink = styled.a`
  display: inline-flex;
  margin: 0.5rem 1rem;
  ${media.tablet`
    margin: 0.75rem 0
  `}

  > span {
    display: none;
    ${media[540]`
      display: block
    `};
  }

  &:before {
    content: url(${(props) => props.icon});
    position: relative;
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    display: inline-block;
    margin-right: 0.5rem;
    margin-top: 2px;
    ${(props) => props.baseline && "margin-top: 1px"};
  }
`;

export default SocialMediaLink;
