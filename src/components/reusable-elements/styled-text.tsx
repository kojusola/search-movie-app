import React from "react";
import * as Chakra from "@chakra-ui/react";

export const StyledText = (props: Chakra.TextProps): React.ReactElement => (
  <Chakra.Text
    color="white"
    fontWeight="400"
    fontSize={{ base: "18px", sm: "24px" }}
    lineHeight={{ base: "23.44px", sm: "31.25px" }}
    textAlign={{ base: "center", lg: "left" }}
    {...props}
  ></Chakra.Text>
);
