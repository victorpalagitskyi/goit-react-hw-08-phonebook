import Notiflix from "notiflix";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  contactsApi, deleteContact } from "redux/operation";
import { selectContacts, selectFilter, selectLoadingStatus } from "redux/selectors";




const ContactList = () => {

  const contacts = useSelector(selectContacts)
  const filters = useSelector(selectFilter)
  const isLoading = useSelector(selectLoadingStatus)
  const dispatch = useDispatch();
  
   useEffect(() => {
    dispatch(contactsApi());
  }, [dispatch]);
  
  const onDeleteContact = e => {
    dispatch(deleteContact(e.target.id));
    Notiflix.Notify.success(`Сontact deleted successfully`);
  };

  const visibleContacts = () =>
    contacts.filter(contact =>
      contact.name.toLowerCase().includes(filters.toLowerCase())
    );
  
  
  
   return (
    <>
    
      {isLoading ? <div>Loading...</div> : ''}
      <ul>
        {!isLoading && visibleContacts().map(({ name, id, number }) => (
          <li key={id}>
            <p>{name}</p>
            <p>{number}</p>
            <button type="button" id={id} onClick={onDeleteContact}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ContactList