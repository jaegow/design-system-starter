import React from 'react';
import './FieldMessage.scss';

const FieldMessage = ({ warning, touched, error, success, submitFailed }) => {
  let message = '';
  let messageClass = '';
  // let message = 'no message';
  // let messageClass = 'is-transparent';
  if (touched && warning) {
    message = warning;
    messageClass = 'is-warning';
  }
  if (submitFailed && error) {
    message = error;
    messageClass = 'is-error';
  }
  if (submitFailed && !error && typeof success === 'string') {
    message = success;
    messageClass = 'is-success';
  }

  return (
    <div className="field__message">
      <p className={`help ${messageClass}`}>{message}</p>
    </div>
  );
};

export default FieldMessage;
