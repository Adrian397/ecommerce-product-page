import { useState } from "react";
import { createContext } from "react";

const Context = createContext({
  modal: false,
  openModal: () => {},
  removeModal: () => {},
});

export const ContextProvider = (props) => {
  const [modal, setModal] = useState(false);

  const setModalHandler = () => {
    setModal(true);
  };

  const removeModalHandler = () => {
    setModal(false);
  };

  const context = {
    modal: modal,
    openModal: setModalHandler,
    removeModal: removeModalHandler,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
};

export default Context;
