import React from "react";
import * as Chakra from "@chakra-ui/react";

export const StyledFlex = (props: Chakra.FlexProps): React.ReactElement => (
  <Chakra.Flex
    alignItems={{ base: "center", lg: "flex-start" }}
    justifyContent={{ base: "center", lg: "flex-start" }}
    {...props}
  ></Chakra.Flex>
);
