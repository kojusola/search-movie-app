import React from "react";
import * as Chakra from "@chakra-ui/react";
import { PageProps } from "gatsby";

import { Seo } from "../components/seo";
import { Banner } from "../components/banner";
import { Search } from "../components/search";
import { MovieResults } from "../components/movie-results";

const Index = ({ location }: PageProps): React.ReactElement => {
  const [movieData, setMovieData] = React.useState([]);
  const [query, setQuery] = React.useState("batman");
  const [pageNumber, setPageNumber] = React.useState(1);
  const [hasMore, setHasMore] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  React.useEffect(() => {
    setMovieData([]);
  }, [query]);
  React.useEffect(() => {
    setIsLoading(true);
    const getMovieData = async () => {
      await fetch(
        `https://www.omdbapi.com/?apikey=ab27577e&s=${query}&page=${pageNumber}`
      )
        .then((success) => success.json())
        .then((movies) => {
          console.log(movies);
          if (movies?.Response === "True") {
            setMovieData((prevMovieData) => {
              return [...prevMovieData, ...movies?.Search];
            });
            console.log(movieData);
            if (movies.totalResults - pageNumber * 10 > 0) {
              setHasMore(true);
            }
          }
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getMovieData();
  }, [query, pageNumber]);

  return (
    <Chakra.Box width="100%">
      <Seo title="Movie Search App" location={location} />
      <Banner />
      <Search setPageNumber={setPageNumber} setQuery={setQuery} />
      <MovieResults
        hasMore={hasMore}
        isLoading={isLoading}
        movieData={movieData}
        setPageNumber={setPageNumber}
      />
    </Chakra.Box>
  );
};

export default Index;
