/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import formFieldHOC from '../hoc/formFieldHOC';
import FormField from './FormField';
import RadioButton from './RadioButton';
// import { buildLoggers } from '../modules/Log';
// const { log } = buildLoggers('RadioGroup');

const RadioGroup = ({
  id,
  name,
  label,
  value,
  options = [],
  onChange,
  onBlur,
  touched,
  error,
  success,
  warning,
  submitFailed,
}) => (
  <FormField {...{ touched, error, warning, success, submitFailed }} onBlur={() => onBlur(undefined)}>
    <legend className="field__label">{label}</legend>
    <div className="field__control is-horizontal">
      {
        options.map((option) => {
          const option_id = `${id}-${option.value}`;
          const is_selected = value === option.value;
          return (
            <RadioButton
              key={option_id}
              id={option_id}
              label={option.text}
              name={name}
              selected={is_selected}
              onChange={() => onChange(option.value)}
            />
          );
        })
      }
    </div>
  </FormField>
);

export default formFieldHOC(RadioGroup);
