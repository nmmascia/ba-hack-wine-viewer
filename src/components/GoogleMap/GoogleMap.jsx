import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

export default class GoogleMap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.elem, {});

    if(this.props.applyHeat){
      this.applyHeat();
    }else{
      this.markMap();
    }

    this.centerMap();
  }

  markMap(){
    const map = this.map;

    //add marker to each location
    this.props.markerLocations.map(function(location){
      var marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.lng},
        map: map
      });
    });
  }

  applyHeat(){
    var data = this.props.markerLocations.map(function(location){
      return new google.maps.LatLng(location.lat, location.lng);
    })

    //create heatmap
    var heatmap = new google.maps.visualization.HeatmapLayer({
      data: data
    });

    heatmap.setMap(this.map);
  }

  centerMap(){
    const latlngBounds = new google.maps.LatLngBounds();

    this.props.markerLocations.map(function(location){
      latlngBounds.extend({lat: location.lat, lng: location.lng});
    });

    //set center based on the aggregation of all the markers
    this.map.setCenter(latlngBounds.getCenter());
    this.map.fitBounds(latlngBounds);
  }

  render() {
    return (
      <div className={styles.map}
        ref={(elem) => {
          this.elem = elem;
        }}
      />
    );
  }
}

GoogleMap.propTypes = {
  applyHeat: PropTypes.bool.isRequired,
  markerLocations: PropTypes.array.isRequired
};
