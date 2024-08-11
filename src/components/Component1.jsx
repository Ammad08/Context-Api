import React, { useContext } from 'react'
import { counterContext } from '../context/context'


const Component1 = () => {
  const value = useContext(counterContext)
  return (
    <div>
        <br />
    <b>Inner Bottom component</b>
       {" "} 
    {value.count}
    
    </div>
  )
}

export default Component1