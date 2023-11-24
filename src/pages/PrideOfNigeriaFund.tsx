import styles from "./styles/prideOfNigeriaFund.module.css";
import SubHeading from "../components/app/SubHeading";

import { useState } from "react";

function PrideOfNigeriaFundPage() {
  const [showDetails1, setShowDetails1] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);
  const [showDetails4, setShowDetails4] = useState(false);
  const [showDetails5, setShowDetails5] = useState(false);

  const handleToggle = (divNumber: number) => {
    switch (divNumber) {
      case 1:
        setShowDetails1((prevState) => !prevState);
        break;
      case 2:
        setShowDetails2((prevState) => !prevState);
        break;
      case 3:
        setShowDetails3((prevState) => !prevState);
        break;
      case 4:
        setShowDetails4((prevState) => !prevState);
        break;
      case 5:
        setShowDetails5((prevState) => !prevState);
        break;
      default:
        break;
    }
  };
  return (
    <article>
      <SubHeading value="PRIDE OF NIGERIA FUND" />

      <p className={styles.intro}>
        we have organisations, both commercial and charitable, whose
        opportunities have been approved by the International Award for Young
        People Nigeria as meeting our sectional conditions and can count towards
        the achievement of a Duke of Edinburgh&apos;s Award. sponsors are
        usually able to provide services in the Adventurous Journey and
        Residential Project section in its entirety, including training its
        staff, supervision and reporting to The International Award for Young
        People Nigeria (IAYPN).
      </p>

      <section className={styles.toggleContainer}>
        <div>
          <button
            onClick={() => handleToggle(1)}
            className={showDetails1 ? styles.btnActive : styles.nonActive}
          >
            {" "}
            {showDetails1 ? (
              <img src="/Vector 19b.svg" alt="plus" />
            ) : (
              <img src="/Vector 19.svg" alt="plus" />
            )}{" "}
            <p>Services Awar</p>
          </button>
          {showDetails1 && (
            <div className={styles.content}>
              Details 1: This is additional information.
            </div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleToggle(2)}
            className={showDetails2 ? styles.btnActive : styles.nonActive}
          >
            {showDetails2 ? (
              <img src="/Vector 19b.svg" alt="plus" />
            ) : (
              <img src="/Vector 19.svg" alt="plus" />
            )}{" "}
            <p>This Morning Emergency Services Awar</p>
          </button>
          {showDetails2 && (
            <div className={styles.content}>Details 2: More details here.</div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleToggle(3)}
            className={showDetails3 ? styles.btnActive : styles.nonActive}
          >
            {" "}
            {showDetails3 ? (
              <img src="/Vector 19b.svg" alt="plus" />
            ) : (
              <img src="/Vector 19.svg" alt="plus" />
            )}{" "}
            <p>This Morning Emergency Services Awar</p>
          </button>
          {showDetails3 && (
            <div className={styles.content}>Details 3: Extra details.</div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleToggle(4)}
            className={showDetails4 ? styles.btnActive : styles.nonActive}
          >
            {" "}
            {showDetails4 ? (
              <img src="/Vector 19b.svg" alt="plus" />
            ) : (
              <img src="/Vector 19.svg" alt="plus" />
            )}{" "}
            <p>This Morning Emergency Services Awar</p>
          </button>
          {showDetails4 && (
            <div className={styles.content}>Details 4: Additional content.</div>
          )}
        </div>
        <div>
          <button
            onClick={() => handleToggle(5)}
            className={showDetails5 ? styles.btnActive : styles.nonActive}
          >
            {" "}
            {showDetails5 ? (
              <img src="/Vector 19b.svg" alt="plus" />
            ) : (
              <img src="/Vector 19.svg" alt="plus" />
            )}{" "}
            <p>This Morning Emergency Services Awar</p>
          </button>
          {showDetails5 && (
            <div className={styles.content}>Details 5: More information.</div>
          )}
        </div>
      </section>
      <section className={styles.helpingHandSection}>
        <h4 className={styles.header}>
          A helping hand for the nation&apos;s unsung heroes
        </h4>
        <div className={styles.moreContentContainer}>
          <div>
            <img src="/Rectangle 66.svg" alt="people shaking hands" />
          </div>
          <div className={styles.formSection}>
            <h4>HOW TO BECOME AN NTAP</h4>
            <p>
              The first step in applying to become an NTAP is to complete an
              Initial Interest Form. Upon submission, a member of the Award
              Office will contact you, within 2 – 3 weeks, to discuss your
              proposed programmes. Then we can discuss other requirements and
              licencing for the organization to start its operations.
            </p>
            <button>DOWNLOAD FORM</button>
          </div>
        </div>
      </section>
    </article>
  );
}
export default PrideOfNigeriaFundPage;
