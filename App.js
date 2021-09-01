import React,{useState} from 'react'
import Login from './components/Login'
import useLocalStorage from './components/useLocalStorage';
import Dashboard from './components/DashBoard'
import { ContactsProvider } from './components/context/ContactsProvider'

import Practice from "./Practice"


function App() {

  const [id, setId] = useLocalStorage('id')

  const [contacts, setContacts] = useLocalStorage('contacts', [])

  function createContact(id, name) {
    console.log(id)
    setContacts(prevContacts => {
      return [...prevContacts, { id, name }]
    })
  }
 


  const [Conversations ,setConversations] = useLocalStorage("Conversation",[])
console.log(Conversations)

function createConversations(recipients) {
  setConversations(prevConversations => {
    return [...prevConversations, { recipients, messages: [] }]
  })
}
  
  const [SelectConversationIndex,setSelectConversationIndex] = useState(0)  
       
  function sendMessage(recipients,text){
console.log(id)

  console.log(recipients)
    addMessageToConco({recipients,text,sender:id})

  }
 
     

     
          const formattedConversations = Conversations.map((Conversation,index) =>{
            const recipients = Conversation.recipients.map(recipient=>{
              const Contact = contacts.find(Contact=>{
                return Contact.id === recipient
              })
              const name = (Contact&&Contact.name)||recipient
              return {id:recipient,name}
            })
            const selected = index === SelectConversationIndex
            return {...Conversations,recipients,selected}
          })


            

     const convo = Conversations.map(convo=>
       
  <li>
    {convo.Messages}
  </li>   )


console.log(convo)

        /*  const getContacts =[{id: "56789", name:"Jack"} ,{id:"12345" , name :"Hilaal"}]
          const getConversations =[{id:"12345"}]

     const formt = getConversations.map(getConversation=>{
       const newformt =getConversation.id.map(getnewformt=>{
         const format = getContacts.find(getContact=>{
           return getContact.id === getnewformt
         })
         const name = (format&&format.name)
         return {name}
       })
         return{...getConversation,newformt}         
     })*/

     function addMessageToConco ({recipients,text,sender}){
      setConversations (prevConversations=>{

      
        let madeChange = false
        let newMessage = {text,sender}
        
      console.log(newMessage) 
        const newConversation = prevConversations.map(Conversations=>{
                      if(arrayCheck(Conversations.recipients,recipients)){
                      
                      madeChange = true
                      return {...Conversations,Messages:[...Conversations.Messages]}
                      }
                      else{
                      return Conversations
                      } 
        
                      }) 
      
      if(madeChange){
            
    
              
        return newConversation

      }
      else{
            return[ 
              
              ...prevConversations,{recipients,Messages:[newMessage]}
      ]
      }

      })
        }

  



  
  const value ={  contacts,
                 createContact,
                 createConversations,
                 Conversations : formattedConversations,
                 SelectConversationIndex,
                 sendMessage,
                formattedConversations,
                SelectedConversationIndex  :formattedConversations[SelectConversationIndex] ,  
              

                 setSelectConversationIndex}
  

  return (
<ContactsProvider.Provider value={value}  id={id} >
  { id?<Dashboard id={id}/>:<Login onIdSubmit={setId}/>}
   
      </ContactsProvider.Provider>
  )
}


function arrayCheck(a,b) {
  if (a.length !== b.length) return false

  a.sort()
  b.sort()

  return a.every((element, index) => {
    return element === b[index]
  })
}



export default App;