import { Formik, Form, Field, ErrorMessage } from 'formik';
import Notiflix from 'notiflix';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import  css  from '../pages/style.module.css'


const initialValues = {
  name: '',
  number: '',
};


export function ContactForm() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const handleSubmit = ({ name, number }, action) => {
    if (contacts.find(contact => contact.name === name) !== undefined) {
      Notiflix.Notify.failure(`${name} already in your contact book`);
      return;
    }

    dispatch(addContact({ name, number }));

    Notiflix.Notify.success(`You added ${name} to phonebook`);
    action.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
    >
      <Form autoComplete="off">
        <label>
          <p>Name</p>
          <Field className={'input'} type="text" name="name" />
          <ErrorMessage component="p"  name="name" />
        </label>

        <label>
          <p>Phone</p>
          <Field type="tel" name="number" />
          <ErrorMessage component="p"  name="number" />
        </label>

        <button type="submit">addContact</button>
      </Form>
    </Formik>
  );
}
