import React from 'react';
import camelCase from 'camelcase';

import { StyledLabel } from './QuoteForm';
import ErrorMessage from './ErrorMessage';

const TextArea = ({ name, register, fieldOptions, error }) => {
  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
    const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  return (
    <StyledLabel
      className="field-label text-area"
      htmlFor={camelCase(name)}
      halfWidth={halfWidth}
    >
      <span className="label-text">
        {name}
        {required && "*"}
      </span>
      <textarea
        className="text-area"
        name={camelCase(name)}
        ref={register({
          required
        })}
      />
      {error && <ErrorMessage error={error} />}
    </StyledLabel>
  );
};

export default TextArea;
