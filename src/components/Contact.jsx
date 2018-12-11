import React from 'react';
import { Button } from 'reactstrap';

const Contact = (props) => {
  const {contact, delcon, toggleEdit} = props
  return (
    <tr>
      <th>{contact.name}</th>
      <th>{contact.phone}</th>
      <th>{contact.company}</th>
      <th>{contact.active ? 'Active': 'Inactive'}</th>
      <th> <Button color="warning" style={{marginRight: '10px'}} onClick={() => toggleEdit(contact)}>Edit</Button><Button color="danger" onClick={() => delcon(contact._id)}>Delete</Button></th>
    </tr>
    );
}

export default Contact;
