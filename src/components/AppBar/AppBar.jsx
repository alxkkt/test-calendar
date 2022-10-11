import styles from './AppBar.module.scss';

import NewEventButton from 'components/NewEventButton';
import DateFilter from 'components/DateFilter';

export default function AppBar() {
  return (
    <section>
      <NewEventButton />
      <DateFilter />
    </section>
  );
}
