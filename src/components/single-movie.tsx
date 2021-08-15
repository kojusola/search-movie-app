import React from "react";

import { StyledFlex } from "./reusable-elements/styled-flex";
import { StyledText } from "./reusable-elements/styled-text";

interface SingleMovieProps {
  title: string;
}

export const SingleMovie = ({
  title,
}: SingleMovieProps): React.ReactElement => (
  <StyledFlex
    alignItems="center"
    justifyContent="center"
    height={{ base: "200px", sm: "300px" }}
    width={{ base: "200px", sm: "300px" }}
    padding="10px"
    bgColor="black"
    marginRight="13px"
    borderRadius="12px"
  >
    <StyledText
      fontSize={{ base: "18px", sm: "24px" }}
      lineHeight={{ base: "23.44px", sm: "31.25px" }}
      textAlign="center"
    >
      {title}
    </StyledText>
  </StyledFlex>
);
