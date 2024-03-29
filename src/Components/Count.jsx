import React, { useEffect, useState } from 'react'

export const Count = ({fn}) => {
    const [count, setCount] = useState(0);

    useEffect(()=>{
if(count===10){
    fn(count)
}
    },[count])

  return (
    <div onClick={()=> setCount(count=> count+1)}>Count
    
    <p>{count}</p></div>
  )
}
