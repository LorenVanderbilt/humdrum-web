import React from 'react';
import './photo.css';

export default function Photo({ image, credit, alt }) {
  return (
    <div className={'container'}>
      <div className={'photo'}>
        <img src={image} alt={alt} />
        <div className={'caption'}>Photo by {credit}</div>
      </div>
    </div>
  );
}
