/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import classnames from 'classnames';
import './CheckBox.scss';

const CheckBox = ({ id, selected, name, disabled, text, onClick }) => (
  <div className={classnames('checkbox-container', { 'is-selected': selected, 'is-disabled': disabled })}>
    <label htmlFor={id}>
      <div className="checkmark" onClick={onClick} />
      <input
        id={id}
        type="checkbox"
        name={name}
        checked={selected}
        onChange={onClick}
        disabled
      />
      <span>{text}</span>
    </label>
  </div>
);

export default CheckBox;
