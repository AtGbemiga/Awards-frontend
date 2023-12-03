import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import getPostByIdWithCommentsFn from "../lib/posts/getPostByIdWithComments";
import styles from "./styles/dynamic.module.css";
import SubHeading from "../components/app/SubHeading";
import postCommentFn from "../lib/comments/postComment";
import { useState } from "react";
import Login from "../components/login/Login";
import Register from "../components/register/Register";
import stylesTwo from "../components/register/register.module.css";
import Cookies from "js-cookie";

function DynamicPostPage(): JSX.Element {
  // states for the comment form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [statement, setStatement] = useState("");
  const [showCommentForm, setShowCommentForm] = useState(true);
  const [showCommentSuccessMessage, setShowCommentSuccessMessage] =
    useState(false);

  const [displayRegisterForm, setDisplayRegisterForm] = useState(false); // default false
  const [toggleRegisterAndLogin, setToggleRegisterAndLogin] = useState(true);

  // get the post id from the params. This is the post that was previous clicked on.
  const { post_id } = useParams();
  console.log(typeof post_id);

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

  // query to post comment
  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!post_id) return;
    if (!Cookies.get("token")) {
      setDisplayRegisterForm(true);
      return;
    }
    await postCommentFn({ post_id }, { name, email, statement });
    console.log("comment posted");
    setShowCommentForm(false);
    setShowCommentSuccessMessage(true);
  }

  if (singlePostQuery.isLoading) {
    return <div>Loading...</div>;
  }

  if (singlePostQuery.isError) {
    return <div>Error: {singlePostQuery.error.message}</div>;
  }

  function handleToggleRegisterAndLogin() {
    setToggleRegisterAndLogin((prevState) => !prevState);
  }
  return (
    <div>
      <SubHeading value="PAST HEROS" />
      {Array.isArray(singlePostQuery.data) && (
        <div>
          {/* Why is typescript intellisence not working in here? */}
          <section
            className={styles.postSection}
            onClick={() => setDisplayRegisterForm(false)}
          >
            <div className={styles.postTopSection}>
              <div>
                <img
                  src={singlePostQuery.data[0]?.picture}
                  alt={singlePostQuery.data[0]?.name}
                  className={styles.postImg}
                />
              </div>
              <div>
                <div className={styles.postNameAndComment}>
                  <h3>{singlePostQuery.data[0]?.name}</h3>
                  <p className={styles.commentCountDiv}>
                    <img
                      src="/Vector.svg"
                      alt="commentIcon"
                      className={styles.commentIcon}
                    />
                    {singlePostQuery.data[0]?.total_comments}
                  </p>
                </div>
                <div className={styles.postSubHeadingAndYear}>
                  <p className={styles.postSubHeading}>
                    {singlePostQuery.data[0]?.sub_heading}
                  </p>
                  <p className={styles.postYear}>
                    {singlePostQuery.data[0]?.year}
                  </p>
                </div>
                <p className={styles.postContent}>
                  {singlePostQuery.data[0]?.post.slice(0, 864)}
                </p>
              </div>
            </div>
            <div className={styles.postContent}>
              <p>{singlePostQuery.data[0]?.post.slice(864)}</p>
            </div>
          </section>
          {showCommentForm && (
            <form
              className={styles.postCommentSection}
              onSubmit={handleFormSubmit}
            >
              <div className={styles.postCommentHeadingAndButtonDiv}>
                <h4 className={styles.postCommentHeader}>Drop a Comment</h4>
                <button>Submit</button>
              </div>

              <div className={styles.postCommentForm}>
                <div className={styles.singleLabelAndInput}>
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    aria-required
                  />
                </div>
                <div className={styles.singleLabelAndInput}>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required
                  />
                </div>
              </div>
              <div className={styles.postCommentTextareaDiv}>
                <label htmlFor="statement">
                  Why do they deserve the award? (Please include as much detail
                  as possible):
                </label>
                <textarea
                  id="statement"
                  value={statement}
                  onChange={(e) => setStatement(e.target.value)}
                  required
                  aria-required
                />
              </div>
            </form>
          )}
          <hr />
          {displayRegisterForm && (
            <section className={stylesTwo.registerFormSection}>
              {toggleRegisterAndLogin ? (
                <Register
                  passedName={name}
                  passedEmail={email}
                  setDisplayRegisterForm={setDisplayRegisterForm}
                />
              ) : (
                <Login
                  setDisplayRegisterForm={setDisplayRegisterForm}
                  passedEmail={email}
                />
              )}
              <div className={stylesTwo.loginOption}>
                <p>
                  Already have an account?{" "}
                  <button
                    onClick={handleToggleRegisterAndLogin}
                    className={stylesTwo.loginOptionLink}
                  >
                    {toggleRegisterAndLogin ? "Login" : "Register"}
                  </button>
                </p>
              </div>
            </section>
          )}
          <hr />
          {showCommentSuccessMessage && (
            <div className={styles.commentSuccessMessage}>
              <p>thank you for your comment</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
export default DynamicPostPage;
