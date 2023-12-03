import getReelsLimitedInfoForHomeFn from "../../lib/shortVideos/getLimitedInfoForHome";
import styles from "./largeFrameShortVideosOnHomePage.module.css";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { useState } from "react";

function LargeFrameShortVideosOnHomePage() {
  const [showVideoIcon, setShowVideoIcon] = useState(true);
  const reelLimitedInfoQuery = useQuery({
    queryKey: ["reelLimitedInfoForHome"],
    queryFn: getReelsLimitedInfoForHomeFn,
  });

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
  console.log({ home: data });

  return (
    <div className={styles.largeFrameShortVideosOnHome}>
      <div className={styles.largeFrameShortVideosOnHomeContainer}>
        <h4>Short Videos </h4>
        <Link to="/short-videos" className={styles.seeAll}>
          See All
        </Link>
      </div>
      <article>
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
                    videoElement.play();
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
    </div>
  );
}
export default LargeFrameShortVideosOnHomePage;
