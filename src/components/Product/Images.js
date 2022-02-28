import styles from "./Images.module.css";
import MainImage from "./MainImage";
import Thumbnail from "./Thumbnail";

const Images = () => {
  return (
    <div className={styles.images}>
      <MainImage />
      <div>
        <Thumbnail
          img={require("../../assets/images/image-product-1-thumbnail.jpg")}
        />
        <Thumbnail
          img={require("../../assets/images/image-product-2-thumbnail.jpg")}
        />
        <Thumbnail
          img={require("../../assets/images/image-product-3-thumbnail.jpg")}
        />
        <Thumbnail
          img={require("../../assets/images/image-product-4-thumbnail.jpg")}
        />
      </div>
    </div>
  );
};

export default Images;
