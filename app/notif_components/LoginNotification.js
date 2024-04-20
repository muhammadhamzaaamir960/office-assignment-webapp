import React from 'react';
import styles from './LoginNotification.module.css';

const LoginNotification = ({ message, type }) => {
  return (
    <div className={`${styles.notification} ${type === 'success' ? styles.success : styles.failure}`}>
      {message}
    </div>
  );
};

export default LoginNotification;
