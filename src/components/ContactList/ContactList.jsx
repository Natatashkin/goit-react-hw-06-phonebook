import React from 'react';

import IconButton from '../IconButton';
import { FaTrashAlt } from 'react-icons/fa';
import { List, Item, Name, Number } from './ContactList.styles';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { showfilteredContacts } from '../../helpers';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);
  const filteredContacts = showfilteredContacts(contacts, filter);

  return (
    <List>
      {filteredContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <IconButton
              type="button"
              background="blue"
              aria-label="Button to delete contact"
              onClick={() => dispatch(removeContact({ id, name }))}
            >
              <FaTrashAlt />
            </IconButton>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
