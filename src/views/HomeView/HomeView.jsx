// @flow

import React from 'react';

import MapContainer from 'containers/MapContainer';
import WinesContainer from 'containers/WinesContainer';

import styles from './styles.css';

const HomeView = () => {
  return (
    <div className={styles.container}>
      <MapContainer />

      <WinesContainer />
    </div>
  );
};

export default HomeView;
