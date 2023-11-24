import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import getPostsFn from "../lib/posts/getPosts";
import SubHeading from "../components/app/SubHeading";
import { Post } from "../typesAndInterfaces/plan";
import styles from "./styles/winner.module.css";
import searchPostsByYear from "../lib/posts/searchPostsByYear";
import { Link } from "react-router-dom";

function WinnerPage(): JSX.Element {
  const [year, setYear] = useState("");

  const postsQuery = useQuery({
    queryKey: ["getPosts"],
    queryFn: getPostsFn,
  });

  const searchPostsByYearQuery = useQuery({
    queryKey: ["searchPostsByYear"],
    queryFn: () =>
      searchPostsByYear({
        year,
      }),
    enabled: false,
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

  return (
    <article className={styles.winnerPageContainer}>
      <SubHeading value="Pride winners" />

      <section className={styles.searchSection}>
        <select
          name="searchWinnerByYear"
          id="searchWinnerByYear"
          onChange={(e) => setYear(e.target.value)}
        >
          <option disabled selected>
            Select year
          </option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
        <button onClick={() => searchPostsByYearQuery.refetch()}>
          SEARCH HERE
        </button>
      </section>

      <div className={styles.allPostDiv}>
        {searchPostsByYearQuery.data
          ? searchPostsByYearQuery.data?.message.map((post: Post) => (
              <Link
                to={`/post/${post.id}`}
                key={post.id}
                className={styles.post}
              >
                <div>
                  <img
                    src={post.picture}
                    alt={post.name}
                    className={styles.img}
                  />
                  <div className={styles.postHeaderSection}>
                    <h5 className={styles.postName}>{post.name}</h5>
                    <p>
                      {post.sub_heading.length > 49
                        ? post.sub_heading.slice(0, 44) + "..."
                        : post.sub_heading}
                    </p>
                  </div>
                  <div className={styles.postBody}>
                    <p className={styles.postBodyText}>
                      {post.post.length > 129
                        ? post.post.slice(0, 127) + "..."
                        : post.post}
                    </p>
                    <div className={styles.commentIconDiv}>
                      <img
                        src="/commentIcon.svg"
                        alt="commentIcon"
                        className={styles.commentIcon}
                      />{" "}
                      <p>{post.total_comments}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : postsQuery.data?.message.map(
              (
                post: Post // handle if data is undefined
              ) => (
                <Link
                  to={`/post/${post.id}`}
                  key={post.id}
                  className={styles.post}
                >
                  <div key={post.id}>
                    <img
                      src={post.picture}
                      alt={post.name}
                      className={styles.img}
                    />
                    <div className={styles.postHeaderSection}>
                      <h5 className={styles.postName}>{post.name}</h5>
                      <p>
                        {post.sub_heading.length > 49
                          ? post.sub_heading.slice(0, 44) + "..."
                          : post.sub_heading}
                      </p>
                    </div>
                    <div className={styles.postBody}>
                      <p className={styles.postBodyText}>
                        {post.post.length > 129
                          ? post.post.slice(0, 127) + "..."
                          : post.post}
                      </p>
                      <div className={styles.commentIconDiv}>
                        <img
                          src="/commentIcon.svg"
                          alt="commentIcon"
                          className={styles.commentIcon}
                        />{" "}
                        <p>{post.total_comments}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            )}
      </div>
    </article>
  );
}

export default WinnerPage;
