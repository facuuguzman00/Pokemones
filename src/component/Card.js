import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardSpecies from "./CardSpecies";
import axios from "axios";



const handleClick = () => <CardSpecies/> 


const Cards = (pokemones) => {
  const [mostrarPokemon, setMostrarPokemon] = useState(true)

  const pokes = pokemones.pokemones;
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
        
        {mostrarPokemon ? <div className="row"> 
          <h1> <b className="text-white">Pokemones:</b> </h1>
      {pokes
        ? pokes.map((p) => (
            <Card key={p.entry_number} className=" rounded-lg m-4 bg-success border border-dark bg-gradient" style={{ width: "20rem" }}>
              <Card.Body>
                <Card.Title>Nombre de la especie: <b style={{fontSize : "30px"}}>{p.pokemon_species.name}</b></Card.Title>
                <Card.Text>
                    Id: {p.entry_number}
                </Card.Text>
                {/* <Card.Link className="btn btn-primary" href={} style={{width : "100%"}}> Mas informacion </Card.Link> */}
                <button className="btn btn-primary w-100" onClick={() => setMostrarPokemon(false)}>Mas Informacion </button>
              </Card.Body>
            </Card>
        ))
        : null}
        </div> : <CardSpecies/>}
    </div>
  );
};

export default Cards;
