import React, { Component, PropTypes } from 'react';

import ReactDOMServer from 'react-dom/server';

import styles from './styles.css';

import mapStyle from './mapStyle.json';

import InfoWindow from 'components/InfoWindow';

export default class GoogleMap extends Component {
  componentDidMount() {
    this.setupMap();
  }

  componentDidUpdate(nextProps, props) {
    this.setupMap();
  }

  shouldComponentUpdate(nextProps) {
    return this.props.applyHeat !== nextProps.applyHeat || this.props.markerLocations.length !== nextProps.markerLocations.length;
  }

  setupMap() {
    this.map = new google.maps.Map(this.elem, {});

    if (this.props.applyHeat) {
      this.applyHeat();
    } else {
      this.markMap();
    }
  }

  markMap() {
    const map = this.map;

    // add marker to each location
    this.props.markerLocations.forEach((location) => {
      const marker = new google.maps.Marker({
        position: {
          lat: location.lat,
          lng: location.lng,
        },
        map,
      });

      const out = ReactDOMServer.renderToString(<InfoWindow data={location} />)
      const infowindow = new google.maps.InfoWindow({
        content: out
      });

      marker.addListener('click', () => {
        infowindow.open(map, marker);
        this.props.onMarkerClick(location.id)
      });
    });

    this.map.setZoom(3);
    this.map.setCenter({lat: 40, lng: -10});
  }

  applyHeat() {
    const data = this.props.markerLocations.map((location) => {
      return new google.maps.LatLng(location.lat, location.lng);
    });

    // create heatmap
    const heatmap = new google.maps.visualization.HeatmapLayer({
      data,
    });

    heatmap.setMap(this.map);
    heatmap.set('radius', 20);
    const styledMapType = new google.maps.StyledMapType(mapStyle);

    this.map.setZoom(4);
    this.map.setCenter({lat: 39.8282, lng: -98.5795});
    this.map.mapTypes.set('styled_map', styledMapType);
    this.map.setMapTypeId('styled_map');
  }

  centerMap() {
    const latlngBounds = new google.maps.LatLngBounds();

    this.props.markerLocations.map((location) => {
      latlngBounds.extend({
        lat: location.lat,
        lng: location.lng
      });
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
