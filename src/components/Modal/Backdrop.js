import { useContext } from "react";
import styles from "./Backdrop.module.css";
import Context from "../../store/context";

const Backdrop = (props) => {
  const ctx = useContext(Context);
  return (
    <div onClick={ctx.removeModal} className={styles.backdrop}>
      {props.children}
    </div>
  );
};

export default Backdrop;
