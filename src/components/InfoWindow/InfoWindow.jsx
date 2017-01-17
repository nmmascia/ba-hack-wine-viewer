import React, { Component, PropTypes } from 'react';

import styles from './styles.css';
import StarRatingComponent from 'react-star-rating-component';

export default function InfoWindow(props){
  return(
    <div>
      <h1>{props.data.name}</h1>
      <StarRatingComponent
        value={props.data.rating}
        starCount={5}
        starColor="magenta"
        emptyStarColor="#000"
        onStarClick={props.onWineRatingChange}
      />
      <div>
        <img className={styles.bottleImage} src={props.data.bottle_image} />
        <p>{props.data.description}</p>
      </div>
    </div>
  );
}
