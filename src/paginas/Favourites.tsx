import { FC } from "react";
import CharactersGrid from "../componentes/personajes/CharactersGrid";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <Favourites /> ```
 *
 * @returns la pagina de favoritos
 */
const Favourites: FC = () => {
  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger">Test Button</button>
      </div>
      <CharactersGrid />
    </div>
  );
};

export default Favourites;
