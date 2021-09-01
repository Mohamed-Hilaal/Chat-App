
import { Modal ,Form, Button} from 'react-bootstrap'
import React, { useContext ,useState} from 'react'
import {ContactsProvider} from "./context/ContactsProvider"


function NewConversation({closeModal}) {
    const {contacts} = useContext(ContactsProvider)
    const {createConversations} = useContext(ContactsProvider)


const handleSubmit=(e)=>{
    e.preventDefault()
    closeModal()   
    createConversations(selectedContactIds)
}
const [selectedContactIds,setSelectedContactIds] = useState([])
console.log(selectedContactIds)
function handleCheckboxChange(contactId){
    setSelectedContactIds(prevSelectedContactIds=>{
     
       
        return [...prevSelectedContactIds, contactId]
     
    })
}


return (

    <>
      <Modal.Header closeButton> </Modal.Header>
          <Modal.Body>
              <Form onSubmit={handleSubmit}>
              {contacts.map(contact => (
            <Form.Group controlId={contact.id} key={contact.id}>
              <Form.Check
                type="checkbox"
                value={selectedContactIds.includes(contact.id)}
                label={contact.name}
                onChange={() => handleCheckboxChange(contact.id)}
              />
            </Form.Group>
          ))}
                   <Button type="Submit">Create</Button>
              </Form>
          </Modal.Body>
     </>
    )
}

export default NewConversation
