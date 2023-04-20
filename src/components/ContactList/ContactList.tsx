import React from 'react';
import { IContactList } from '../../types/appTypes';
import { ContactListItem } from '../ContactListItem/ContactListItem';
import { Contacts } from './ContactList.styled';

export const ContactList:React.FC<IContactList> = ({ contacts, onDelete })=> {
  return (
    <Contacts>
      {contacts.map(({ id, name, number }) => {
        return (
          <ContactListItem
            key={id}
            name={name}
            number={number}
            onClick={() => onDelete(id)}
          />
        );
      })}
    </Contacts>
  );
}
