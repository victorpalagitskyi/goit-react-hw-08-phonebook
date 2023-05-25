import ContactForm from "components/ContactForm"
import ContactList from "components/ContactList"
import Filter from "components/Filter"

export const Contacts = () => { 

    return (
        <>
          <h1>Phonebook</h1>
         <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
    </>
    )

}   

