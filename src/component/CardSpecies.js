import React from "react";
import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";


const pokemones = [
    {name: "pikachu", habitat: "electricidad", ataque:"90"},
    {name: "Rowlet", habitat: "agua", ataque:"40"},
    {name: "Scyther", habitat: "fuego", ataque:"50"},
    {name: "Ralts", habitat: "agua", ataque:"20"},
    {name: "Togep", habitat: "agua", ataque:"60"},
    {name: "Togepi", habitat: "tierra", ataque:"60"},
    {name: "Arceus", habitat: "agua", ataque:"90"},
    {name: "Ponyta", habitat: "fuego", ataque:"90"},
    {name: "Drifloon", habitat: "agua", ataque:"50"},
    {name: "Eevee", habitat: "tierra", ataque:"40"}
]


const CardSpecies = () => {
  return (
    <div className="container d-flex justify-content-center align-items-center h-100">
      <div className="row">
        <h1>
          {" "}
          <b className="text-white">Pokemones:</b>{" "}
        </h1>
        {pokemones.map((p) => (
            <Card
          className=" rounded-lg m-4 bg-success border border-dark bg-gradient"
          style={{ width: "20rem" }}
        >
          <Card.Body>
            <Card.Title>
              Nombre de la especie: <b style={{ fontSize: "30px" }}> {p.name} </b>
            </Card.Title>
            <Card.Text>
              habitat: {p.habitat} <br/>
              Cantidad de ataque: {p.ataque}
            </Card.Text>
          </Card.Body>
        </Card>
        ))}
        
      </div>
    </div>
  );
};

export default CardSpecies;
