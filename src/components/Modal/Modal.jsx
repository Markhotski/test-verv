import React from 'react';
import PropTypes from 'prop-types';
import styles from './Modal.module.scss';

function Modal(props) {
  const { onClose, title, content } = props;

  return (
    <div className={styles.modal} data-testid="modal">
      <div className={styles.modal__header}>
        <span>{title}</span>
        <button onClick={onClose}>X</button>
      </div>
      <div className={styles.modal__content}>
        <span>{content}</span>
      </div>
    </div>
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  content: PropTypes.string,
};

Modal.defaultProps = {
  title: '',
  content: '',
};

export { Modal };
