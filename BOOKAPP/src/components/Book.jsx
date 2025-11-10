import React, {useState} from 'react'
import './Book.css'
function Book(props) {
      const [color,setColor]=useState(0)
      function inc(){
        
   if(color<10) setColor(color+1)
   if(color>9){
    
    alert("max limit reaches");
   }
    
      }
     
      function dec(){
        if(color>0) setColor(color-1)
      }
    
  return (
    
    <div id='book'>
      <img src="https://makeenbooks.com/upload/ga/9781510421721.jpg" alt=""  height={100} width={100}/>
       <h1>{props.name}</h1>
      <h1>{props.price}</h1>
      <div>
        <button onClick={inc}>+</button>
      <span>{color}</span>
      <button onClick={dec}>-</button>
      </div>

     
      
    </div>
  )
}

export default Book