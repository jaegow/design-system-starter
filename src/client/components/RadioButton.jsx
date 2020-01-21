/* eslint-disable jsx-a11y/click-events-have-key-events,jsx-a11y/no-static-element-interactions */
import React from 'react';
import classnames from 'classnames';
import './RadioButton.scss';

const RadioButton = ({ id, selected, disabled, name, label, onChange, onClick }) => (
  <div
    className={classnames('radio-button', { 'is-selected': selected, 'is-disabled': disabled })}
    onClick={onClick}
  >
    <input
      type="radio"
      id={id}
      name={name}
      value={selected}
      disabled={disabled}
      checked={selected}
      onChange={onChange}
    />
    {
      label && (<label htmlFor={id}>{label}</label>)
    }
  </div>
);

export default RadioButton;
