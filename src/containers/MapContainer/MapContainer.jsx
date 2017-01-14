import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import WineMap from 'components/WineMap';

import { changeMapType, fetchWinePinData, fetchHeatMapData } from 'reducers/map-viewer';
import { setCurrentWineId } from 'reducers/wines-viewer';

import { MAP_VIEWER_KEYS } from 'constants/map-viewer-types';

class MapContainer extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    currentMapTab: PropTypes.oneOf(MAP_VIEWER_KEYS).isRequired,
    currentUsersMappedWines: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      lat: PropTypes.number,
      lng: PropTypes.number,
    })).isRequired,
    allUsersMappedWines: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      lat: PropTypes.number,
      lng: PropTypes.number,
    })).isRequired,
  };

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchWinePinData(1));
    dispatch(fetchHeatMapData());
  }

  handleOnMapTabClick(mapType) {
    const { dispatch } = this.props;
    dispatch(changeMapType(mapType));
  }

  handleOnMarkerClick(wineId) {
    const { dispatch } = this.props;
    dispatch(setCurrentWineId(wineId));
  }

  render() {
    return (
      <WineMap
        currentMapTab={this.props.currentMapTab}
        onMapTabClick={::this.handleOnMapTabClick}
        onMarkerClick={::this.handleOnMarkerClick}
        currentUsersMappedWines={this.props.currentUsersMappedWines}
        allUsersMappedWines={this.props.allUsersMappedWines}
      />
    );
  }
}

export default connect((state, props) => {
  return {
    currentMapTab: state.mapViewer.mapType,
    currentUsersMappedWines: state.mapViewer.mappedPins,
    allUsersMappedWines: state.mapViewer.heatMap,
  };
})(MapContainer);
