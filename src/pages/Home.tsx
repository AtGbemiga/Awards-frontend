import SecondPromotionsSection from "../components/home/SecondPromotionsSection";
import LargeFrameShortVideosOnHomePage from "../components/home/LargeFrameShortVideosOnHomePage";
import WinnersOnHomePage from "../components/home/WinnersOnHomePage";
import styles from "./styles/home.module.css";
import { useNavigate } from "react-router-dom";

const HomePage = (): JSX.Element => {
  const navigate = useNavigate();

  function handleNavigationToForm(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate("/nominate-form");
  }

  return (
    <article className={styles.parentContainer}>
      <div className={styles.overlay}></div>
      <img
        src="/Rectangle 3.png"
        alt="placeholder img"
        className={`${styles.heroImg}`}
      />
      <section>
        <h2>KNOW YOUR HEROS</h2>
        <p>
          These are some randoms words that will be replaced as soon a possible.
          The purpose of these words is to serve as a correct placholder. I need
          more lines of text to correctly fill the expected space. I'm still
          writing because I need much more text on my screen.
        </p>
        <a href="#unknown-do-NOT-click">
          {/* href for this button is currently unknown */}
          GET THE LATEST PRIDE OF NIGERIA NEWS
        </a>
      </section>
      <section className={styles.aboutPrideOfNigeriaSection}>
        <h3>ABOUT PRIDE OF NIGERIA</h3>
        <div className={styles.aboutPrideOfNigeriaCardContainer}>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            minima porro, ut hic doloremque, voluptate dolore ad, deserunt
            obcaecati quasi esse ab? Officiis aut eaque et delectus expedita
            architecto cupiditate. Mollitia impedit sunt sint, doloribus minima
            dolorum illum. Aperiam, eaque recusandae! Natus accusantium
            voluptate quae tenetur. Cumque omnis accusamus qui.
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            minima porro, ut hic doloremque, voluptate dolore ad, deserunt
            obcaecati quasi esse ab? Officiis aut eaque et delectus expedita
            architecto cupiditate. Mollitia impedit sunt sint, doloribus minima
            dolorum illum. Aperiam, eaque recusandae! Natus accusantium
            voluptate quae tenetur. Cumque omnis accusamus qui.
          </div>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam
            minima porro, ut hic doloremque, voluptate dolore ad, deserunt
            obcaecati quasi esse ab? Officiis aut eaque et delectus expedita
            architecto cupiditate. Mollitia impedit sunt sint, doloribus minima
            dolorum illum. Aperiam, eaque recusandae! Natus accusantium
            voluptate quae tenetur. Cumque omnis accusamus qui.
          </div>
        </div>
      </section>
      <section>
        <div className={styles.winnersHomeDiv}>
          <h3>OUR 2023 WINNERS</h3>
          <WinnersOnHomePage />
        </div>
      </section>
      <section className={styles.exploreNewDevelopmentSection}>
        <div className={styles.exploreNewDevelopmentWidthController}>
          <h4>
            Explore new Development in Nigeria and Nigerian Achievers - both
            Home and Abroad
          </h4>
          <p className={styles.subHeading}>
            Nigerians doing well all over the world Nigerians doing well all
            over the world
          </p>
          <div className={styles.exploreNewDevelopmentCardContainer}>
            <div className={styles.exploreNewDevelopmentCard}>
              <div>
                <img src="/Rectangle 8b.svg" alt="two people smiling" />
                <p className={styles.ancestryFamilyTree}>PEOPLE</p>
              </div>
              <div>
                <p className={styles.contentForExploreNewSection}>
                  Make quick family history discoveries with Ancestry Hints Make
                  quick family history discoveries with Ancestry Hints
                </p>
                <button className={styles.exploreNewDevelopmentCardExploreBtn}>
                  EXPLORE
                </button>
              </div>
            </div>
            <div className={styles.exploreNewDevelopmentCard}>
              <div>
                <img src="/Rectangle 8b.svg" alt="two people smiling" />
                <p className={styles.ancestryFamilyTree}>NIGERIANS CHOICE</p>
              </div>
              <div>
                <p className={styles.contentForExploreNewSection}>
                  Make quick family history discoveries with Ancestry Hints Make
                  quick family history discoveries with Ancestry Hints
                </p>
                <button className={styles.exploreNewDevelopmentCardExploreBtn}>
                  EXPLORE
                </button>
              </div>
            </div>
            <div className={styles.exploreNewDevelopmentCard}>
              <div>
                <img src="/Rectangle 8b.svg" alt="two people smiling" />
                <p className={styles.ancestryFamilyTree}>
                  ANCESTRY- FAMILY TREE
                </p>
              </div>
              <div>
                <p className={styles.contentForExploreNewSection}>
                  Make quick family history discoveries with Ancestry Hints Make
                  quick family history discoveries with Ancestry Hints
                </p>
                <button className={styles.exploreNewDevelopmentCardExploreBtn}>
                  EXPLORE
                </button>
              </div>
            </div>
            <div className={styles.exploreNewDevelopmentCard}>
              <div>
                <img src="/Rectangle 8b.svg" alt="two people smiling" />
                <p className={styles.ancestryFamilyTree}>CHANGE MAKERS</p>
              </div>
              <div>
                <p className={styles.contentForExploreNewSection}>
                  Make quick family history discoveries with Ancestry Hints Make
                  quick family history discoveries with Ancestry Hints
                </p>
                <button className={styles.exploreNewDevelopmentCardExploreBtn}>
                  EXPLORE
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.firstPromotionsSection}>
        <div className={styles.subParent}>
          <div className={styles.firstPromotionsHeader}>
            <h4>Explore more with essential</h4>
            <p>Promotions, deals and special offers for you</p>
          </div>
          <div className={styles.cardFlexParent}>
            <div className={styles.card}>
              <div>
                <h5 className={styles.ancestry}>ANCESTRY- FAMILY TREE</h5>
                <p className={styles.ancestryText}>
                  Make quick family history discoveries with Ancestry Hints Make
                  quick family history discoveries with Ancestry Hints
                </p>
                <button
                  className={styles.ancestryBtn}
                  onClick={handleNavigationToForm}
                >
                  EXPLORE
                </button>
              </div>
              <div>
                <img src="/Rectangle 8.svg" alt="people smiling" />
              </div>
            </div>
            <div className={styles.card}>
              <div>
                <h5 className={styles.ancestry}>ANCESTRY- FAMILY TREE</h5>
                <p className={styles.ancestryText}>
                  Make quick family history discoveries with Ancestry Hints Make
                  quick family history discoveries with Ancestry Hints
                </p>
                <button
                  className={styles.ancestryBtn}
                  onClick={handleNavigationToForm}
                >
                  EXPLORE
                </button>
              </div>
              <div>
                <img src="/Rectangle 8.svg" alt="people smiling" />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.largeFrameShortVideosOnHomePage}>
        <LargeFrameShortVideosOnHomePage />
      </section>
      <section id="ourPartners" className={styles.ourPartnersContainer}>
        <h3>OUR PARTNERS</h3>
        <div>
          <p>
            This is a placeholder text for the content that is going to be here.
            Typing random words to fill in the space.
          </p>
        </div>
        <div></div>
        <div>
          <img src="/logo512.png" alt="placholder partner" />
          <img src="/logo512.png" alt="placholder partner" />
          <img src="/logo512.png" alt="placholder partner" />
          <img src="/logo512.png" alt="placholder partner" />
          <img src="/logo512.png" alt="placholder partner" />
          <img src="/logo512.png" alt="placholder partner" />
          <img src="/logo512.png" alt="placholder partner" />
          <img src="/logo512.png" alt="placholder partner" />
        </div>
      </section>
      <section className={styles.secondPromotionsSection}>
        <SecondPromotionsSection />
      </section>
      <section className={styles.supportPrideOfNigeriaContainer}>
        <div className={styles.supportPrideOfNgGradient}></div>
        <img src="/Rectangle 9.png" alt="placeholder background img" />
        <div>
          <h2>SUPPORT THE NEXT PRIDE OF NIGERIA</h2>
          <a href="#unknown-do-NOT-click">
            CLICK HERE TO FIND OUT MORE AND DONATE
          </a>
        </div>
      </section>
      <div className={styles.whiteSpace}></div>
    </article>
  );
};

export default HomePage;
