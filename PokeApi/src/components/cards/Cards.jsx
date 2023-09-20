//importamos React, los estilos, y el módulo de la gráfica
import React from "react";
import styles from "./cards.module.scss";
import Grafica from "./chart/Grafica";


const Cards = () => {


  return (
    //Agragamos la clase styles.cards para que reciba el css del módulo scss y agregamos el componente gráfica para que aparezcan las estadísticas
    <div className={styles.card}>
      <div className="card-front">
        <img src="src\components\cards\img\Charizard.png" alt="charizard" />
        <Grafica />
      </div>
    </div>
  );
};

export default Cards;
