import { useState } from 'react';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import EventsList from '../../EventsList';

import useEventsByDate from '../../../shared/hooks/useEvents';

import {
  editEvent,
  deleteEvent,
} from '../../../redux/events/events-operations';

import styles from './Cell.module.scss';

const Cell = ({ isCurrentMonth, isToday, day, cellDate, children }) => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const dispatch = useDispatch();

  const events = useEventsByDate(cellDate);

  const handleEventEdit = () => {
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

    // setIsEditorOpen(false);
  };

  return (
    <div
      className={isToday ? `${styles.cell} ${styles.active}` : `${styles.cell}`}
      data-current-month={isCurrentMonth}
    >
      <div className={styles.cellInner}>
        <p className={styles.day}>{day.slice(0, 2)}</p>
        <p className={styles.date}>{cellDate.getDate()}</p>
      </div>
      {events.length ? <EventsList events={events} /> : null}
    </div>
    // {/* {isEditorOpen && (
    //   <Modal close={closeModal}>
    //     <NewEventForm
    //       close={closeModal}
    //       eventHandler={handleEventEdit}
    //       sign={'edit event'}
    //       data={selectedEvent}
    //       setEditedItem={setSelectedEvent}
    //       handleDeleteClick={handleDeleteClick}
    //     />
    //   </Modal>
    // )} */}
  );
};

export default Cell;

Cell.propTypes = {
  isCurrentMonth: PropTypes.bool.isRequired,
  isToday: PropTypes.bool.isRequired,
  day: PropTypes.string.isRequired,
  cellDate: PropTypes.any.isRequired,
};
