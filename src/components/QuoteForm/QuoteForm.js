import React, { useState } from 'react';
import styled from 'styled-components';
import useForm from 'react-hook-form';
import camelCase from 'camelcase';

import TextField from './TextField';
import RadioButtons from './RadioButtons';
import TextArea from './TextArea';

import { encode } from '../utils';

const QuoteForm = ({ fields, successMessage }) => {

  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { register, handleSubmit, errors } = useForm();

  console.log(errors);

  const onSubmit = async data => {
    setLoading(true);
    console.log(data);
    console.log(errors);
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': 'quote-form', ...data }),
    })
      .then(res => {
        console.log(res);
        setSuccess(true);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
        console.error(error);
      });
  };

  return success ? (
    <SuccessMessage>{successMessage}</SuccessMessage>
  ) : (
    <Form
      className="quote-form"
      onSubmit={handleSubmit(onSubmit)}
      name="quote-form"
      data-netlify="true"
    >
      <input type="hidden" name="form-name" value="quote-form" />
      <fieldset disabled={loading}>
        {fields.map(field => {
          if (field._type === 'textField')
            return <TextField {...field} key={field._key} register={register} error={errors[camelCase(field.name)]} />;
          if (field._type === 'radioButtons')
            return (
              <RadioButtons
                {...field}
                key={field._key}
                register={register}
                error={errors[camelCase(field.name)]}
              />
            );
          if (field._type === 'textArea')
            return (
              <TextArea
                {...field}
                key={field._key}
                register={register}
                error={errors[camelCase(field.name)]}
              />
            );
          return null;
        })}
        <Submit type="submit" />
      </fieldset>
    </Form>
  );
  
};

const SuccessMessage = styled.p`
  
`;

const Form = styled.form`
  display: flex;
  flex-flow: row wrap;
  fieldset {
    padding: 0;
    margin: 0;
    border: 0;
  }
`;

const Submit = styled.input`
  background: ${({ theme }) => theme.red};
  color: white;
  font-weight: ${({ theme }) => theme.font.bold};
  border: 0;
  padding: 1rem 2rem;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledLabel = styled.label`
  flex: 0 0 ${({ halfWidth }) => (halfWidth ? '50%' : '100%')};
  display: flex;
  flex-direction: column;
  padding: 1rem;
  .label-text {
    font-weight: ${({ theme }) => theme.font.bold};
    color: black;
    margin-bottom: 0.5rem;
  }
  input,
  textarea {
    border-radius: 2px;
    border: 1px solid ${({ theme }) => theme.light};
    padding: 0.75rem 0.5rem;
  }
`;

export { StyledLabel };
export default QuoteForm;
