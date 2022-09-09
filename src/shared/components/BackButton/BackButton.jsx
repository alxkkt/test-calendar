import PropTypes from "prop-types";
import styles from "./BackButton.module.scss";

const BackButton = ({ sign, handleDatePick }) => {
  const now = new Date();
  return (
    <button
      type="button"
      className={styles.btn}
      onClick={() => handleDatePick(now.getFullYear(), now.getMonth())}
    >
      {sign}
    </button>
  );
};

export default BackButton;

BackButton.propTypes = {
  sign: PropTypes.string.isRequired,
  handleDatePick: PropTypes.func,
};
