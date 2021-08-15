import React from "react";
import * as Chakra from "@chakra-ui/react";
import { PageProps } from "gatsby";
import FadeTransition from "../components/transitions/fade-transition";
import "keen-slider/keen-slider.min.css";

import { Header } from "../components/head";

const Layout = ({ children, location }: PageProps): React.ReactElement => {
  global.baseUrl = "/.netlify/functions/base";

  return (
    <>
      <Chakra.Flex minH="100vh" flexDirection="column">
        <Header />
        <FadeTransition shouldChange={location.pathname}>
          {children}
        </FadeTransition>
      </Chakra.Flex>
    </>
  );
};

export default Layout;
