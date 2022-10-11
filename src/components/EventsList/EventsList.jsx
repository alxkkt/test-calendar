import styles from './EventsList.module.scss';

import EventItem from './EventItem';

export default function EventsList({ events }) {
  const handleEventClick = idx => {
    const item = events.find(event => event.id === idx);

    console.log(item);

    // setIsEditorOpen(true);
  };

  const elements = events.map(event => (
    <EventItem key={event.id} {...event} onClick={handleEventClick} />
  ));
  return <ul className={styles.eventList}>{elements}</ul>;
}
