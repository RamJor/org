
import { useState } from 'react';
import './App.css';
import Header from './componets/Header/Header';
import Formulario from './componets/form/Formulario';
import Miorg from './componets/Miorg';
import Equipo from './componets/Equipo';
import Footer from './componets/Footer';
import {v4 as uuid} from "uuid"

function App() {
  //Los useState agrega o crea estados al componente viajar 
  const [mostrarFormulario,actualizarMostrar] = useState(false)
  //Vamos a trabajar con arreglos vacios cuando trabajemos con la lista de colaboradores
  const [colaboradores, actualizarColaboradores] = useState([{
    id: uuid(),
    equipo: "Front End",
    foto:"https://github.com/Ramjor.png",
    nombre:"Jorge Ramírez",
    puesto: "instructor",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Programación",
    foto:"https://github.com/Raydberg.png",
    nombre:"Ray",
    puesto: "jefe",
    fav: true
  },
  {
    id: uuid(),
    equipo: "Devops",
    foto:"https://github.com/LucasPeraltaa.png",
    nombre:"Lucas Peralta",
    puesto: "Desarrollador sofware",
    fav: false
  },
  {
    id: uuid(),
    equipo: "Innovación y Gestión",
    foto:"https://github.com/Mariq12.png",
    nombre:"Maria Labanda",
    puesto: "Instructura",
    fav: false
  }
])

const [equipos, actualizarEquipos] = useState([
  {
    id: uuid(),
    titulo:"Programación",
    colorPrimario: "#57C278",
    colorSecundario: "#D9F7E9",
  },
  {
    titulo:"Front End",
    colorPrimario: "#82CFFA",
    colorSecundario: "#E8F8FF",
  },
  {
    id: uuid(),
    titulo:"Data Science",
    colorPrimario: "#A6D157",
    colorSecundario: "#F0F8E2",
  },
  {
    id: uuid(),
    titulo:"Devops",
    colorPrimario: "#E06B69",
    colorSecundario: "#FDE7E8",
  },
  {
    id: uuid(),
    titulo:"UX y diseño",
    colorPrimario: "#DB6EBF",
    colorSecundario: "#FAE9F5",
  },
  {
    id: uuid(),
    titulo:"Móvil",
    colorPrimario: "#FFBA05",
    colorSecundario: "#FFF5D9",
  },
  {
    id: uuid(),
    titulo:"Innovación y Gestión",
    colorPrimario: "#FF8A29",
    colorSecundario: "#FFEEDF",
  }
])




  //operador ternario--> condicion ? seMuestra : noSeMuestra
  const cambiarMostrar = ( ) => {
    actualizarMostrar(!mostrarFormulario);
  }
//Registrar colaborador
const registrarColaborador = (colaborador) => {
    console.log("Nuevo colaborador" , colaborador)
    //Spread operator crear una copia de los valores actuales y despues sea agrega el colaborador
    //... se crea una copia y despues de la coma el párametro nos ayuda a ir agregando info
    actualizarColaboradores([...colaboradores, colaborador])
}
//función para elminar colaboradores
const eliminarColaborador = (id) => {
  console.log("eliminar colaborador", id)

  const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !=id)
  actualizarColaboradores(nuevosColaboradores)
}

//Actualizar color
const actualizarColor = (color, id) => {
    console.log("Actualizar:", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario=color
      }
      return equipo
    })
    actualizarEquipos(equiposActualizados)
}
//Crear Equipo
const crearEquipo = (nuevoEquipo) => {
 console.log(nuevoEquipo)
 actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
}

//like
const like = (id) =>{
  console.log("like", id)
  const colaboradoresActualizados = colaboradores.map((colaborador) =>{
    if (colaborador.id === id){
      colaborador.fav =! colaborador.fav
    }
    return colaborador
  })
  actualizarColaboradores(colaboradoresActualizados)
}
  return (
    <div className="App">
      <Header/>
      {/* {mostrarFormulario ? <Formulario /> : <></>} */}
      {mostrarFormulario && <Formulario 
      equipos={equipos.map((equipo) => equipo.titulo)}
      registrarColaborador ={registrarColaborador}
      crearEquipo={crearEquipo}
      />
      }
      
      <Miorg cambiarMostrar={cambiarMostrar}/>
      
      {
        equipos.map((equipo) => <Equipo 
        datos={equipo} 
        key={equipo.titulo}
        colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
        eliminarColaborador = {eliminarColaborador}
        actualizarColor={actualizarColor}
        like={like}
        />
       )
      }

      <Footer/>
    </div>
  );
}

export default App
