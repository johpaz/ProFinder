//import React from "react";
const categoryNames = [
  "Carpintero",
  "Electricista",
  "Fontanero",
  "Mecánico",
  "Obrero",
  "Panadero",
  "Peluquero",
  "Soldador",
];

const HowDoesItWork = () => {
  return (
    <div>
      <h2>COMO FUNCIONA</h2>
      {categoryNames?.map((category)=> {
        <li>{category}</li>
      })}
    </div>
  );
};

export default HowDoesItWork;
