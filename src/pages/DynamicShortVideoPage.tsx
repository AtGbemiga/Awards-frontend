import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import getReelsFullInfoOrderByIdFn from "../lib/shortVideos/getReelsFullInfoOrderById";
import styles from "./styles/dynamicShortVideo.module.css";
import updateLikesFn from "../lib/shortVideos/updateLikes";
import { useState } from "react";
import decreaseLikesFn from "../lib/shortVideos/decreaseLikes";
import createCommentFn from "../lib/shortVideos/createComment";
import SubHeading from "../components/app/SubHeading";
import getVideoCommentsFn from "../lib/shortVideos/getVideoComments";

function DynamicShortVideoPage() {
  const [likedIconClicked, setLikedIconClicked] = useState(false);
  const [userComment, setuserComment] = useState("");
  const [showCommentsSection, setShowCommentsSection] = useState<{
    [key: number]: boolean;
  }>({});

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

  const createCommentQuery = useQuery({
    queryKey: ["createComment", video_id],
    queryFn: () => {
      if (!video_id) {
        throw new Error("video_id is required");
      }
      return createCommentFn({ video_id, userComment });
    },
    enabled: false,
  });

  const getVideoCommentsQuery = useQuery({
    queryKey: ["getVideoComments", video_id],
    queryFn: () => {
      if (!video_id) {
        throw new Error("video_id is required");
      }
      return getVideoCommentsFn({ video_id });
    },
  });

  if (getReelsFullInfoOrderByIdQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getReelsFullInfoOrderByIdQuery.isError) {
    return <div>Error: {getReelsFullInfoOrderByIdQuery.error.message}</div>;
  }

  if (getVideoCommentsQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (getVideoCommentsQuery.isError) {
    return <div>Error: {getVideoCommentsQuery.error.message}</div>;
  }

  function handleLikedClicked() {
    updateLikesQuery.refetch();
    setLikedIconClicked(true);
  }

  function handleUnlikedClicked() {
    decreaseLikesQuery.refetch();
    setLikedIconClicked(false);
  }

  function handleCommentSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createCommentQuery.refetch();
  }

  function formatTimestampAgo(minutesAgo: number) {
    if (minutesAgo < 60) {
      return `${minutesAgo}m`;
    } else if (minutesAgo < 1440) {
      return `${Math.floor(minutesAgo / 60)}h`;
    } else if (minutesAgo < 10080) {
      return `${Math.floor(minutesAgo / 1440)}d`;
    } else if (minutesAgo < 43800) {
      return `${Math.floor(minutesAgo / 10080)}w`;
    } else {
      return `${Math.floor(minutesAgo / 43800)}y`;
    }
  }

  const { data } = getReelsFullInfoOrderByIdQuery;
  console.log({ reel: data });

  return (
    <div>
      <SubHeading value="Short Videos" />
      {data?.reels.map((reel) => (
        <div className={styles.videoCard} key={reel.short_videos_id}>
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
              <p>{formatTimestampAgo(reel.minutes_ago)}</p>
            </div>
            <div className={styles.reelActions}>
              <div>
                <img
                  src="/VectorDownload.svg"
                  alt="download icon"
                  className={styles.downloadIcon}
                  // on click navigate to an external site
                  onClick={() => {
                    const videoUrl = reel.video;
                    fetch(videoUrl)
                      .then((response) => response.blob())
                      .then((blob) => {
                        const url = URL.createObjectURL(blob);
                        const a = document.createElement("a");
                        a.href = url;
                        a.download = "video.mp4"; // Change the filename as needed
                        a.click();
                        URL.revokeObjectURL(url);
                      });
                  }}
                />
                <img src="/material-symbols_share.svg" alt="share icon" />
                <img
                  src="/commentIcon2.svg"
                  alt="comment icon"
                  onClick={() =>
                    setShowCommentsSection((prevStates) => ({
                      ...prevStates,
                      [reel.short_videos_id]: !prevStates[reel.short_videos_id],
                    }))
                  }
                  className={styles.commentIcon}
                />
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
            {showCommentsSection[reel.short_videos_id] && (
              <section>
                <h4 className={styles.dropAComment}>Drop a Comment</h4>
                <form onSubmit={handleCommentSubmit}>
                  <div className={styles.inputDiv}>
                    <label htmlFor="userComment"></label>
                    <input
                      type="text"
                      value={userComment}
                      onChange={(e) => setuserComment(e.target.value)}
                      id="userComment"
                      placeholder="write something"
                    />
                    <button className={styles.buttonDiv} type="submit">
                      <img src="/Vector 36b.svg" alt="up arrow" />
                    </button>
                  </div>
                </form>
                <section className={styles.commentSection}>
                  {getVideoCommentsQuery.isLoading && <p>Loading...</p>}
                  {getVideoCommentsQuery.isError && (
                    <p>Error: Failed to fetch data. Reload</p>
                  )}
                  {getVideoCommentsQuery.data?.comments.length === 0 && (
                    <p>No comments yet</p>
                  )}
                  {getVideoCommentsQuery.data?.comments.map((comment) => (
                    <div key={`${comment.reels_comments_id}`}>
                      <div className={styles.commentDiv}>
                        <div className={styles.creatorImgDiv}>
                          <img src="/Ellipse 58.svg" alt="creator" />
                        </div>
                        <div className={styles.commentInfoDiv}>
                          <h3>{comment.username}</h3>
                          <p className={styles.comment}>
                            {comment.user_comment}
                          </p>
                        </div>
                      </div>

                      <div className={styles.seeMoreDiv}>
                        <button className={styles.seeMore}>See more</button>
                      </div>
                    </div>
                  ))}
                </section>
              </section>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
export default DynamicShortVideoPage;
