import React from 'react';
import styles from './Notification.module.css';

const Notification = ({ message, type }) => {
  return (
    <div className={`${styles.notification} ${type === 'success' ? styles.success : styles.failure}`}>
      {message}
    </div>
  );
};

export default Notification;
