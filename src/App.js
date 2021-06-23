import React, { useState, useEffect } from 'react';
import './App.css';
import Pecho from './images/pecho.jpg'
import Piernas from './images/piernas.jpg'
import Woman from './images/woman.jpg'
import {db} from './firebase'

function App() {
  const [estado, setEstado] = useState([])

  const getContacto = async ()=>{
    await db.collection('contacto').onSnapshot((querysnapshot)=>{
      const docs = []
      querysnapshot.forEach((doc)=>{
        docs.push({...doc.data(), id: doc.id})
      })
      setEstado(docs)
    })
  }

  useEffect(() => {
    getContacto()
  }, [])

  return (
    <div className="">
      <div className="cabecera">
        <h1 className="titulo">PlanFit</h1>
      </div>
      {/* otra seccion */}
      <div className="">
        <div
          id="carouselExampleFade"
          className="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={Pecho} className="portada" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Piernas} className="portada" alt="..." />
            </div>
            <div class="carousel-item">
              <img src={Woman} className="portada" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleFade"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      {/* otra seccion */}
      <div className="container">
        <h2 className="text-center mt-4 mb-4">
          Lista de usuarios interesados en asesorias
        </h2>
      </div>

      {/* creacion de la tabla de informacion */}

      <div className="container">
        <table class="table table-hover">
          <thead className="table-dark">
            <tr>
              <th scope="col">NOMBRE</th>
              <th scope="col">APELLIDOS</th>
              <th scope="col">EDAD</th>
              <th scope="col" className="text-center">EMAIL</th>
            </tr>
          </thead>
          <tbody>
            {estado.map((user) => (
              <tr key={user.id} >
                <th scope="row">{user.nombre}</th>
                <td>{user.apellido}</td>
                <td>{user.edad}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
}

export default App;
