import Minus from "./IncDecOperators/Minus";
import Plus from "./IncDecOperators/Plus";
import styles from "./IncDecInput.module.css";
const IncDecInput = () => {
  return (
    <div className={styles.input}>
      <Minus />
      <span>0</span>
      <Plus />
    </div>
  );
};

export default IncDecInput;
