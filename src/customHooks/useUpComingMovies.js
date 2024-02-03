import { useEffect } from "react";
import { API_OPTIONS, UP_COMING_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addUpcomingMovies } from "../utils/redux/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchUpComingMovies();
  }, []);

  //Fetching Top rated Movies from TMDB and updating list into store
  const fetchUpComingMovies = async () => {
    const data = await fetch(UP_COMING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};
export default useUpComingMovies;
