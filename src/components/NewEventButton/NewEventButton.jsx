import { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import { addEvent } from '../../redux/events/events-operations';

import styles from './NewEventButton.module.scss';

const NewEventButton = ({ onClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const closeModal = () => setIsModalOpen(false);

  const addNewEvent = data => {
    const action = addEvent(data);

    dispatch(action);
  };

  return (
    <button type="button" className={styles.btn} onClick={onClick}>
      +
    </button>
  );
};

export default memo(NewEventButton);
