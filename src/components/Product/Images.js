import styles from "./Images.module.css";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";
import Context from "../../store/context";
import { useContext } from "react";

const Images = () => {
  const ctx = useContext(Context);
  return (
    <div className={styles.images}>
      <MainImage />
      <div>
        <Thumbnail
          img={require("../../assets/images/image-product-1-thumbnail.jpg")}
          onClick={ctx.firstPhoto}
          active={ctx.activeImgStyle === "first-photo" ? styles.active : ""}
        />

        <Thumbnail
          img={require("../../assets/images/image-product-2-thumbnail.jpg")}
          onClick={ctx.secondPhoto}
          active={ctx.activeImgStyle === "second-photo" ? styles.active : ""}
        />

        <Thumbnail
          img={require("../../assets/images/image-product-3-thumbnail.jpg")}
          onClick={ctx.thirdPhoto}
          active={ctx.activeImgStyle === "third-photo" ? styles.active : ""}
        />

        <Thumbnail
          img={require("../../assets/images/image-product-4-thumbnail.jpg")}
          onClick={ctx.fourthPhoto}
          active={ctx.activeImgStyle === "fourth-photo" ? styles.active : ""}
        />
      </div>
    </div>
  );
};

export default Images;
