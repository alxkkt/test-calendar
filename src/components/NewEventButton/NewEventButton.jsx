import { memo, useState } from "react";

import Modal from "../../shared/components/Modal";
import NewEventForm from "../NewEventForm";

import styles from "./NewEventButton.module.scss";

const NewEventButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const closeModal = () => setIsModalOpen((prevState) => !prevState);

  return (
    <div className={styles.wrapper}>
      <button
        type="button"
        aria-label="add event"
        className={styles.btn}
        onClick={() => setIsModalOpen(true)}
      >
        +
      </button>
      {isModalOpen && (
        <Modal close={closeModal}>
          <NewEventForm close={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default memo(NewEventButton);
