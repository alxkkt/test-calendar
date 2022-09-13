import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';

import useEventsByDate from '../../../shared/hooks/useEvents';
import Modal from '../../../shared/components/Modal';
import NewEventForm from '../../NewEventForm';

import {
  editEvent,
  deleteEvent,
} from '../../../redux/events/events-operations';

import styles from './Cell.module.scss';

const Cell = ({ isCurrentMonth, isToday, day, cellDate }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isEditorOpen, setIsEditorOpen] = useState(false);
  const dispatch = useDispatch();

  const events = useEventsByDate(cellDate);

  const closeModal = () => setIsEditorOpen(false);

  const handleEventClick = idx => {
    const item = events.find(event => event.id === idx);

    setSelectedEvent(item);

    setIsEditorOpen(true);
  };

  const onEventEdit = () => {
    const changedEvent = events.find(evt => evt.id === selectedEvent.id);
    const action = editEvent({
      ...selectedEvent,
      createdAt: changedEvent.createdAt,
    });

    dispatch(action);
  };

  const handleDeleteClick = id => {
    const action = deleteEvent(id);

    dispatch(action);

    setIsEditorOpen(false);
  };

  const elements = events.map(event => (
    <li
      key={nanoid()}
      className={styles.item}
      onClick={() => handleEventClick(event.id)}
    >
      {event.title}
    </li>
  ));

  return (
    <td
      className={isToday ? `${styles.cell} ${styles.active}` : `${styles.cell}`}
      data-current-month={isCurrentMonth}
    >
      <div className={styles.cellInner}>
        <p className={styles.day}>{day.slice(0, 2)}</p>
        <p className={styles.date}>{cellDate.getDate()}</p>
      </div>
      <ul className={styles.eventList}>{elements}</ul>
      {isEditorOpen && (
        <Modal close={closeModal}>
          <NewEventForm
            close={closeModal}
            eventHandler={onEventEdit}
            sign={'edit event'}
            data={selectedEvent}
            setEditedItem={setSelectedEvent}
            handleDeleteClick={handleDeleteClick}
          />
        </Modal>
      )}
    </td>
  );
};

export default Cell;

Cell.propTypes = {
  isCurrentMonth: PropTypes.bool.isRequired,
  isToday: PropTypes.bool.isRequired,
  day: PropTypes.string.isRequired,
  cellDate: PropTypes.any.isRequired,
};
