import React from "react";

import AboutUsLayout from "src/layouts/AboutUsLayout";

import AboutUsSection from "src/pagesComponents/pracownia/AboutUs";
import Employees from "src/pagesComponents/pracownia/Employees";
import OurClients from "src/pagesComponents/pracownia/OurClients";
import Prizes from "src/pagesComponents/pracownia/Prizes";

const AboutUs = () => {
  return (
    <AboutUsLayout>
      <AboutUsSection />
      <Employees />
      <OurClients />
      <Prizes />
    </AboutUsLayout>
  );
};

export default AboutUs;
