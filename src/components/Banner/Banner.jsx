import React, { useState } from 'react';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import { Widget } from '../Widget';
import styles from './Banner.module.scss';
import plans from '../../constants/data.json';
import { Modal } from '../Modal';

function Banner() {
  const { t } = useTranslation();
  const [selectedPlan, setPlan] = useState();
  const [visibleModal, setVisibleModal] = useState(false);

  const handleButtonClick = () => {
    setVisibleModal(true);
  };

  return (
    <div className={styles.banner}>
      <span className={classNames(styles.title, styles.banner__title)}>{t('title')}</span>
      <span className={classNames(styles.subtitle, styles.banner__subtitle)}>{t('subtitle')}</span>
      <span className={styles.bannerTitle}>{t('bannerTitle')}</span>
      <div role="radiogroup" className={classNames(styles.grid, styles.banner__grid)}>
        {plans && plans.map((plan) => (
          <Widget
            tabIndex={plan.id}
            key={plan.id}
            checked={selectedPlan && plan.id === selectedPlan.id}
            mostPopular={plan.mostPopular}
            title={t(`plans.${plan.type}.title`)}
            description={t(`plans.${plan.type}.description`, { price: plan.price })}
            pricePerDay={plan.pricePerDay}
            onClick={() => setPlan(plan)}
          />
        ))}
      </div>
      <button
        data-testid="banner-btn"
        onClick={handleButtonClick}
        className={styles.button}
      >
        {t('button')}
      </button>
      {visibleModal && (
        <Modal
          title={t('modalTitle')}
          content={`${t(`plans.${selectedPlan.type}.title`)} $${selectedPlan.price}`}
          onClose={() => setVisibleModal(false)}
        />
      )}
    </div>
  );
}

export { Banner };
