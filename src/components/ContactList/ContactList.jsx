import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem/ContactListItem';

import { selectError, selectFilteredContacts } from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const error = useSelector(selectError);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {filteredContacts.length === 0 && !error ? (
          <p>The Phonebook is empty. Add your first contact.</p>
        ) : (
          filteredContacts.map(({ id, name, phone }) => (
            <ContactListItem key={id} id={id} name={name} phone={phone} />
          ))
        )}
      </ul>
    </div>
  );
};
