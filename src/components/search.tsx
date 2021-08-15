import React from "react";
import * as Chakra from "@chakra-ui/react";

import { StyledText } from "./reusable-elements/styled-text";

interface SearchProps {
  setQuery?: (value: string | ((prevQuery: string) => string)) => void;
  setPageNumber?: (value: number | ((prevQuery: number) => number)) => void;
}

export const Search = ({
  setQuery,
  setPageNumber,
}: SearchProps): React.ReactElement => {
  const handleKeyDown = (event) => {
    console.log(event.key);
    if (event.key === "Enter") {
      event.preventDefault();
      console.log(event.target.value);
      setQuery(event.target.value);
      setPageNumber(1);
    }
  };
  return (
    <Chakra.Box
      marginTop={{ base: "56px", sm: "63px" }}
      px={{ base: "28px", sm: "77px" }}
    >
      <StyledText
        color="black"
        mb="4px"
        fontSize={{ base: "16px", sm: "24px" }}
        lineHeight={{ base: "20.83px", sm: "31.25px" }}
        textAlign="left"
      >
        Search
      </StyledText>
      <Chakra.Input
        borderRadius="0"
        height={{ base: "34px", sm: "54px" }}
        border="1px"
        borderColor="black"
        boxShadow="0"
        onKeyDown={handleKeyDown}
      ></Chakra.Input>
    </Chakra.Box>
  );
};
