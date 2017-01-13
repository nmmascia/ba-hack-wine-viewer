import classNames from 'classnames';
import React from 'react';

import Tabs from 'components/Tabs';

import { WINE_VIEWER_TYPES, WINE_VIEWER_KEYS } from 'constants/wine-viewer-types';

import styles from './styles.css';

const WinesViewer = (props) => {
  return (
    <div>
      <div className={classNames(styles.viewerContainer, styles.header)}>
        <h1>Chardonnay 2017</h1>
        <p>Your Rating: 5 FREAKING STARS</p>
        <p>Delivered on: MAY</p>
      </div>

      <div className={styles.viewerContainer}>
        <Tabs
         tabs={
           WINE_VIEWER_KEYS.map((key) => ({
             key,
             name: WINE_VIEWER_TYPES[key].name,
             isActive: props.currentWineTab === key,
             onClick: () => props.changeWineTab(key),
           }))
         }
        />
        <div className={styles.currentTabContainer}>
          {JSON.stringify(props.currentWineTab, props.wines)}
        </div>
      </div>
    </div>
  );
};

export default WinesViewer;
