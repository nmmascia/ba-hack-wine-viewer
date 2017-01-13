import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WineMap from 'components/WineMap';

import { changeMapType } from 'reducers/map-viewer';

import { MAP_VIEWER_KEYS } from 'constants/map-viewer-types';

class MapContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentMapTab: PropTypes.oneOf(MAP_VIEWER_KEYS).isRequired,
  };

  changeMapType(mapType) {
    const { dispatch } = this.props;
    dispatch(changeMapType(mapType));
  }

  render() {
    return (
      <WineMap
        currentMapTab={this.props.currentMapTab}
        changeMapType={::this.changeMapType}
      />
    );
  }
}

export default connect((state, props) => {
  return {
    currentMapTab: state.mapViewer.mapType,
  };
})(MapContainer);
