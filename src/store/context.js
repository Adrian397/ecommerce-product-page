import { useEffect, useState } from "react";
import { createContext } from "react";

const data = [
  {
    id: "1",
    img: require("../assets/images/image-product-1.jpg"),
  },
  {
    id: "2",
    img: require("../assets/images/image-product-2.jpg"),
  },
  {
    id: "3",
    img: require("../assets/images/image-product-3.jpg"),
  },
  {
    id: "4",
    img: require("../assets/images/image-product-4.jpg"),
  },
];

const Context = createContext({
  modal: false,
  activeImg: undefined,
  activeImgStyle: undefined,
  openModal: () => {},
  removeModal: () => {},
  firstPhoto: () => {},
  secondPhoto: () => {},
  thirdPhoto: () => {},
  fourthPhoto: () => {},
  nextPhoto: () => {},
  prevPhoto: () => {},
});

export const ContextProvider = (props) => {
  const [modal, setModal] = useState(false);
  const [imgs, setImgs] = useState([]);
  const [index, setIndex] = useState(0);
  const [activeImg, setActiveImg] = useState(false);
  const [activeImgStyle, setActiveImgStyle] = useState(false);

  useEffect(() => {
    setImgs(data);

    if (!activeImg && imgs.length > 0) {
      setActiveImg(imgs[index]);
      setActiveImgStyle("first-photo");
    }
  }, [activeImg, imgs, index]);

  const setModalHandler = () => {
    setModal(true);
  };

  const removeModalHandler = () => {
    setModal(false);
  };

  const firstPhotoHandler = () => {
    setIndex(0);
    setActiveImg(imgs[index]);
    setActiveImgStyle("first-photo");
  };

  const secondPhotoHandler = () => {
    setIndex(1);
    setActiveImg(imgs[index]);
    setActiveImgStyle("second-photo");
  };

  const thirdPhotoHandler = () => {
    setIndex(2);
    setActiveImg(imgs[index]);
    setActiveImgStyle("third-photo");
  };

  const fourthPhotoHandler = () => {
    setIndex(3);
    setActiveImg(imgs[index]);
    setActiveImgStyle("fourth-photo");
  };

  const nextPhotoHandler = () => {
    if (index < imgs.length - 1) {
      setIndex((prevState) => prevState + 1);
    }
    if (index === imgs.length - 1) {
      setIndex(0);
    }

    setActiveImg(imgs[index]);
  };

  // const previousPhotoHandler = () => {
  //   setIndex((prevState) => prevState - 1);

  //   if (index === 0) {
  //     setIndex(imgs.length - 1);
  //   }

  //   setIndex((prevState) => prevState - 1);

  //   setActiveImg(imgs[index]);
  // };

  const context = {
    modal: modal,
    activeImg: activeImg,
    activeImgStyle: activeImgStyle,
    openModal: setModalHandler,
    removeModal: removeModalHandler,
    firstPhoto: firstPhotoHandler,
    secondPhoto: secondPhotoHandler,
    thirdPhoto: thirdPhotoHandler,
    fourthPhoto: fourthPhotoHandler,
    nextPhoto: nextPhotoHandler,
    // prevPhoto: previousPhotoHandler,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
