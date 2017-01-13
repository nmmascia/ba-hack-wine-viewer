import classNames from 'classnames';
import React, { PropTypes } from 'react';

import Tabs from 'components/Tabs';
import TastingNotes from 'components/TastingNotes';

import { WINE_VIEWER_TYPES, WINE_VIEWER_KEYS } from 'constants/wine-viewer-types';

import styles from './styles.css';

const renderTab = (props) => {
  switch (props.currentWineTab) {
    case WINE_VIEWER_TYPES.TASTING_NOTES.key: {
      return (
        <TastingNotes
          name={props.currentWine.name}
          notes={props.currentWine.notes}
          onSaveNotes={props.onSaveTastingNotes}
        />
      );
    }
  }
};

const WinesViewer = (props) => {
  return (
    <div>
      <div className={classNames(styles.viewerContainer, styles.header)}>
        <h1>{props.currentWine.name} {props.currentWine.year}</h1>
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
          {renderTab(props)}
        </div>
      </div>
    </div>
  );
};

WinesViewer.propTypes = {
  currentWineTab: PropTypes.string.isRequired,
  currentWine: PropTypes.shape({
    dateDelivered: PropTypes.string,
    id: PropTypes.number,
    name: PropTypes.string,
    notes: PropTypes.string,
    rating: PropTypes.number,
    varietal: PropTypes.string,
    year: PropTypes.string,
  }).isRequired,
  onSaveTastingNotes: PropTypes.func.isRequired,
  onWineTabClick: PropTypes.func.isRequired,
};

export default WinesViewer;
