import { useState, useEffect } from 'react';

import Icon from '../Icon';

import styles from './EventForm.module.scss';

export default function EventForm({
  onClose,
  onSubmit,
  onDelete,
  text,
  data = null,
  setEditedItem,
}) {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    date: '',
    time: '',
  });

  useEffect(() => {
    if (!data) return;

    setFormData({
      ...data,
    });
  }, [data]);

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setFormData(prevState => ({
      ...prevState,
      [name]: value,
    }));

    // if (data) {
    //   setEditedItem(prevState => ({
    //     ...prevState,
    //     [name]: value,
    //   }));
    // }
  };

  const handleSubmit = e => {
    e.preventDefault();

    onSubmit({ ...formData });

    setFormData({
      title: '',
      description: '',
      date: '',
      time: '',
    });

    onClose();
  };

  return (
    <div className={styles.wrapper}>
      <form onSubmit={handleSubmit}>
        <div className={styles.topTitle}>
          <div className={styles.signContainer}>
            <p className={styles.sign}>{text}</p>
            {/* {sign === 'edit event' && (
              <div className={styles.editIcon}>
                <Icon
                  name={'edit'}
                  width={15}
                  height={15}
                  className={styles.icon}
                />
              </div>
            )} */}
          </div>
          {/* {sign === 'edit event' && (
            <span className={styles.eventCreated}>
              Created At: {data.createdAt.toString().slice(0, 33)}
            </span>
          )} */}
        </div>
        <div className={styles.titleWrapper}>
          <label className={styles.titleLabel} htmlFor="title">
            Title<sup className={styles.star}>*</sup>
          </label>
          <input
            name="title"
            className={styles.titleInput}
            value={formData.title}
            onChange={handleChange}
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
            onChange={handleChange}
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
              onChange={handleChange}
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
              onChange={handleChange}
              value={formData.time}
            />
          </div>
        </div>
        <div className={styles.btnContainer}>
          {text === 'edit event' && (
            <button
              type="button"
              className={styles.deleteBtn}
              onClick={() => onDelete(data.id)}
            >
              <Icon
                name={'delete'}
                width={15}
                height={15}
                className={styles.icon}
              />
            </button>
          )}
          <button
            type="submit"
            disabled={!formData.title || !formData.date}
            className={styles.saveBtn}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}
