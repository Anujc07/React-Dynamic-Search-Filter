import React, { useState } from 'react';
import data from '../Data/data.json';
import style from './PracticeStyle.css';
function Practice() {
    const [value, setValue] = useState("");
    
    return (
    <>
 
        <input type="text" placeholder="Search.." name="search" onChange={(e)=> setValue(e.target.value.toLocaleLowerCase())}/>
   
        
        <div className='card' >
            {data.filter((item) => item.first_name.toLowerCase().includes(value) ).map((item, index) => (            
                <div key={index} className='card1' >
                    <h1>{item.id}</h1>
                    <p className='heading'><b>{item.first_name} {item.last_name}</b> </p>
                    <p>{item.gender}, {item.email}</p>
                    <span>({item.ip_address})</span>
                    <p>{item.description}</p>
                </div>                   
            
            ))}
        </div>
    </>
  )
}


export default Practice;

