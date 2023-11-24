import { useState } from "react";
import SubHeading from "../components/app/SubHeading";
import styles from "./styles/awardTypes.module.css";

function AwardTypesPage() {
  const [showAwardContent, setShowAwardContent] = useState(true);
  const [showBenefitContent, setShowBenefitContent] = useState(false);
  function handleContentToggle(e: React.MouseEvent<HTMLButtonElement>) {
    setShowAwardContent((prevState) => !prevState);
    setShowBenefitContent((prevState) => !prevState);
  }

  return (
    <div>
      <SubHeading value="AWARDS TYPE" />
      <section className={styles.specificPageNav}>
        <button
          onClick={handleContentToggle}
          className={
            showAwardContent ? `${styles.active}` : `${styles.nonActive}`
          }
        >
          AWARDS
        </button>
        <button
          onClick={handleContentToggle}
          className={
            showBenefitContent ? `${styles.active}` : `${styles.nonActive}`
          }
        >
          BENEFITS
        </button>
      </section>
      {showAwardContent ? (
        <section className={styles.awardContent}>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
        </section>
      ) : showBenefitContent ? (
        <section className={styles.benefitContent}>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Benefit This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Benefit This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Benefit This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
          <div>
            <h4 className={styles.awardName}>
              <img src="/Rectangle 13.svg" alt="diamond icon" />
              Benefit This Morning Emergency Services Award
            </h4>
            <p>
              onvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur tempor quis eros tempus lacinia.
              Nam bionvallis. Sed ut vulputate nisi. Integer in felis sed leo
              vestibulum venenatis. Curabitur onvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bionvallis. Sed ut vulputate nisi.
              Integer in felis sed leo vestibulum venenatis. Curabitur tempor
              quis eros tempus lacinia. Nam bi
            </p>
          </div>
        </section>
      ) : (
        <p>Nothing to display</p>
      )}
    </div>
  );
}
export default AwardTypesPage;
