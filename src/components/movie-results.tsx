import React from "react";
import * as Chakra from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

import { SingleMovie } from "./single-movie";
import { StyledText } from "./reusable-elements/styled-text";

interface movieObject {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

interface MovieResultsProps {
  movieData: Array<movieObject>;
  hasMore?: boolean;
  isLoading?: boolean;
  setPageNumber?: (value: number | ((prevQuery: number) => number)) => void;
}

export const MovieResults = ({
  movieData,
  hasMore,
  isLoading,
  setPageNumber,
}: MovieResultsProps): React.ReactElement => {
  const categories = ["movie", "series"];
  const [ref, inview] = useInView({
    threshold: 0,
  });
  if (inview && hasMore && !isLoading) {
    setPageNumber((prevPageNumber) => prevPageNumber + 1);
  }
  const movieCategory = movieData.filter((movie) => {
    return movie.Type === "movie";
  });
  const seriesCategory = movieData.filter((movie) => {
    return movie.Type === "series";
  });
  console.log(categories, movieCategory, seriesCategory);
  return (
    <Chakra.Box mb="20px" width="100%">
      {categories.map((category) => (
        <Chakra.Box
          key={category}
          marginLeft={{ base: "28px", sm: "77px" }}
          mt={{ base: "33px", sm: "48px" }}
        >
          <StyledText
            color="black"
            mb={{ base: "26px", sm: "18px" }}
            textAlign="left"
          >
            {category}
          </StyledText>
          <Chakra.Flex overflowX="auto">
            {category === "movie" &&
              movieCategory.map((eachMovie, index) => {
                if (movieCategory.length === index + 1) {
                  return (
                    <Chakra.Box key={eachMovie.imdbID} ref={ref}>
                      <SingleMovie title={eachMovie.Title} />
                    </Chakra.Box>
                  );
                } else {
                  return (
                    <Chakra.Box key={eachMovie.imdbID}>
                      <SingleMovie title={eachMovie.Title} />
                    </Chakra.Box>
                  );
                }
              })}
            {category === "series" &&
              seriesCategory.map((eachMovie, index) => {
                if (seriesCategory.length === index + 1) {
                  return (
                    <Chakra.Box key={eachMovie.imdbID} ref={ref}>
                      <SingleMovie title={eachMovie.Title} />
                    </Chakra.Box>
                  );
                } else {
                  return (
                    <Chakra.Box key={eachMovie.imdbID}>
                      <SingleMovie title={eachMovie.Title} />
                    </Chakra.Box>
                  );
                }
              })}
          </Chakra.Flex>
        </Chakra.Box>
      ))}
    </Chakra.Box>
  );
};
