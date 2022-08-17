import classNames from 'classnames';
import React from 'react';
import { t } from 'i18next';
import PropTypes from 'prop-types';
import { Tag } from '../Tag';
import styles from './Widget.module.scss';
import { ReactComponent as Radio } from '../../icons/Radio.svg';
import { ReactComponent as RadioActive } from '../../icons/RadioActive.svg';
import mostPopularopularImage from '../../images/Rectangle.png';

function Widget(props) {
  const {
    checked,
    title,
    description,
    pricePerDay,
    mostPopular,
    onClick,
  } = props;

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      onClick();
    }
  };

  return (
    <div
      data-testid="widget"
      className={classNames(styles.widget, checked && styles.widget_active)}
      onClick={onClick}
      onKeyDown={handleKeyPress}
      tabIndex={0}
      aria-checked={checked}
      role="radio"
    >
      <div className={styles.radio}>
        {checked ? <RadioActive /> : <Radio />}
      </div>
      <div className={styles.widget__info}>
        {mostPopular && (
          <div
            className={classNames(styles.mostPopular, styles.widget__mostPopular)}
            style={
              { backgroundImage: `url(${mostPopularopularImage})`, backgroundRepeat: 'no-repeat' }
            }
          >
            <span>{t('mostPopular')}</span>
          </div>
        )}
        <span className={styles.widget__info__title}>
          {title}
        </span>
        <span className={styles.widget__info__description}>
          {description}
        </span>
      </div>
      <Tag price={pricePerDay} active={checked} />
    </div>
  );
}

Widget.propTypes = {
  checked: PropTypes.bool,
  title: PropTypes.string,
  description: PropTypes.string,
  pricePerDay: PropTypes.number,
  mostPopular: PropTypes.bool,
  onClick: PropTypes.func.isRequired,
};

Widget.defaultProps = {
  checked: false,
  title: '',
  description: '',
  pricePerDay: 0.00,
  mostPopular: false,
};

export { Widget };
