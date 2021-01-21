import React from 'react';

export const checkInputField = (errors, touched, name) => {
  return errors[name] && touched[name] && <div style={{ color: 'red' }}>{errors[name]}</div>;
};

const errorBorder = {
  control: (provided) => ({
    ...provided,
    borderColor: 'red',
  }),
};

const successBorder = {
  control: (provided) => ({
    ...provided,
    borderColor: 'green',
  }),
};

export const selectBorderColor = (errors, touched, values, name) => {
  return errors[name] && touched[name]
    ? errorBorder
    : touched[name] && values[name]
    ? successBorder
    : {};
};

export const inputBorderColor = (errors, touched, values, name) => {
  return errors[name] && touched[name]
    ? { borderColor: 'red' }
    : touched[name] && values[name]
    ? { borderColor: 'green' }
    : {};
};
