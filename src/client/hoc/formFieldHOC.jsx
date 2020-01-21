/* eslint-disable react/jsx-props-no-spreading */
import React, { PureComponent } from 'react';
import { Field } from 'redux-form';
import uniqueId from 'lodash/uniqueId';
import { buildLoggers } from '../modules/Log';

// eslint-disable-next-line no-unused-vars
const { log } = buildLoggers('formFieldHOC');

function formFieldHOC(Component) {
  const renderField = ({ input, meta, children, ...props }) => {
    const {
      name,
      value,
      onFocus,
      onChange,
      onBlur,
      checked,
      // onDrop,
      // onDragStart
    } = input;

    const {
      touched,
      error,
      warning,
      form,
      submitFailed,
    } = meta;

    const mergedProps = {
      ...props,
      value,
      checked,
      name,
      onFocus,
      onBlur,
      onChange,
      warning,
      error,
      touched,
      submitFailed,
      form,
    };

    return (
      <Component {...mergedProps} />
    );
  };

  class FormFieldHOC extends PureComponent {
    constructor(props) {
      super(props);
      this.id = uniqueId('input-id-');
    }

    render() {
      const { id } = this;
      return (
        <Field
          {...this.props}
          id={id}
          component={renderField}
        />
      );
    }
  }

  return FormFieldHOC;
}

export default formFieldHOC;
