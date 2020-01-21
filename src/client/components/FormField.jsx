import React from 'react';
import classnames from 'classnames';
import FieldMessage from './FieldMessage';
import './FormField.scss';
// import { buildLoggers } from '../modules/Log';
// const { log } = buildLoggers('FormField');

const FormField = ({ className, children, ...props }) => {
  const {
    error,
    touched,
    success,
    warning,
    submitFailed,
  } = props;

  return (
    <fieldset className={
      classnames('field', {
        'field--warning': touched && warning,
        'field--error': submitFailed && (error !== undefined && typeof error === 'string'),
        'field--success': touched && !error && success,
      })
    }
    >
      {children}
      {/* eslint-disable-next-line react/jsx-props-no-spreading */}
      <FieldMessage {...{ error, warning, touched, success, submitFailed }} />
    </fieldset>
  );
};

export default FormField;
