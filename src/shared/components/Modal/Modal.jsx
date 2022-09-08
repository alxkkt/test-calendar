import React, { useEffect } from "react";

import { createPortal } from "react-dom";

import styles from "./Modal.module.scss";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ close, children }) => {
  const onEscPress = (e) => {
    if (e.code === "Escape") {
      close();
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", onEscPress);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onEscPress);
      document.body.style.overflow = "auto";
    };
  });

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>{children}</div>
    </div>,
    modalRoot
  );
};

export default Modal;
