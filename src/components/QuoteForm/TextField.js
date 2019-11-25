import React from 'react';
import camelCase from 'camelcase';

import { StyledLabel } from './QuoteForm';
import ErrorMessage from "./ErrorMessage";

const TextField = ({ name, register, fieldOptions, error }) => {

  console.log(error);

  const required = fieldOptions && fieldOptions.required ? fieldOptions.required : false;
  const halfWidth = fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false;
  
  return (
    <StyledLabel
      className="field-label text-field"
      htmlFor={camelCase(name)}
      halfWidth={halfWidth}
    >
      <span className="label-text">{name}{required && '*'}</span>
      <input
        className="text-input"
        type="text"
        name={camelCase(name)}
        ref={register({ required })}
      />
      {error && <ErrorMessage error={error} />}
    </StyledLabel>
  );
};

export default TextField;
