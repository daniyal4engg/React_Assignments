// import { Axios } from 'axios';
import axios from 'axios'
import React, { useState } from 'react';
// import api from '@/services/api'

function Form(props) {

    const url="https://http://localhost:8080/user"
    const [data,setData] =useState({
        name:"",
        age:"",
        email:"",
    })
   function submit(e)
   {
       e.preventDefault()
       axios.post(url,{
           name:data.name,
           age:data.age,
           email:data.email
       })
       .then(res => {
           console.log(res.data)
       })
   }
    function handle(e)
    {
     const newdata={...data}
     newdata[e.target.id] = e.target.value
     setData(newdata)
     console.log(newdata)
    }
    return (
        <div>
            <form onSubmit={(e)=>submit(e)}>
            <input onChange={(e)=>handle(e)} id="name" value={data.name} placeholder="name" type="text"/>
            <input onChange={(e)=>handle(e)} id="age"  value={data.age} placeholder="age" type="number"/>
            <input onChange={(e)=>handle(e)} id="email"  value={data.email} placeholder="email" type="text"/>
            
            <input type="submit" value="submit"/>
            </form>

        </div>
    );
}

export default Form;
