import React from 'react';

function Card() {
  return (
    <template id="card" className="card">
      <div className="place">
        <button className="place__button-trash" type="button"></button>
        <img src="#" alt="" className="place__photo" />
        <div className="place__background">
          <h2 className="place__name"></h2>
          <div className="place__wrapper">
            <button className="place__button-like" type="button"></button>
            <p className="place__count-like">1</p>
          </div>
        </div>
      </div>
    </template>
  );
}

export default Card;
