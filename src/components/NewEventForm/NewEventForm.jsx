import { memo, useState, useEffect } from "react";

import Icon from "../../shared/components/Icon";

import styles from "./NewEventForm.module.scss";

const NewEventForm = ({ close }) => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    date: "",
    time: "",
  });

  useEffect(() => {
    const openedTask = localStorage.getItem("opened-task");
    if (!openedTask) return;
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const isEmpty = !formData.title || !formData.date;

  return (
    <div className={styles.wrapper}>
      <button type="button" className={styles.btnClose} onClick={close}>
        <Icon
          name={"icon-close"}
          width={15}
          height={15}
          className={styles.icon}
        />
      </button>
      <form onSubmit={handleSubmit}>
        <h1 className={styles.sign}>Add new idea item</h1>
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
        <button type="submit" disabled={isEmpty} className={styles.saveBtn}>
          Save
        </button>
      </form>
    </div>
  );
};

export default memo(NewEventForm);
