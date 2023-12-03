import SubHeading from "../components/app/SubHeading";
import styles from "./styles/yourGroupRightHandSection.module.css";
import { Link } from "react-router-dom";

function YourGroupPage() {
  return (
    <article>
      <SubHeading value="GROUP" />
      <div style={{ display: "flex" }}>
        <section>bggtt</section>
        <section className={styles.rightHandSection}>
          <div className={styles.searchBarContainer}>
            <div>
              <label htmlFor=""></label>
              <input type="text" placeholder="Search groups" />
            </div>
            <div>
              <Link to="/create-group">
                + <span className={styles.btnText}>Create new group</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </article>
  );
}
export default YourGroupPage;
