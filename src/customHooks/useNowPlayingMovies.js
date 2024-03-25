import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingResults = useSelector((store) => store.nowPlayingMovies);

  useEffect(() => {
    !nowPlayingResults && fetchNowPlayingMovies(); // Memoization
  }, []);

  //Fetching Now Playing Movies from TMDB and updating list into store
  const fetchNowPlayingMovies = async () => {
    //console.log(NOW_PLAYING_API);
    //console.log(API_OPTIONS);
    try {
      const data = await fetch(NOW_PLAYING_API, API_OPTIONS);

      const json = await data.json();

      dispatch(addNowPlayingMovies(json.results));
    } catch (error) {
      console.error("Error fetching Now Playing Movies:", error);
    }
  };
};
export default useNowPlayingMovies;
