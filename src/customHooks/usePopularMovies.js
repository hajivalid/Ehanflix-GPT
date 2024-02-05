import { useEffect } from "react";
import { API_OPTIONS, POPULAR_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies } from "../utils/redux/movieSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const popularResults = useSelector((store) => store.popularMovies);

  useEffect(() => {
    !popularResults && fetchPopularMovies(); //Memoization
  }, []);

  //Fetching Popular Movies from TMDB and updating list into store
  const fetchPopularMovies = async () => {
    const data = await fetch(POPULAR_API, API_OPTIONS);
    const json = await data.json();
    dispatch(addPopularMovies(json.results));
  };
};
export default usePopularMovies;
