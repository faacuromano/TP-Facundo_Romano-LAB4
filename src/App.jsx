import React, { Fragment } from 'react'

import './App.css'

export function ageVerifier(age) {
  
  if (age < 0) {
    return null;
  } else {
    return age >= 18;
  }
}

const App = ({ age }) => {
  return(
    <Fragment>  
      <h1 className='title'>Prueba Testing</h1>
      <h2>Pasos para ejecutar: </h2>
      <a href={"https://github.com/faacuromano"}>1) Clonar repositorio de GitHub </a>
      <br></br>
      <a className='steps'> 2) (in terminal) $cd [ repository_local_url ] </a>
      <br></br>
      <a className='steps'> 2.b) (file explorer) Dirigirese a la carpeta contendora del repositorio ] </a>
      <br></br>
      <a className='steps'> 3) (in terminal) $npm test</a>
  </Fragment>
  )
}

export default App