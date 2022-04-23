import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddCategory = ({setArray, array}) => {
 const [Input, setInput] = useState('')
 function handleInput(e) {
     setInput(e.target.value)
 }

 function handleSubmit(e) {
     e.preventDefault();
     if (Input.trim().length>2) {
        setArray([Input,...array])
        setInput('')
   
     }
   
     
 }
  return (
    <>
    <form onSubmit={handleSubmit}>
        <input 
        className='form-control'
        type='text'
        value={Input}
        onChange={handleInput}
        />

        <button className='btn btn-success my-2' type='submit'>Buscar GIF</button>
        </form>
    </>
  )
  
}

AddCategory.propTypes={

    setArray: PropTypes.func.isRequired

}
