import styles from "./RightArrow.module.css";
const RightArrow = () => {
  return (
    <div className={styles.arrow}>
      <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
        <path d="m2 1 8 8-8 8" strokeWidth="3" fill="none" fillRule="evenodd" />
      </svg>
    </div>
  );
};

export default RightArrow;
