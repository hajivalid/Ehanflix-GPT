import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../utils/redux/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailerResults = useSelector((store) => store.mainTrailerVideo);

  const getMovieTrailer = async () => {
    if (movieId) {
      try {
        const data = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
          API_OPTIONS
        );
        const json = await data.json();
        const filterData = json?.results?.filter(
          (item) => item.type === "Trailer"
        );
        const trailer = filterData?.length ? filterData[0] : json.results[0];

        dispatch(addTrailerVideo(trailer));
      } catch (error) {
        console.error("Error fetching trailer details:", error);
      }
    }
  };

  useEffect(() => {
    !trailerResults && getMovieTrailer(); //Memoization
  }, []);
};
export default useTrailerVideo;
