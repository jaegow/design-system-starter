import React from 'react';
import './BurgerButton.scss';

const BurgerButton = ({ onClick }) => (
  <button type="button" className="button is-burger" aria-label="menu" aria-expanded="false" onClick={onClick}>
    <span aria-hidden="true" />
    <span aria-hidden="true" />
    <span aria-hidden="true" />
  </button>
);

export default BurgerButton;
