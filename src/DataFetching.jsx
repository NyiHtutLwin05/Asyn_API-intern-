import { useState,useEffect } from 'react'



function DataFetching() {
   const [user,setUser]=useState([]) 
   const url = 'https://jsonplaceholder.typicode.com/users'
    useEffect(()=>{
       async function FetchData (){
         try{
          const req = await fetch(url);
          const json = await req.json();
          setUser(json)
          console.log(json);
         }catch(e){
          console.error(e)
         }
       }
       FetchData();
    },[]) 
    
  return (
    
     <div>
        <h1>User List</h1>
        <ol>
        {
          user.map((u)=>{
           return <li key={u.id}>{u.name}</li>
          })
        }
        </ol>
     </div>
  )
}

export default DataFetching
