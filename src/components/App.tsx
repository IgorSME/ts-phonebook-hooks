import React, { useState, useEffect } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Container } from '../App.styled';
import { IContactState, IFormSubmit } from '../types/appTypes';

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const App:React.FC = ()=> {
  const [contacts, setContacts] = useState(() => {
    const savedContacts = localStorage.getItem('contacts');
  return savedContacts ? JSON.parse(savedContacts) : initialContacts;
  });
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addNewContact = (contact:IFormSubmit) => {
    const name = contact.name.toLowerCase();
    if (contacts.find((elem:IContactState) => elem.name.toLowerCase() === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    const newContact = { id: nanoid(), ...contact };
    setContacts([newContact, ...contacts]);
  };
  const onChangeFilter = (e:React.ChangeEvent<HTMLInputElement>) => {
    setFilter(e.currentTarget.value);
  };

  const getFilteredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter((contact:IContactState) =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const onDeleteContact = (id:string) => {
    setContacts(contacts.filter((contact:IContactState) => contact.id !== id));
  };

  const filteredContacts = getFilteredContacts();
  return (
    <Container>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addNewContact} />

      <h2>Contacts</h2>
      <Filter value={filter} onChange={onChangeFilter} />
      <ContactList contacts={filteredContacts} onDelete={onDeleteContact} />
    </Container>
  );
}
