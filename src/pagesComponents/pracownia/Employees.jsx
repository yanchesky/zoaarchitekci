import React from "react";
import styled from "styled-components";
import { media, transformQueryEmployees, divideArray } from "src/helpers";
import { queryEmployees } from "src/queries/employees";
import { useIntl } from "gatsby-plugin-intl";
import NiceLoadingImage from "src/components/NiceLoadingImage";

const StyledHeading = styled.h1`
  white-space: nowrap;
  font-size: 1.5rem;
  text-transform: uppercase;
  font-weight: normal;
  grid-column-start: 1;
  grid-column-end: 7;
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

const FirstDummy = styled.div`
  display: none;
  ${media.desktop`
    display: block;
  `};
`;
const SecondDummy = styled.div`
  display: none;
  ${media.tablet`
    display: block;
  `};
`;

const Employees = () => {
  const t = useIntl();
  const employees = queryEmployees();
  const { presentEmployees, pastEmployees } = transformQueryEmployees(
    employees
  );

  const sortedPastEmployees = pastEmployees.sort((a, b) => a.localeCompare(b));
  const dividedEmployees = divideArray(sortedPastEmployees, 3);
  return (
    <>
      <StyledHeading>
        {t.formatMessage({ id: "pages.workshop.team" })}
      </StyledHeading>

      <EmployeesWrapper>
        {presentEmployees.map((employee, index) => {
          const isEven = index % 2 === 0;
          return (
            <>
              <EmployeePhotoWrapper isEven={isEven} key={employee.id}>
                <NiceLoadingImage
                  fluid={employee.image?.childImageSharp?.fluid}
                  style={{ maxWidth: "100%" }}
                  objectFit="cover"
                  alt={employee.name}
                />

                <div style={{ marginTop: "0.25rem" }}>
                  <Name isEven={isEven}>{employee.name}</Name>
                  <Role isEven={isEven}>
                    {t.formatMessage({
                      id: `pages.workshop.employees.role.${employee.role}`,
                    })}
                  </Role>
                </div>
              </EmployeePhotoWrapper>
              {index === 1 && <FirstDummy />}
              {index === 2 && (
                <>
                  <FirstDummy /> <SecondDummy />
                </>
              )}
            </>
          );
        })}
      </EmployeesWrapper>
      <StyledHeading>
        {t.formatMessage({ id: "pages.workshop.workedWithUs" })}
      </StyledHeading>
      <EmployeesWrapper>
        {dividedEmployees.map((employeesColumn, index, arr) => (
          <div key={index}>
            {employeesColumn.map((employee, index) => (
              <p key={index}>{employee}</p>
            ))}
            {index === arr.length - 1 && (
              <div
                style={{ position: "relative", top: "-4rem" }}
                id="prizes-section"
              />
            )}
          </div>
        ))}
      </EmployeesWrapper>
    </>
  );
};

export default Employees;
