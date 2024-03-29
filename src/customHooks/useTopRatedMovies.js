import { useEffect } from "react";
import { API_OPTIONS, TOP_RATED_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies } from "../utils/redux/movieSlice";

const useTopRatedMovies = () => {
  const dispatch = useDispatch();
  const topRatedResults = useSelector((store) => store.topRatedMovies);

  useEffect(() => {
    !topRatedResults && fetchTopRatedMovies(); //Memoization
  }, []);

  //Fetching Top rated Movies from TMDB and updating list into store
  const fetchTopRatedMovies = async () => {
    try{
      const data = await fetch(TOP_RATED_API, API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    }catch (error) {
      console.error("Error fetching Top rated Movies:", error);
    }
  };
};
export default useTopRatedMovies;
