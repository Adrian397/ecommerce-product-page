import styles from "./Thumbnail.module.css";

const Thumbnail = (props) => {
  return (
    <img className={styles.thumbnail} src={props.img} alt="thumbnail"></img>
  );
};

export default Thumbnail;
