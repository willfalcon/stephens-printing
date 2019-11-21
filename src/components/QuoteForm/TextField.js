import React from 'react';
import camelCase from 'camelcase';

import { StyledLabel } from './QuoteForm';

const TextField = ({ name, register, fieldOptions }) => {
  return (
    <StyledLabel
      className="field-label text-field"
      htmlFor={camelCase(name)}
      halfWidth={
        fieldOptions && fieldOptions.halfWidth ? fieldOptions.halfWidth : false
      }
    >
      <span className="label-text">{name}</span>
      <input
        className="text-input"
        type="text"
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

export default TextField;
