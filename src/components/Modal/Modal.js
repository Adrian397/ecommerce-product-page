import Thumbnail from "../Product/Thumbnail";
import MainImage from "../Product/MainImage";
import styles from "./Modal.module.css";
import Backdrop from "./Backdrop";
import LeftArrow from "./LeftArrow";
import RightArrow from "./RightArrow";
import Cross from "./Cross";
import Context from "../../store/context";
import { useContext } from "react";

const Modal = () => {
  const ctx = useContext(Context);

  return (
    <Backdrop>
      <div className={styles.modal}>
        <MainImage />
        <div>
          <Thumbnail
            img={require("../../assets/images/image-product-1-thumbnail.jpg")}
            onClick={ctx.firstPhoto}
          />
          <Thumbnail
            img={require("../../assets/images/image-product-2-thumbnail.jpg")}
            onClick={ctx.secondPhoto}
          />
          <Thumbnail
            img={require("../../assets/images/image-product-3-thumbnail.jpg")}
            onClick={ctx.thirdPhoto}
          />
          <Thumbnail
            img={require("../../assets/images/image-product-4-thumbnail.jpg")}
            onClick={ctx.fourthPhoto}
          />
        </div>
        <LeftArrow />
        <RightArrow />
        <Cross />
      </div>
    </Backdrop>
  );
};

export default Modal;
