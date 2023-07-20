import { Checkbox } from '@mui/material'
import React from 'react'

function CustomContainer({ind,displayButton,setDisplayButton}) {

  
  console.log(ind)
  const handleClick=(e)=>{
    e.preventDefualt();
    setDisplayButton(!displayButton);
  };

  return (
    
    <div style={{color:'blue',borderColor:'blue',marginBottom:'3px',borderStyle:'solid',float:'left',width:'50%'}}>
    {ind==='2'?<Checkbox onClick={(e)=>handleClick(e)}></Checkbox>:null}
    <div>{{ind}}</div>
    container
    </div>
    
  )
}

export default CustomContainer