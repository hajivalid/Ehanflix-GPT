import { useEffect } from "react";
import { API_OPTIONS, NOW_PLAYING_API } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/movieSlice";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    fetchNowPlayingMovies();
  }, []);

  //Fetching Now Playing Movies from TMDB and updating list into store
  const fetchNowPlayingMovies = async () => {
    const data = await fetch(NOW_PLAYING_API, API_OPTIONS);
    const json = await data.json();
    //console.log(json.results);
    dispatch(addNowPlayingMovies(json.results));
  };
};
export default useNowPlayingMovies;
