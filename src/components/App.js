import React from "react";
import './App.css';
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {

  const contacts = [
    {
    id:"1",
    "name":"khushbu",
    "email":"khushbudadhe@gmail.com",
    },
    {
      id:"2",
    "name":"khush",
    "email":"khushbu40045@gmail.com",
    }
  ];

  return (
    <div className="ui container">
      <Header />
      <AddContact />
      <ContactList/>
    </div>
  );
}

export default App;
