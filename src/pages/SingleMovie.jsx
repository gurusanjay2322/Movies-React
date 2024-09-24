import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ReviewCard from "../components/ReviewCard";

function SingleMovie() {
  const { imdbId } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [reviewBody, setReviewBody] = useState("");
  const [submittingReview, setSubmittingReview] = useState(false);
  const playerRef = useRef(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await axios.get(
          `https://movies-spring-ewi3.onrender.com/api/v1/movies/${imdbId}`
        );
        setMovie(response.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchMovie();
  }, [imdbId]);

  const getYouTubeVideoId = (url) => {
    const urlObj = new URL(url);
    return urlObj.searchParams.get("v");
  };

  const loadYouTubePlayer = (videoId) => {
    new window.YT.Player(playerRef.current, {
      height: "390",
      width: "640",
      videoId: videoId,
      playerVars: {
        playsinline: 1,
      },
      events: {
        onReady: (event) => event.target.playVideo(),
        onStateChange: (event) => {
          if (event.data === window.YT.PlayerState.PLAYING) {
            console.log("Video is playing");
          }
        },
      },
    });
  };

  useEffect(() => {
    if (movie && movie.trailerLink) {
      const videoId = getYouTubeVideoId(movie.trailerLink);

      const onYouTubeIframeAPIReady = () => {
        loadYouTubePlayer(videoId);
      };

      const loadYouTubeScript = () => {
        if (!window.YT) {
          const tag = document.createElement("script");
          tag.src = "https://www.youtube.com/iframe_api";
          const firstScriptTag = document.getElementsByTagName("script")[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

          // Attach the global callback to load the player once the script is ready
          window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
        } else {
          // If the YouTube API script is already loaded, just initialize the player
          loadYouTubePlayer(videoId);
        }
      };

      loadYouTubeScript();
    }
  }, [movie]);

  const handleAddReview = async () => {
    if (!reviewBody.trim()) {
      return;
    }
    setSubmittingReview(true);
    try {
      await axios.post("https://movies-spring-ewi3.onrender.com/api/v1/movies/reviews", {
        reviewBody: reviewBody,
        imdbId: imdbId,
      });
      setReviewBody("");
      setSubmittingReview(false);
      const response = await axios.get(
        `https://movies-spring-ewi3.onrender.com/api/v1/movies/${imdbId}`
      );
      setMovie(response.data);
    } catch (err) {
      console.error("Failed to submit review:", err);
      setSubmittingReview(false);
    }
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-6 text-white">
      {movie && (
        <>
          <div className="flex flex-col md:flex-row justify-between items-start p-6 rounded-lg shadow-lg">
            <div className="w-full md:w-1/3 flex justify-center mb-6 md:mb-0">
              <img
                src={movie.poster}
                alt={movie.title}
                className="rounded-lg h-[650px] w-auto shadow-lg"
              />
            </div>
            <div className="w-full md:w-2/3 md:pl-8 text-left">
              <h1 className="text-7xl font-Bebas text-[#FF4191] w-fit p-2 bg-[#FFF078]">
                {movie.title}
              </h1>
              <div className="text-xl m-4">
                <span className="font-semibold">Genres: </span>
                <span className="italic">{movie.genres.join(", ")}</span>
              </div>
              <div className="text-xl m-4">
                <span className="font-semibold">Release Date: </span>
                <span>{new Date(movie.releaseDate).toDateString()}</span>
              </div>
              <div className="my-6">
                <div
                  ref={playerRef}
                  id="player"
                  className="rounded-md shadow-lg"
                ></div>
              </div>
              <div className="text-lg m-4">
                <p className="font-semibold text-2xl mb-4">Reviews:</p>
                {movie.reviewIds.length > 0 ? (
                  movie.reviewIds.map((review) => (
                    <ReviewCard key={review.id.timestamp} review={review} />
                  ))
                ) : (
                  <p>No reviews available</p>
                )}
              </div>

              <div className="m-4">
                <p className="font-semibold text-2xl mb-4 font-Bebas">
                  Add Your Review:
                </p>
                <textarea
                  value={reviewBody}
                  onChange={(e) => setReviewBody(e.target.value)}
                  className="w-full p-2 rounded-md bg-gray-800 text-white mb-4"
                  placeholder="Write your review here..."
                  rows={4}
                />
                <div className="flex justify-end">
                  <button
                    onClick={handleAddReview}
                    className={`bg-[#FFF078] rounded-md text-xl py-1 px-3 font-bold text-[#FF4191] font-Bebas hover:bg-[#E90074] flex justify-center items-center hover:text-[#FFF078]`}
                    disabled={submittingReview}
                  >
                    {submittingReview ? "Submitting..." : "Add Review"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default SingleMovie;
