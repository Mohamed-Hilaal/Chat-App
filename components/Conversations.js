import React,{useContext} from 'react'
import { ListGroup } from 'react-bootstrap'
import { ContactsProvider} from './context/ContactsProvider';

export default function Converstaion() {

  const { setSelectConversationIndex, Conversations} = useContext(ContactsProvider)
  

 
 
const hey =   <ListGroup variant="flush">
{Conversations.map((Conversation, index) => (
  <ListGroup.Item
    key={index}
    action
   
    onClick={()=>setSelectConversationIndex(index)}
    active = {Conversation.selected}
  >
    {Conversation.recipients.map(r => r.name).join(', ')}
  </ListGroup.Item>
))}
</ListGroup>


 
 return (
  <div>
    {hey}
  </div>
)
}
