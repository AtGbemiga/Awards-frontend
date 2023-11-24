import { useQuery } from "@tanstack/react-query";
import fetchPostsFn from "../../lib/fetchPosts";
import { Post } from "../../typesAndInterfaces/plan";
import styles from "./home.module.css";
const WinnersOnHomePage = (): JSX.Element => {
  const postsQuery = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPostsFn,
  });

  // check if data is loading
  if (postsQuery.isLoading) return <h1>Loading...</h1>;

  // check for error
  if (postsQuery.isError)
    return (
      <div className={styles.errorMsg}>
        <h5>
          Failed to load data.{" "}
          <button onClick={() => postsQuery.refetch()}>Try again</button> later.
        </h5>
      </div>
    );

  // map the posts and return the jsx
  return (
    <div className={styles.winnersContainer}>
      {postsQuery.data?.message.map((post: Post, index: number) => (
        <div
          key={post.id}
          className={` ${index === 0 ? styles.firstItem : styles.item}`}
        >
          <img
            src={post.picture}
            alt={post.name}
            className={styles.winnerImg}
          />
          <div className={styles.nameAndSubHeadingDiv}>
            <h5>{post.name}</h5>
            <p className={styles.subHeading}>{post.sub_heading}</p>
          </div>
          <p className={styles.text}>
            {post.post.length > 50 ? post.post.slice(0, 50) + "..." : post.post}
          </p>
        </div>
      ))}
    </div>
  );
};
export default WinnersOnHomePage;
