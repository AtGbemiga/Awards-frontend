import styles from "./app.module.css";

function Header(): JSX.Element {
  return (
    <>
      <section className={styles.section}>
        <img src="/logo512.png" alt="essential logo" className={styles.logo} />{" "}
        <h1>PRIDE OF NIGERIA</h1>
      </section>
      <section className={styles.section}>
        <h2>
          <img src="/diamond.png" alt="award diamond" /> AWARD{" "}
          <img src="/diamond.png" alt="award diamond" />
        </h2>
      </section>
    </>
  );
}
export default Header;
