import React,{useState,useContext} from 'react'
import {Form,InputGroup,Button} from "react-bootstrap"
import {ContactsProvider} from './context/ContactsProvider'




function OpenConversation() {

    const {SelectedConversationIndex,sendMessage} = useContext(ContactsProvider)
    const[text,setText] = useState("")
   
  
     function handleSubmit(e){
         e.preventDefault()
        console.log(SelectedConversationIndex.recipients.map(r => r.id))
         sendMessage(SelectedConversationIndex.recipients.map(r => r.id),text)
         setText("")
         
     }

    return (
        <div className="d-flex flex-column flex-grow-1 " >
           <div className="flex-grow-1 overflow-auto ">
           
                
           
           </div>

  
           <Form onSubmit={handleSubmit}>
               <Form.Group  className="m-2" >
                   <InputGroup>
                   <Form.Control as="textarea"   value={ text} required onChange={e=>setText(e.target.value)} style={{height:"70px", resize:'none'}}/>
                   <InputGroup.Append>
                   <Button variant="success" type="submit" >Submit</Button>
                   </InputGroup.Append>
                   
                   </InputGroup>
               </Form.Group>
           </Form>
        </div>

          


    )
}

export default OpenConversation
