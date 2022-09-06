import { memo } from "react";

import styles from "./Button.module.scss";

const Button = () => {
  return (
    <button type="button" aria-label="add event" className={styles.btn}>
      +
    </button>
  );
};

export default memo(Button);
