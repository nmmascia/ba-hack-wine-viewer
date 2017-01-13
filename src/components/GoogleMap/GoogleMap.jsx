import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

import mapStyle from './mapStyle.json';

export default class GoogleMap extends Component {
  componentDidMount() {
    this.setupMap();
  }

  componentDidUpdate(nextProps, props) {
    this.setupMap();
  }

  setupMap() {
    this.map = new google.maps.Map(this.elem, {});

    if (this.props.applyHeat) {
      this.applyHeat();
    } else {
      this.markMap();
      this.centerMap();
    }
  }

  markMap() {
    const map = this.map;

    // add marker to each location
    this.props.markerLocations.map((location) => {
      const marker = new google.maps.Marker({
        position: {
          lat: location.lat,
          lng: location.lng,
        },
        map,
      });

      marker.addListener('click', () => this.props.onMarkerClick(location.id));
    });
  }

  applyHeat() {
    const data = this.props.markerLocations.map(function(location) {
      return new google.maps.LatLng(location.lat, location.lng);
    });

    // create heatmap
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data,
    });

    heatmap.setMap(this.map);
    var styledMapType = new google.maps.StyledMapType(mapStyle);

    this.map.setZoom(4);
    this.map.setCenter({lat: 39.8282, lng: -98.5795});
    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
  }

  centerMap() {
    const latlngBounds = new google.maps.LatLngBounds();

    this.props.markerLocations.map(function(location){
      latlngBounds.extend({lat: location.lat, lng: location.lng});
    });

    // set center based on the aggregation of all the markers
    this.map.setCenter(latlngBounds.getCenter());
    this.map.fitBounds(latlngBounds);
  }

  render() {
    return (
      <div
        className={styles.map}
        ref={(elem) => {
          this.elem = elem;
        }}
      />
    );
  }
}

GoogleMap.propTypes = {
  applyHeat: PropTypes.bool.isRequired,
  markerLocations: PropTypes.array.isRequired,
  onMarkerClick: PropTypes.func.isRequired,
};
