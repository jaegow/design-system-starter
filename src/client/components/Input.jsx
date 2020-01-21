/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import formFieldHOC from '../hoc/formFieldHOC';
import FormField from './FormField';
import { buildLoggers } from '../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log } = buildLoggers('Input');

// Input elements should not switch from uncontrolled to controlled (or vice versa).
// More info: https://fb.me/react-controlled-components
// let validationClass = '';
// if (touched) validationClass = !error ? 'is-success' : 'is-danger';
const Input = ({
  id,
  name,
  value,
  type = 'text',
  label,
  placeholder,
  onBlur,
  onChange,
  touched,
  error,
  warning,
  success,
  submitFailed,
}) => (
  <FormField {...{ touched, error, warning, success, submitFailed }}>
    <label className="field__label" htmlFor={id}>{label}</label>
    <div className="field__control">
      <input
        id={id}
        className="input"
        name={name}
        type={type}
        spellCheck="false"
        autoComplete="new-password"
        autoCorrect="off"
        placeholder={placeholder}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
      />
    </div>
  </FormField>
);
export default formFieldHOC(Input);
