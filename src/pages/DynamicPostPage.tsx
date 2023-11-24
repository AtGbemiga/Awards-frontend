import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getPostByIdWithCommentsFn from "../lib/posts/getPostByIdWithComments";
import styles from "./styles/dynamic.module.css";

function DynamicPostPage(): JSX.Element {
  // get the post id from the params. This is the post that was previous clicked on.
  const { post_id } = useParams();
  console.log(post_id);

  // fetch the post using the post id
  const singlePostQuery = useQuery({
    queryKey: ["singlePost", post_id],
    queryFn: () => {
      if (!post_id) {
        throw new Error("post_id is required");
      }
      return getPostByIdWithCommentsFn({ post_id });
    },
  });

  if (singlePostQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (singlePostQuery.isError) {
    return <div>Error: {singlePostQuery.error.message}</div>;
  }

  return (
    <div>
      {Array.isArray(singlePostQuery.data) && (
        <div>
          {/* Why is typescript intellisence not working in here? */}
          <section>
            <div>
              <img
                src={singlePostQuery.data[0]?.picture}
                alt={singlePostQuery.data[0]?.name}
              />
            </div>
            <div>
              <h3>{singlePostQuery.data[0]?.name}</h3>
              <p>{singlePostQuery.data[0]?.sub_heading}</p>
              <p>{singlePostQuery.data[0]?.year}</p>
              <p>{singlePostQuery.data[0]?.total_comments}</p>
              {/* <p>{singlePostQuery.data[0]?.post.slice(0, 128)}</p> */}
            </div>
            <div>
              <p>{singlePostQuery.data[0]?.post}</p>
            </div>
          </section>
          <section className={styles.postCommentSection}>
            <h4 className={styles.postCommentHeader}>Drop a Comment</h4>

            <div>
              <div>
                <label htmlFor="">Email</label>
                <input type="text" />
              </div>
              <div>
                <label htmlFor="">Name</label>
                <input type="text" />
              </div>
            </div>
            <div>
              <label htmlFor="">
                Why do they deserve the award? (Please include as much detail as
                possible):
              </label>
              <textarea />
            </div>
          </section>
        </div>
      )}
    </div>
  );
}
export default DynamicPostPage;
