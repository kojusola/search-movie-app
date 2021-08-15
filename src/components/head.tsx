import React from "react";
import * as Chakra from "@chakra-ui/react";

import { LogoSvg } from "./logo-svg";
import { StyledFlex } from "./reusable-elements/styled-flex";

export const Header: React.FC = () => (
  <Chakra.Box bg="header" width="100%">
    <StyledFlex
      alignItems="center"
      width="100%"
      height={{ base: "67px", sm: "140px" }}
      paddingLeft={{ base: "0", lg: "77px" }}
      textAlign="center"
      color="white"
      py="20px"
    >
      <LogoSvg />
    </StyledFlex>
  </Chakra.Box>
);
