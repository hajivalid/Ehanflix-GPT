import { useEffect } from "react";
import { API_OPTIONS, UP_COMING_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies } from "../utils/redux/movieSlice";

const useUpComingMovies = () => {
  const dispatch = useDispatch();
  const upComingResults = useSelector((store) => store.upComingMovies);

  useEffect(() => {
    !upComingResults && fetchUpComingMovies(); // Memoization
  }, []);

  //Fetching Top rated Movies from TMDB and updating list into store
  const fetchUpComingMovies = async () => {
    const data = await fetch(UP_COMING_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addUpcomingMovies(json.results));
  };
};
export default useUpComingMovies;
