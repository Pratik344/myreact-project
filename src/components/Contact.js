import React from 'react'
import { Link } from 'react-router-dom';

const Contact = (props) => {

  return (
    <div className="container my">
      <div className="d-flex">
        <h1>Contact List</h1>
        <Link to="/mycontact/contacts/new">
          <button className="btn btn-success">Add Contact</button>
        </Link>
      </div>
      {props.contactList.map(user => (
        <li key={user.id}>
          <Link to={`/mycontact/contact/${user.id}`}>{user.name}</Link>
        </li>
      ))}
    </div>
  )
}


export default Contact;
