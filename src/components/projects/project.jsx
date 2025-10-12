import React from "react";
import "./Project.css";
import Card from "../cards/card.jsx";
import starwars from "../../assets/project starwars.png";
import videojeugo from "../../assets/project videojuego.webp";
import gym from "../../assets/project gym.webp";
import recetas from "../../assets/project recetas culinarias.jpg";

const Projects = ()=>{
    return(
        <div className="projects">
            <h2>Mis proyectos</h2>
            <p className="subtitulos">Algunos trabajos que he realizado</p>
            <div className="projects-grid">
                <Card
                    imagen={starwars}
                    titulo="starwars API"
                    descripcion="App que consume la API de Star Wars para mostrar personajes e información"
                    tecnologias="Javascript | HTML | CSS"
                    link = "https://github.com/ValentinaDelgadoRincon/Star-Wars"
                />
                <Card 
                imagen={videojeugo}
                titulo="Disney Princess"
                descripcion="Aplicación de consola interactiva que simula batallas entre princesas Disney con distintas clases"
                tecnologias="Javascript | Node.js"
                link="https://github.com/ValentinaDelgadoRincon/Disney_Princess"
                />
                <Card 
                imagen={gym}
                titulo="Gym ValMi"
                descripcion="aplicación de línea de comandos (CLI) desarrollada en Node.js, orientada a la gestión integral de un gimnasio."
                tecnologias="Javascript | Node.js | MongoDB"
                link="https://github.com/CamilaFlorez12/Gym_ValMi"
                />
                <Card 
                imagen={recetas}
                titulo="Recetas culinarias"
                descripcion="API REST que permite la gestión completa de usuarios, recetas e ingredientes para una plataforma de cocina."
                tecnologias="Javascript | Node.js | MongoDB | Express"
                link="https://github.com/ValentinaDelgadoRincon/Recetas_Culinarias"
                />
            </div>
        </div>
    )
}

export default Projects ;