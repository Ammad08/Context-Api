import React, {useContext} from 'react'
import Component1 from './Component1'
import { counterContext } from '../context/context'

const Button = () => {
  const value = useContext(counterContext)
  return (
    <div>

    <button  onClick={() => value.setCount((count) => count + 2)}><span> <b>Inner Top component</b><Component1/> </span></button>
    </div>
  )
}

export default Button