import React, { Component, PropTypes } from 'react';

import Tabs from 'components/Tabs';

import GoogleMap from 'components/GoogleMap'

import { MAP_VIEWER_TYPES, MAP_VIEWER_KEYS } from 'constants/map-viewer-types';

import styles from './styles.css';

import data from './data.json';

export default class WineMap extends Component {
  render() {
    return (
      <div>
        <Tabs
          tabs={
            MAP_VIEWER_KEYS.map((key) => ({
              key,
              name: MAP_VIEWER_TYPES[key].name,
              isActive: this.props.currentMapTab === key,
              onClick: () => this.props.onMapTabClick(key),
            }))
          }
        />
        <GoogleMap markerLocations={data} applyHeat={this.props.currentMapTab === MAP_VIEWER_TYPES.HEAT_MAP.key} />
      </div>
    );
  }
}

WineMap.propTypes = {
  currentMapTab: PropTypes.oneOf(MAP_VIEWER_KEYS).isRequired,
  onMapTabClick: PropTypes.func.isRequired,
};
