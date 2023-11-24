import SubHeading from "../components/app/SubHeading";
import { useQuery } from "@tanstack/react-query";
import pastHerosFn from "../lib/posts/pastHeros";
import { Post } from "../typesAndInterfaces/plan";
import styles from "./styles/pastHeros.module.css";
import React from "react";
import { Link } from "react-router-dom";

function PastHerosPage() {
  const [showMore, setShowMore] = React.useState(false);
  const herosQuery = useQuery({
    queryKey: ["herosQuery"],
    queryFn: pastHerosFn,
  });

  if (herosQuery.isLoading) return <h1>Specific Loader...</h1>;

  // check for error
  if (herosQuery.isError)
    return (
      <div className={styles.errorMsg}>
        <h5>
          Failed to load data.{" "}
          <button onClick={() => herosQuery.refetch()}>Try again</button> later.
        </h5>
      </div>
    );

  const renderHeroCards = () => {
    const { data: { message } = {} } = herosQuery;
    const cardsToShow = showMore ? message : message?.slice(0, 5);
    return (
      <>
        <button
          onClick={() => setShowMore((prev) => !prev)}
          className={styles.btn}
        >
          <p className={styles.letterRange}>A - C</p>{" "}
          {showMore ? (
            <img src="/Vector 14b.svg" alt="arrow down" />
          ) : (
            <img src="/Vector 14.svg" alt="arrow up" />
          )}
        </button>
        <div className={styles.pastHerosContainer}>
          {cardsToShow?.map((hero) => (
            <Link to={`/post/${hero.id}`} key={hero.id} className={styles.link}>
              <div key={hero.id} className={styles.pastHerosCard}>
                <img
                  src={hero.picture}
                  alt={hero.name}
                  className={styles.pastHerosImg}
                />
                <div className={styles.pastHerosContent}>
                  <div className={styles.nameAndDateDiv}>
                    <h5>{hero.name}</h5>
                    <p>{hero.year}</p>
                  </div>

                  <p className={styles.pastHerosPost}>
                    {hero.post.length > 100
                      ? hero.post.slice(0, 97) + "..."
                      : hero.post}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </>
    );
  };

  return (
    <section>
      <SubHeading value="PAST HEROS" />
      {renderHeroCards()}
    </section>
  );
}

export default PastHerosPage;
