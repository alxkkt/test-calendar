import { memo, useState, useEffect } from "react";
import PropTypes from "prop-types";

import Icon from "../../shared/components/Icon";

import styles from "./NewEventForm.module.scss";

const NewEventForm = ({
  close,
  eventHandler,
  sign,
  data = null,
  setEditedItem,
  handleDeleteClick,
}) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });
  const isEmpty = !formData.title || !formData.date;

  useEffect(() => {
    if (data) {
      setFormData({
        ...data,
      });
    }
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();

    eventHandler(formData);

    setFormData({
      title: "",
      description: "",
      date: "",
      time: "",
    });
    setEditedItem(null);

    close();
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (data) {
      setEditedItem((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.topTitle}>
          <div className={styles.signContainer}>
            <p className={styles.sign}>{sign}</p>
            {sign === "edit event" && (
              <div className={styles.editIcon}>
                <Icon
                  name={"edit"}
                  width={15}
                  height={15}
                  className={styles.icon}
                />
              </div>
            )}
          </div>
          {sign === "edit event" && (
            <span className={styles.eventCreated}>
              Created at: {data.createdAt.toString()}
            </span>
          )}
        </div>
        <div className={styles.titleWrapper}>
          <label className={styles.titleLabel} htmlFor="title">
            Title<sup className={styles.star}>*</sup>
          </label>
          <input
            name="title"
            className={styles.titleInput}
            value={formData.title}
            onChange={handleInputChange}
            type="text"
            required={true}
          />
        </div>
        <div className={styles.descrWrapper}>
          <label htmlFor="description" className={styles.descrLabel}>
            Description
          </label>
          <textarea
            name="description"
            className={styles.descrInput}
            value={formData.description}
            onChange={handleInputChange}
            type="text"
            placeholder="Briefly describe your task..."
          ></textarea>
        </div>
        <div className={styles.dateTimeWrapper}>
          <div className={styles.dateWrapper}>
            <label htmlFor="date" className={styles.dateLabel}>
              Date<sup className={styles.star}>*</sup>
            </label>
            <input
              type="date"
              name="date"
              className={styles.dateInput}
              onChange={handleInputChange}
              value={formData.date}
            />
          </div>
          <div className={styles.timeWrapper}>
            <label htmlFor="time" className={styles.timeLabel}>
              Begin Time
            </label>
            <input
              type="time"
              name="time"
              className={styles.timeInput}
              onChange={handleInputChange}
              value={formData.time}
            />
          </div>
        </div>
        <div className={styles.btnContainer}>
          {sign === "edit event" && (
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => handleDeleteClick(data.id)}
            >
              <Icon
                name={"delete"}
                width={15}
                height={15}
                className={styles.icon}
              />
            </button>
          )}
          <button type="submit" disabled={isEmpty} className={styles.saveBtn}>
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(NewEventForm);

NewEventForm.propTypes = {
  close: PropTypes.func.isRequired,
  eventHandler: PropTypes.func.isRequired,
  sign: PropTypes.string.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }),
  setEditedItem: PropTypes.func.isRequired,
  handleDeleteClick: PropTypes.func.isRequired,
};
