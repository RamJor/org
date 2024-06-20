import "./Formulario.css";
import Campo from "../Campo";
import ListaOpciones from "../Listaopciones";
import Button from "../Button";
import { useState } from "react";
const Formulario = (props) => {
  const [nombre, actualizarNombre] = useState("");
  const [puesto, actualizarPuesto] = useState("");
  const [foto, actualizarFoto] = useState("");
 const [equipo, actualizarEquipo] = useState("")

 const [titulo, actualizarTitulo] = useState("")
 
 const [color, actualizarColor] = useState("")

 const {registrarColaborador,crearEquipo} = props
 
 const manejarEnvio = (e) => {
    e.preventDefault();
    console.log("Manejar el envio");
    let datosEnviar = {
      nombre:nombre,
      puesto:puesto,
      foto:foto,
      equipo:equipo
    }
    //Con esto tomamos los datos y los enviamos al app
    registrarColaborador(datosEnviar)
  };

const manejarNuevoEquipo = (e)=>{
  e.preventDefault()
  crearEquipo({titulo,  colorPrimario:color})
} 

  return (
    <section className="formulario">
      <form onSubmit={manejarEnvio}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Nombre"
          placeholder="nombre"
          required
          valor={nombre}
          actualizarValor={actualizarNombre}
        />
        <Campo
          titulo="Puesto"
          placeholder="Ingresar puesto"
          required
          valor={puesto}
          actualizarValor={actualizarPuesto}
        />
        <Campo
          titulo="Foto"
          placeholder="Ingresar enlace de foto"
          required
          valor={foto} 
          actualizarValor={actualizarFoto}
        />
        <ListaOpciones 
        valor = {equipo} 
        actualizarEquipo={actualizarEquipo}
        equipos={props.equipos}/>
        <Button>Crear</Button>

      </form>
      <form onSubmit={manejarNuevoEquipo}>
        <h2>Rellena el formulario para crear el colaborador.</h2>
        <Campo
          titulo="Titulo"
          placeholder="Ingresar titulo"
          required
          valor={titulo}
          actualizarValor={actualizarTitulo}
        />
        <Campo
          titulo="Color"
          placeholder="Ingresar color en Hex"
          required
          valor={color}
          actualizarValor={actualizarColor}
          type="color"
        />
        <Button>
        Registrar equipo
        </Button>
        </form>
    </section>
  );
};

export default Formulario;
