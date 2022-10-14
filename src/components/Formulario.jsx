import React, { useState } from 'react'

const Formulario = () => {
    const [fruta, setFruta] = useState('');
    const [descripcion, setDescripcion] = useState('');
  return (
    <div className='container mt-5'>
        <h1 className='text-center'>CRUD BÁSICO</h1>
        <hr/>
        <form>
        <input 
                className='form-control mb-2'
                type="text" 
                placeholder='Ingrese Fruta'
                ></input>
                <input 
                className='form-control mb-2'
                type="text" 
                placeholder='Ingrese Descripción'></input>
                <button 
                className='btn btn-primary btn-block'
                type='submit'
                >Agregar</button>
        </form>

    </div>
  )
}

export default Formulario
