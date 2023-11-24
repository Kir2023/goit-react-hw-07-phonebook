import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addContact } from 'redux/operations';
import { selectContacts } from 'redux/selectors';

import css from './ContactForm.module.css';

export const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = ({ target }) => {
    const { name, value } = target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setPhone(value);
        break;
      default:
        return;
    }
  };

  const isNameInContacts = contactData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === contactData.toLowerCase()
    );

    if (hasDuplicates) {
      alert(`${contactData} is already in contacts.`);
      return true;
    }
    return false;
  };

  const handleDataSubmit = e => {
    e.preventDefault();

    if (!isNameInContacts(name)) {
      dispatch(addContact({ name, phone }));
      alert(`${name} succesfuly added in contacts`);
      setName('');
      setPhone('');
    }
  };

  return (
    <form className={css.form} onSubmit={handleDataSubmit}>
      <label className={css.formLabel}>Name </label>
      <input
        className={css.formName}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        placeholder="Enter name"
        value={name}
        onChange={handleInputChange}
      />
      <label className={css.formLabel}>Number </label>
      <input
        className={css.formNumber}
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        placeholder="Enter phone number"
        value={phone}
        onChange={handleInputChange}
      />
      <button className={css.formBtn} type="submit">
        Add contact
      </button>
    </form>
  );
};
