import classNames from 'classnames';
import React, { PropTypes } from 'react';

import Tabs from 'components/Tabs';

import { WINE_VIEWER_TYPES, WINE_VIEWER_KEYS } from 'constants/wine-viewer-types';

import styles from './styles.css';

const WinesViewer = (props) => {
  return (
    <div>
      <div className={classNames(styles.viewerContainer, styles.header)}>
        <h1>{props.currentWine.name}</h1>
        <h2>{props.currentWine.varietal}, {props.currentWine.year}</h2>
        <p>Rating: {props.currentWine.rating} out of 5</p>
        <p>Delivered on: {props.currentWine.dateDelivered}</p>
      </div>

      <div className={styles.viewerContainer}>
        <Tabs
          tabs={
           WINE_VIEWER_KEYS.map((key) => ({
             key,
             name: WINE_VIEWER_TYPES[key].name,
             isActive: props.currentWineTab === key,
             onClick: () => props.onWineTabClick(key),
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

WinesViewer.propTypes = {
  currentWineTab: PropTypes.string.isRequired,
  currentWine: PropTypes.shape({
    dateDelivered: PropTypes.string,
    name: PropTypes.string,
    rating: PropTypes.number,
    varietal: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  onWineTabClick: PropTypes.func.isRequired,
};

export default WinesViewer;
