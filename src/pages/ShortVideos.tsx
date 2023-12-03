import { useQuery } from "@tanstack/react-query";
import SubHeading from "../components/app/SubHeading";
import getReelsLimitedInfoFn from "../lib/shortVideos/getReelsLimitedInfo";
import styles from "./styles/shortVideos.module.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function ShortVideos() {
  const [showVideoIcon, setShowVideoIcon] = useState(true);
  const reelLimitedInfoQuery = useQuery({
    queryKey: ["reelLimitedInfo"],
    queryFn: getReelsLimitedInfoFn,
  });

  function playVideo(video: any) {
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          // Automatic playback started!
          // Show playing UI.
          // We can now safely pause video...
          video.pause();
        })
        .catch((error: any) => {
          // Auto-play was prevented
          // Show paused UI.
        });
    }
  }

  if (reelLimitedInfoQuery.isLoading) {
    return <h1>Loading...</h1>;
  }

  if (reelLimitedInfoQuery.isError) {
    return (
      <div>
        <h5>
          Failed to load data.{" "}
          <button onClick={() => reelLimitedInfoQuery.refetch()}>
            Try again
          </button>{" "}
          later.
        </h5>
      </div>
    );
  }

  const { data } = reelLimitedInfoQuery;

  return (
    <article>
      <SubHeading value="SHORT VIDEOS" />
      <div className={styles.parentReelsContainer}>
        {data?.reels.map((reel) => (
          <Link
            to={`/short-videos/${reel.short_videos_id}`}
            key={reel.short_videos_id}
            className={styles.link}
          >
            {showVideoIcon ? (
              <img
                src="/Polygon 6.svg"
                alt="play Icon"
                className={styles.playIcon}
              />
            ) : undefined}
            <div className={styles.shortVideoAndDetailsCard}>
              <video
                className={styles.shortVideosVideo}
                onMouseOver={(event) => {
                  const videoElement = event.target as HTMLVideoElement;
                  var isPlaying =
                    videoElement.currentTime > 0 &&
                    !videoElement.paused &&
                    !videoElement.ended &&
                    videoElement.readyState > videoElement.HAVE_CURRENT_DATA;

                  if (!isPlaying) {
                    videoElement.play();
                  }
                  setShowVideoIcon(false);
                }}
                onMouseOut={(event) => {
                  const videoElement = event.target as HTMLVideoElement;
                  videoElement.pause();
                  setShowVideoIcon(true);
                }}
                muted
              >
                <source src={reel.video} type="video/mp4" />
                <source src={reel.video} type="video/webm" />
                <source src={reel.video} type="video/mov" />
                <source src={reel.video} type="video/avi" />
              </video>
              <div className={styles.likesAndViewsDetails}>
                <p>
                  <img src="/icon-park-outline_like.svg" alt="Like icon" />
                  {reel.likes ?? 0}
                </p>
                <p>{reel.views ?? 0} views</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </article>
  );
}
export default ShortVideos;
