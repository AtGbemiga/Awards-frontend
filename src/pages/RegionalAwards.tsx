import SubHeading from "../components/app/SubHeading";
import styles from "./styles/regionalAwards.module.css";

function RegionalAwardsPage() {
  return (
    <div>
      <SubHeading value="regional Awards" />

      <p className={styles.intro}>
        Pride of Nigeria's regional awards celebrate incredible heroes changing
        lives in their communities and beyond. Just like Pride of Nigeria, the
        winners go to extraordinary lengths to help others, display immense
        courage in the face of extreme challenges, and always put others first,
        no matter what adversity they face themselves. Click the links below to
        meet the winners, relive uplifting awards moments, and find out how to
        nominate.
      </p>
      <section className={styles.awardInfoDiv}>
        <div className={styles.section}>
          <img
            src="/logo512.png"
            alt="award logo"
            className={styles.awardLogo}
          />
          <div className={styles.awardInfo}>
            <h2 className={styles.awardName}>Pride of LAGOS</h2>
            <div className={styles.awardWordContainer}>
              <img src="/diamond.svg" alt="diamond icon" />
              <h5 className={styles.awardWord}>AWARD</h5>
              <img src="/diamond.svg" alt="diamond icon" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img
            src="/logo512.png"
            alt="award logo"
            className={styles.awardLogo}
          />
          <div className={styles.awardInfo}>
            <h2 className={styles.awardName}>Pride of ABUJA</h2>
            <div className={styles.awardWordContainer}>
              <img src="/diamond.svg" alt="diamond icon" />
              <h5 className={styles.awardWord}>AWARD</h5>
              <img src="/diamond.svg" alt="diamond icon" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img
            src="/logo512.png"
            alt="award logo"
            className={styles.awardLogo}
          />
          <div className={styles.awardInfo}>
            <h2 className={styles.awardName}>Pride of IBADAN</h2>
            <div className={styles.awardWordContainer}>
              <img src="/diamond.svg" alt="diamond icon" />
              <h5 className={styles.awardWord}>AWARD</h5>
              <img src="/diamond.svg" alt="diamond icon" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img
            src="/logo512.png"
            alt="award logo"
            className={styles.awardLogo}
          />
          <div className={styles.awardInfo}>
            <h2 className={styles.awardName}>Pride of ENUGU</h2>
            <div className={styles.awardWordContainer}>
              <img src="/diamond.svg" alt="diamond icon" />
              <h5 className={styles.awardWord}>AWARD</h5>
              <img src="/diamond.svg" alt="diamond icon" />
            </div>
          </div>
        </div>
        <div className={styles.section}>
          <img
            src="/logo512.png"
            alt="award logo"
            className={styles.awardLogo}
          />
          <div className={styles.awardInfo}>
            <h2 className={styles.awardName}>
              Pride of Nigerian in the diaspora
            </h2>
            <div className={styles.awardWordContainer}>
              <img src="/diamond.svg" alt="diamond icon" />
              <h5 className={styles.awardWord}>AWARD</h5>
              <img src="/diamond.svg" alt="diamond icon" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
export default RegionalAwardsPage;
