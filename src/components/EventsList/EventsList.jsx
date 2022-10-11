import styles from './EventsList.module.scss';

import EventItem from './EventItem';

export default function EventsList({ events }) {
  //   const elements = events.map(({ id, title }) => (
  //     <li key={id} className={styles.item} onClick={() => handleEventClick(id)}>
  //       {title}
  //     </li>
  //   ));

  const handleEventClick = idx => {
    const item = events.find(event => event.id === idx);

    // setSelectedEvent(item);

    // setIsEditorOpen(true);
  };

  const elements = events.map(event => (
    <EventItem {...event} onClick={handleEventClick} />
  ));
  return <ul className={styles.eventList}>{elements}</ul>;
}
