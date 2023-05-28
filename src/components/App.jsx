import { Home } from "pages/Home";
import PublicRoute from "./PublicRoute";
import { Route, Routes } from "react-router-dom";
import { Login } from "pages/Login";
import { SignUp } from "pages/Registration";
import { Contacts } from "pages/Contacts";
import PrivateRoute from "./PrivateRoute";
// import { ChakraProvider } from "@chakra-ui/react";
// import "./style.css";

export const  App = () => {
 
  return (
    <>
      {/* <ChakraProvider> */}
      <Routes> 
        <Route path="/" element={<PrivateRoute><Home/></PrivateRoute> }></Route>
        <Route path="/login" element={<PublicRoute><Login /></PublicRoute> }></Route>
         <Route path="/registration" element={<PublicRoute><SignUp /></PublicRoute> }></Route>
        <Route path="/contacts" element={<PrivateRoute><Contacts/></PrivateRoute> }> </Route>
      </Routes> 
      {/* </ChakraProvider> */}
    </>
  );
}
