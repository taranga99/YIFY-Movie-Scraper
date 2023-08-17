import { useState } from "react";
import { useQuery } from "react-query";
import { getSingleMovie } from "../../hooks";

const MovieCard = ({ data }: any) => {
  const { title, rating, url } = data;
  const [selectedMovie, setSelectedMovie] = useState({});
  const [isMovieDownloading, setIsMovieDownloading] = useState(false);
  const { isLoading: isDownloadingOneMovie } = useQuery({
    queryKey: [
      "get-one-movie",
      {
        selectedMovie,
      },
    ],
    queryFn: getSingleMovie,
    onSuccess: () => {
      setIsMovieDownloading(false);
    },
    enabled: isMovieDownloading,
  });

  return (
    <div
      key={title}
      onClick={() => {
        setIsMovieDownloading(true);
        setSelectedMovie({
          title,
          rating,
          url,
        });
      }}
      className="flex items-center justify-between border rounded shadow-md bg-[#8FCA7A] w-[70%] px-4 py-2"
    >
      <div>
        <p className="font-bold">{title}</p>
        <p>Rating: {rating}</p>
      </div>
      <div className="px-3 py-1 cursor-pointer border bg-[] shadow-md rounded-md font-bold text-[#1d1d1d]">
        {isDownloadingOneMovie ? <p>Opening Torrent...</p> : <p>Download</p>}
      </div>
    </div>
  );
};

export default MovieCard;
