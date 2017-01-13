import React, { Component, PropTypes } from 'react';

import Tabs from 'components/Tabs';

import GoogleMap from 'components/GoogleMap'

import { MAP_VIEWER_TYPES, MAP_VIEWER_KEYS } from 'constants/map-viewer-types';

import styles from './styles.css';

import data from './data.json';

export default class WineMap extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <div>
        <Tabs
          tabs={
            MAP_VIEWER_KEYS.map((key) => ({
              key,
              name: MAP_VIEWER_TYPES[key].name,
              isActive: this.props.currentMapTab === key,
              onClick: () => this.props.changeMapType(key),
            }))
          }
        />
        <GoogleMap markerLocations={data} applyHeat={false} zoom={7}/>
      </div>
    );
  }
}

WineMap.propTypes = {
  currentMapTab: PropTypes.oneOf(MAP_VIEWER_KEYS).isRequired,
  changeMapType: PropTypes.func.isRequired,
};
