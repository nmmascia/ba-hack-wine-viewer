import React, { PropTypes } from 'react';

import Tabs from 'components/Tabs';

import { MAP_VIEWER_TYPES, MAP_VIEWER_KEYS } from 'constants/map-viewer-types';

import styles from './styles.css';

const WineMap = (props) => {
  return (
    <div className={styles.container}>
      <header
        style={{
          height: 50,
          backgroundColor: '#000',
          color: '#fff',
          fontSize: '1.25em',
          textTransform: 'uppercase',
          margin: '5px 0',
        }}
      >
        Your BlueApron Wine Map
      </header>

      <Tabs
        tabs={
          MAP_VIEWER_KEYS.map((key) => ({
            key,
            name: MAP_VIEWER_TYPES[key].name,
            isActive: props.currentMapTab === key,
            onClick: () => props.onMapTabClick(key),
          }))
        }
      />
      <div className={styles.mockMap} />
    </div>
  );
};

WineMap.propTypes = {
  currentMapTab: PropTypes.oneOf(MAP_VIEWER_KEYS).isRequired,
  onMapTabClick: PropTypes.func.isRequired,
};

export default WineMap;
