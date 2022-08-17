import React from 'react';
import { useTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import styles from './Tag.module.scss';
import imageTag from '../../images/Tag.png';
import imageTagActive from '../../images/TagActive.png';

function Tag(props) {
  const { price, active } = props;
  const { t } = useTranslation();

  const fractionalPrice = Math.floor((price % 1) * 100);

  return (
    <div
      className={styles.tag}
      style={{ backgroundImage: `url(${active ? imageTagActive : imageTag})` }}
    >
      <span className={styles.tag__currency}>$</span>
      <span className={styles.price}>{Math.trunc(price)}</span>
      <div className={styles.pennies}>
        <span className={styles.pennies__amount}>{fractionalPrice}</span>
        <span className={styles.pennies__text}>{t('perDay')}</span>
      </div>
    </div>
  );
}

Tag.propTypes = {
  price: PropTypes.number,
  active: PropTypes.bool,
};

Tag.defaultProps = {
  price: 0.00,
  active: false,
};

export { Tag };
