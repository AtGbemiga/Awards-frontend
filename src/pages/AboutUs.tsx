import SubHeading from "../components/app/SubHeading";
import WinnersOnHomePage from "../components/home/WinnersOnHomePage";
import styles from "./styles/aboutUs.module.css";

function AboutUsPage() {
  return (
    <div>
      <SubHeading value="ABOUT PRIDE OF NIGERIA" />
      <p className={styles.aboutP}>
        The Daily Mirror's Pride of Britain Awards with TSB, celebrate the
        achievements of truly remarkable people who make our world a better
        place. Screened on ITV in October, it is the biggest awards show of its
        kind on British TV. Nominated by the public, the winners are from all
        walks of life, of all ages, and from all over the country. Their
        achievements are awe-inspiring and a lesson to us all. They say they are
        ordinary people, but their acts are truly extraordinary. Since the first
        Pride of Britain in 1999, royalty, prime ministers, and hundreds of
        leading figures from showbusiness, sport, politics and the arts have all
        taken part. Hosted by Carol Vorderman and Ashley Banjo, the Awards are
        screened in a primetime slot on ITV, where it is the highest rated
        awards show of its kind on British television.. Our winners come from
        tens of thousands of public nominations and stories of remarkable
        individuals discovered by our team of researchers. They are whittled
        down to a shortlist from which our judging panel, made up of celebrated
        figures in national life, chooses the winners. They are honoured at the
        glittering annual Pride of Britain Awards dinner at the Grosvenor House
        in London.
      </p>
      <WinnersOnHomePage />
    </div>
  );
}
export default AboutUsPage;
