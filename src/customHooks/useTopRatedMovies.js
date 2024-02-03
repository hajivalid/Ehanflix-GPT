import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchTopRatedMovies();
  }, []);

  //Fetching Top rated Movies from TMDB and updating list into store
  const fetchTopRatedMovies = async () => {
    const data = await fetch(TOP_RATED_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addTopRatedMovies(json.results));
  };
};
export default useTopRatedMovies;
