import React from 'react';
import camelCase from 'camelcase';

import { StyledLabel } from './QuoteForm';

const TextArea = ({ name, register, fieldOptions }) => {
  return (
    <StyledLabel
      className="field-label text-area"
      htmlFor={camelCase(name)}
      halfWidth={
        fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false
      }
    >
      <span className="label-text">{name}</span>
      <textarea
        className="text-area"
        name={camelCase(name)}
        ref={register({
          required:
            fieldOptions && fieldOptions.required
              ? fieldOptions.required
              : false,
        })}
      />
    </StyledLabel>
  );
};

export default TextArea;
