import { Contacts } from "Page/contacts";
import { Home } from "Page/home";
import LoginPage from "Page/login";
import Registration from "Page/register";
import { Route, Routes } from "react-router-dom";

const  App = () => {
 
  return (
    <>
      <Routes> 
        <Route path="/" element={<Home/> }></Route>
        <Route path="/login" element={<LoginPage/> }></Route>
         <Route path="/registration" element={<Registration></Registration> }></Route>
        <Route path="/contacts" element={<Contacts/> }> </Route>
     </Routes> 
    </>
  );
}

export default App