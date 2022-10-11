import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addEvent } from '../../redux/events/events-operations';

import styles from './NewEventButton.module.scss';

const NewEventButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => setIsModalOpen(false);

  const addNewEvent = data => {
    const action = addEvent(data);

    dispatch(action);
  };

  return (
    <button
      type="button"
      aria-label="add event"
      className={styles.btn}
      onClick={() => setIsModalOpen(true)}
    >
      +
    </button>
  );
};

export default memo(NewEventButton);
