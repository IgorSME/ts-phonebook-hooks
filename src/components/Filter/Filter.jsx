import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from 'components/ContactForm/ContactForm.styled';
export { Label, Input } from '../ContactForm/ContactForm.styled';

export function Filter({ value, onChange }) {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name </Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
}
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
