import styles from "./subHeading.module.css";
function SubHeading({ value }: { value: string }) {
  return (
    <div className={styles.subHeading}>
      <img src="/whitediamond.svg" alt="white diamond icon" />
      {value}
      <img src="/whitediamond.svg" alt="white diamond icon" />
    </div>
  );
}
export default SubHeading;
