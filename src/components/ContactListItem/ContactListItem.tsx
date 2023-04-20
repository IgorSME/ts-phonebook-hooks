import React from 'react';
import { IContactListItem } from '../../types/appTypes';
import { Item, Phone, Button } from './ContactsListItem.styled';

export const ContactListItem:React.FC<IContactListItem> = ({ name, number, onClick }) =>{
  return (
    <Item>
      <p>
        {name}:<Phone>{number}</Phone>
      </p>
      <Button type="button" onClick={onClick}>
        Delete
      </Button>
    </Item>
  );
}

