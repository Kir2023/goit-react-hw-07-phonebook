import { useSelector } from 'react-redux';

import ContactListItem from 'components/ContactListItem/ContactListItem';
import { Loader } from 'components/Loader/Loader';

import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';

import css from './ContactList.module.css';

export const ContactList = () => {
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);
  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <div>
      <ul className={css.contactList}>
        {isLoading && !error ? (
          <Loader />
        ) : filteredContacts.length === 0 && !error ? (
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
