import { FC } from "react";
import "./filtros.css";

const Filtros: FC = () => {
  return (
    <div className="filtros">
      <label htmlFor="nombre">Filtrar por nombre:</label>
      <input
        type="text"
        placeholder="Rick, Morty, Beth, Alien, ...etc"
        name="nombre"
      />
    </div>
  );
};

export default Filtros;
