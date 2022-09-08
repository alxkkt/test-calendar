import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

import Icon from "../Icon";

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

    return () => {
      window.removeEventListener("keydown", onEscPress);
    };
  });

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };

  return createPortal(
    <div className={styles.Overlay} onClick={closeModal}>
      <div className={styles.Modal}>
        <button type="button" className={styles.btnClose} onClick={close}>
          <Icon name={"close"} width={15} height={15} className={styles.icon} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;

Modal.propTypes = {
  close: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
