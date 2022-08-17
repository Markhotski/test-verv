import React from 'react';
import initI18n from '../../configureI18n';
import { Banner } from '../Banner';
import styles from './App.module.scss';

initI18n();

function App() {
  return (
    <div className={styles.container}>
      <Banner />
    </div>
  );
}

export { App };
