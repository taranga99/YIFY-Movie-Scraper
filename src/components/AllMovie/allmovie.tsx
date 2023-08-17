import { useState } from "react";
import { useQuery } from "react-query";
import { getAllMovies, getPopularMovies, getTopThreeMovies } from "../../hooks";
import { Button, MovieCard } from "..";
import { IMOVIEDATA } from "../../types";

const AllMovie = () => {
  const [isPopularMoviesOpeningTorrent, setisPopularMoviesOpeningTorrent] =
    useState(false);
  const [isTopThreeMoviesOpeningTorrent, setisTopThreeMoviesOpeningTorrent] =
    useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["get-all-movies"],
    queryFn: getAllMovies,
  });

  const { isLoading: isPopularMoviesDownloading } = useQuery({
    queryKey: ["get-all-popular-movies"],
    queryFn: getPopularMovies,
    enabled: isPopularMoviesOpeningTorrent,
    onSuccess: () => {
      setisPopularMoviesOpeningTorrent(false);
    },
    onError: () => {
      setisPopularMoviesOpeningTorrent(false);
    },
  });

  const { isLoading: isTopThreeMoviesDownloading } = useQuery({
    queryKey: ["get-top-three-movies"],
    queryFn: getTopThreeMovies,
    enabled: isTopThreeMoviesOpeningTorrent,
    onSuccess: () => {
      setisTopThreeMoviesOpeningTorrent(false);
    },
    onError: () => {
      setisTopThreeMoviesOpeningTorrent(false);
    },
  });

  return (
    <div className="px-10 space-y-5">
      <p className="text-[#6ac045] font-bold text-3xl text-center">
        YIFY Movie Scraper
      </p>
      <div className="flex space-x-5 justify-center">
        <Button
          title="Download Popular Movies"
          isLoading={isPopularMoviesDownloading}
          onClick={() => {
            setisPopularMoviesOpeningTorrent(true);
          }}
        />
        <Button
          title="Download Top Three Movies"
          isLoading={isTopThreeMoviesDownloading}
          onClick={() => {
            setisTopThreeMoviesOpeningTorrent(true);
          }}
        />
      </div>
      <p className="font-bold text-[#6ac045] text-lg">List of movies :</p>
      <div>
        {isLoading && (
          <p className="text-[#6ac045] text-center text-lg font-semibold">
            loading movies...
          </p>
        )}
      </div>
      <div>
        {isError && (
          <p className="text-[#6ac045] text-center text-lg font-semibold">
            There was an error while loading movies
          </p>
        )}
      </div>

      <div className="space-y-5 mb-4">
        {!isLoading && !isError ? (
          data?.length ? (
            data.map((item: IMOVIEDATA) => <MovieCard data={item} />)
          ) : (
            <div>No movies found...</div>
          )
        ) : null}
      </div>
    </div>
  );
};

export default AllMovie;
