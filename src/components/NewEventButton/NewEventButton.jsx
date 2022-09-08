import { memo, useState } from "react";
import { useDispatch } from "react-redux";

import Modal from "../../shared/components/Modal";
import NewEventForm from "../NewEventForm";

import { actions } from "../../redux/events/events-slice";

import styles from "./NewEventButton.module.scss";

const NewEventButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => setIsModalOpen(false);

  const addNewEvent = (data) => {
    const action = actions.addEvent(data);

    dispatch(action);
  };

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
          <NewEventForm
            close={closeModal}
            eventHandler={addNewEvent}
            sign={"Add New Event"}
          />
        </Modal>
      )}
    </div>
  );
};

export default memo(NewEventButton);
