import React, { Component, PropTypes } from 'react';

import styles from './styles.css';

export default class GoogleMap extends Component {
  componentDidMount() {
    this.map = new google.maps.Map(this.elem, {
      zoom: 8,
      center: {lat: 33, lng: -88}
    });

    if(this.props.applyHeat){
      this.applyHeat();
    }else{
      this.markMap();
    }
  }

  markMap(){
    const map = this.map;
    const latlngBounds = new google.maps.LatLngBounds();

    //add marker to each location
    this.props.markerLocations.map(function(location){
      var marker = new google.maps.Marker({
        position: {lat: location.lat, lng: location.lng},
        map: map
      });

      latlngBounds.extend(marker.position)
    });

    //set center based on the aggregation of all the markers
    map.setCenter(latlngBounds.getCenter());
    map.fitBounds(latlngBounds);
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
  zoom: PropTypes.number.isRequired,
  applyHeat: PropTypes.bool.isRequired,
  markerLocations: PropTypes.array.isRequired
};
