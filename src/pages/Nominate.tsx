import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import styles from "./styles/nominate.module.css";
import getShowcasedNominationsOnTheNominationPageFn from "../lib/nominate/getShowcasedNominationsOnTheNominationPage";
import { Nomination } from "../typesAndInterfaces/getShowcasedNominationsOnTheNominationPage";
import { Link } from "react-router-dom";

function getRandomColor() {
  // Generate a random hex color code
  let color;
  do {
    color = "#" + Math.floor(Math.random() * 16777215).toString(16);
  } while (getDistance(color, "#ffffff") < 100); // Replace 100 with your desired threshold
  return color;
}

function getDistance(color1: string, color2: string) {
  // Calculate the distance between two colors using the CIE76 formula
  const r1 = parseInt(color1.substring(1, 3), 16);
  const g1 = parseInt(color1.substring(3, 5), 16);
  const b1 = parseInt(color1.substring(5), 16);

  const r2 = parseInt(color2.substring(1, 3), 16);
  const g2 = parseInt(color2.substring(3, 5), 16);
  const b2 = parseInt(color2.substring(5), 16);

  const dr = r1 - r2;
  const dg = g1 - g2;
  const db = b1 - b2;

  return Math.sqrt(dr * dr + dg * dg + db * db);
}

function NominatePage() {
  const navigate = useNavigate();

  function handleShowForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate("/nominate-form");
  }

  const showcasedNominationsQuery = useQuery({
    queryKey: ["showcased-nominations"],
    queryFn: getShowcasedNominationsOnTheNominationPageFn,
  });

  if (showcasedNominationsQuery.isLoading) {
    return <p>Loading...</p>;
  }

  if (showcasedNominationsQuery.isError)
    return (
      <div className={styles.errorMsg}>
        <h5>
          Failed to load data.{" "}
          <button onClick={() => showcasedNominationsQuery.refetch()}>
            Try again
          </button>{" "}
          later.
        </h5>
      </div>
    );

  return (
    <>
      <div className={styles.extraHeader}>
        <h3>
          NOMINATE NOW FOR PRIDE OF NIGERIA <span>2024!</span>
        </h3>
        <p>
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, Curabitur tempor quis eros tempus
          lacinia. Nam bibendum pellentesque quam a convallis.
        </p>
        <button onClick={handleShowForm}>Click here to nominate</button>
      </div>
      <section className={styles.nomineesDiv}>
        {showcasedNominationsQuery.data?.nominations.map(
          (nomination: Nomination) => (
            <Link
              to="/nominate-form"
              key={nomination.id}
              className={styles.nominee}
            >
              <div className={styles.nomineeImgDiv}>
                <img
                  src={nomination.picture}
                  alt={nomination.awardName}
                  className={styles.nomineeImg}
                />
              </div>
              <h3 className={styles.nomineeName}>{nomination.awardName}</h3>
              <div
                className={styles.nomineeInfo}
                style={{ backgroundColor: getRandomColor() }}
              >
                <p className={styles.nomineeContent}>{nomination.content}</p>
              </div>
            </Link>
          )
        )}
      </section>
      <section className={styles.bottomSection}>
        <h1 className={styles.bottomHeading}>
          Do you know any person that has made an impact in anything, you can
          nominate them here
        </h1>
        <p className={styles.bottomContent}>
          Corem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
          turpis molestie, dictum est a, Curabitur tempor quis eros tempus
          lacinia. Nam bibendum pellentesque quam a convallis.
        </p>
      </section>
    </>
  );
}

export default NominatePage;
