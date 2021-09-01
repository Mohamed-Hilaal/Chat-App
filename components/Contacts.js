import React,{useContext} from 'react'
import { ListGroup } from 'react-bootstrap'
import { ContactsProvider} from './context/ContactsProvider';

export default function Contacts() {
  const { contacts } = useContext(ContactsProvider)

  return (
    <ListGroup variant="flush">
      {contacts.map(contac => (
        <ListGroup.Item key={contac.id}>
          {contac.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
}