import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getReelsFullInfoOrderByIdFn from "../lib/shortVideos/getReelsFullInfoOrderById";
import styles from "./styles/dynamicShortVideo.module.css";
import updateLikesFn from "../lib/shortVideos/updateLikes";
import { useState } from "react";
import decreaseLikesFn from "../lib/shortVideos/decreaseLikes";

function DynamicShortVideoPage() {
  const [likedIconClicked, setLikedIconClicked] = useState(false);

  const { video_id } = useParams();

  const getReelsFullInfoOrderByIdQuery = useQuery({
    queryKey: ["getReelsFullInfo", video_id],
    queryFn: () => {
      if (!video_id) {
        throw new Error("video_id is required");
      }
      return getReelsFullInfoOrderByIdFn({ video_id });
    },
  });

  const updateLikesQuery = useQuery({
    queryKey: ["updateLikes", video_id],
    queryFn: () => {
      if (!video_id) {
        throw new Error("video_id is required");
      }
      return updateLikesFn({ video_id });
    },
    enabled: false,
  });

  const decreaseLikesQuery = useQuery({
    queryKey: ["decreaseLikes", video_id],
    queryFn: () => {
      if (!video_id) {
        throw new Error("video_id is required");
      }
      return decreaseLikesFn({ video_id });
    },
    enabled: false,
  });

  if (getReelsFullInfoOrderByIdQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getReelsFullInfoOrderByIdQuery.isError) {
    return <div>Error: {getReelsFullInfoOrderByIdQuery.error.message}</div>;
  }

  function handleLikedClicked() {
    updateLikesQuery.refetch();
    setLikedIconClicked(true);
  }

  function handleUnlikedClicked() {
    decreaseLikesQuery.refetch();
    setLikedIconClicked(false);
  }

  const { data } = getReelsFullInfoOrderByIdQuery;
  return (
    <div>
      {data?.reels.map((reel) => (
        <section>
          <div className={styles.videoCard}>
            <div className={styles.videoOuterDiv}>
              <video className={styles.video} controls>
                <source src={reel.video} type="video/mp4" />
                <source src={reel.video} type="video/webm" />
                <source src={reel.video} type="video/mov" />
                <source src={reel.video} type="video/avi" />
              </video>
            </div>
            <div className={styles.videoInfo}>
              <div className={styles.creatorInfo}>
                <img src="/Ellipse 60.png" alt="people" />
                <h3>{reel.creator}</h3>
                <p>24m</p>
              </div>
              <div className={styles.reelActions}>
                <div>
                  <img src="/VectorDownload.svg" alt="download icon" />
                  <img src="/material-symbols_share.svg" alt="share icon" />
                  <img src="/commentIcon2.svg" alt="comment icon" />
                </div>

                <div className={styles.likeCountDiv}>
                  {!likedIconClicked ? (
                    <img
                      src="/icon-park-outline_like2.svg"
                      alt="comment icon"
                      onClick={handleLikedClicked}
                    />
                  ) : (
                    <img
                      src="/likeRed.svg"
                      alt="comment icon"
                      onClick={handleUnlikedClicked}
                    />
                  )}
                  <p className={styles.likeCount}>{reel.likes ?? 0}</p>
                </div>
              </div>
              <div className={styles.reelInfo}>
                <span className={styles.creatorName}>{reel.creator}: </span>
                {reel.detail}
              </div>
              <section>
                <h4 className={styles.dropAComment}>Drop a Comment</h4>
                <form action="">
                  <label htmlFor=""></label>
                </form>
              </section>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
}
export default DynamicShortVideoPage;
