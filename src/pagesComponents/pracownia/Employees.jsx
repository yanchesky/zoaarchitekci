import React from "react";
import Img from "gatsby-image";
import styled from "styled-components";
import { media, transformQueryEmployees } from "../../helpers";
import { queryEmployees } from "../../queries/employees";
import { useIntl } from "gatsby-plugin-intl";

const StyledHeading = styled.h1`
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  margin-top: 4rem;
`;

const AboutUsContent = styled.div`
  margin: 0;
  grid-column-start: 1;
  grid-column-end: 7;
  text-align: left;
  max-width: 29rem;
  ${media.tablet`
    grid-column-start: 2;
    grid-column-end: 6;
  `};

  ${media.desktop`
    grid-column-start: 3;
  `};
`;

const OnlyMobile = styled.div`
  display: block;
  margin-top: 0.25rem;

  ${media.desktop`
    //display: none;
  `};
`;

const EmployeePhotoWrapper = styled.div`
  position: relative;
`;

const Name = styled.p`
  font-size: 1rem;
  ${media.mobile`
    font-size: 1.125rem;
  `};
`;

const Role = styled.p`
  display: inline-block;
  font-size: 0.675rem;

  ${media.mobile`
    font-size: 0.75rem;
  `};
  text-transform: uppercase;
  color: ${(props) => props.theme.colors["gray-500"]};
`;

const EmployeesWrapper = styled.div`
  position: relative;
  grid-column-start: 1;
  grid-column-end: 7;
  grid-column-gap: 2rem;
  grid-row-gap: 6rem;
  display: grid;
  grid-template-columns: 1fr;
  ${media.tablet`
    grid-template-columns: 1fr 1fr;
  `};
  ${media.desktop`
    grid-template-columns: 1fr 1fr 1fr;
  `};
`;

const Employees = () => {
  const t = useIntl();
  const employees = queryEmployees();
  const transformedEmployees = transformQueryEmployees(employees);

  return (
    <>
      <AboutUsContent>
        <StyledHeading>
          {t.formatMessage({ id: "pages.workshop.team" })}
        </StyledHeading>
      </AboutUsContent>
      <EmployeesWrapper>
        {transformedEmployees.map((employee, index, arr) => {
          const isEven = index % 2 === 0;
          return (
            <>
              {/*<EmployeeNameWrapper isEven={isEven}>*/}
              {/*  <Name isEven={isEven}>{employee.name}</Name>*/}
              {/*  <Role isEven={isEven}>Role</Role>*/}
              {/*</EmployeeNameWrapper>*/}

              <EmployeePhotoWrapper isEven={isEven} key={employee.id}>
                <Img
                  fluid={employee.image?.childImageSharp?.fluid}
                  style={{ maxWidth: "100%" }}
                  objectFit="cover"
                />

                <OnlyMobile>
                  <Name isEven={isEven}>{employee.name}</Name>
                  <Role isEven={isEven}>
                    {t.formatMessage({
                      id: `pages.workshop.employees.role.${employee.role}`,
                    })}
                  </Role>
                  {arr.length === index + 1 && <div id="our-clients-section" />}
                </OnlyMobile>
              </EmployeePhotoWrapper>
            </>
          );
        })}
      </EmployeesWrapper>
    </>
  );
};

export default Employees;
