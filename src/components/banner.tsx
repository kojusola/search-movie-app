import React from "react";
import { StyledFlex } from "./reusable-elements/styled-flex";
import { StyledText } from "./reusable-elements/styled-text";

export const Banner: React.FC = () => (
  <StyledFlex
    backgroundImage="url('https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
    bgPosition="center"
    bgRepeat="no-repeat"
    backgroundSize="cover"
    height={{ base: "257px", sm: "550px" }}
  >
    <StyledFlex
      height={{ base: "72px", sm: "282px" }}
      width={{ base: "273px", sm: "490px" }}
    >
      <StyledText
        fontSize={{ base: "28px", sm: "72px" }}
        lineHeight={{ base: "36.46px", sm: "93.74px" }}
        fontWeight="700"
        marginLeft={{ base: "0", lg: "77px" }}
        marginTop={{ base: "0", lg: "109px" }}
      >
        Watch something incredible
      </StyledText>
    </StyledFlex>
  </StyledFlex>
);
