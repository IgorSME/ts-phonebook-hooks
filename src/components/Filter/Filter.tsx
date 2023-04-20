import React from 'react';

import { Input, Label } from '../ContactForm/ContactForm.styled';
import { IFilter } from '../../types/appTypes';


export const Filter:React.FC<IFilter> = ({ value, onChange }) => {
  return (
    <div>
      <Label htmlFor="filter">Find contacts by name </Label>
      <Input type="text" name="filter" value={value} onChange={onChange} />
    </div>
  );
}

