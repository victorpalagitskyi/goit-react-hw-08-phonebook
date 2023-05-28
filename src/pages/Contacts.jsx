import { ContactForm } from 'components/ContactForm';
import ContactList from 'components/ContactList';
import { Filter } from 'components/Filter';
// import css from './style.module.css'

export const Contacts = () => {
  return (
    <div>
      
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      <ContactList />
    </div>
  );
};
