import axios from "axios";

const BASE_URL: string = "http://localhost:8000";

export const getAllMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/getAll`);
  return data;
};

export const getPopularMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/popular`);
  return data;
};

export const getTopThreeMovies = async () => {
  const { data } = await axios.get(`${BASE_URL}/topThree`);
  return data;
};

export const getSingleMovie = async ({ queryKey }: any) => {
  const [
    _key,
    {
      selectedMovie: { title, url },
    },
  ] = queryKey;

  const { data } = await axios.get(`${BASE_URL}/one`, {
    params: {
      title: title,
      url: url,
    },
  });
  return data;
};
