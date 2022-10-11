import styles from './EventItem.module.scss';

export default function EventItem({ id, title, onClick }) {
  return (
    <li className={styles.item} onClick={() => onClick(id)}>
      {title}
    </li>
  );
}
