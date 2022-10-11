import { useState } from 'react';
import { useDispatch } from 'react-redux';

import NewEventButton from '../NewEventButton';
import DateFilter from '../DateFilter';
import Modal from '../../shared/components/Modal';
import EventForm from '../../shared/components/EventForm';

import { addEvent, deleteEvent } from 'redux/events/events-operations';

import styles from './AppBar.module.scss';

export default function AppBar() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = data => {
    const action = addEvent(data);

    dispatch(action);
  };

  const handleDelete = id => {
    const action = deleteEvent(id);

    dispatch(action);
  };

  const toggleModal = () => setIsModalOpen(prevState => !prevState);
  return (
    <section>
      <NewEventButton onClick={toggleModal} />
      <DateFilter />
      {isModalOpen && (
        <Modal close={toggleModal}>
          <EventForm
            onClose={toggleModal}
            onSubmit={handleSubmit}
            onDelete={handleDelete}
            text={'add new event'}
          />
        </Modal>
      )}
    </section>
  );
}
