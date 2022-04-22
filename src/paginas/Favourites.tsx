import { FC } from "react";
import { useDispatch } from "react-redux";
import { cleanFav } from "../actions/favouritesAction";
import CharacterCard from "../componentes/personajes/CharacterCard";
import { useSelector } from "../store";
import Character from "../types/character.types";
import "../componentes/personajes/grilla-personajes.css";

/**
 * Esta es la pagina de favoritos. Aquí se deberan ver todos los personajes marcados como favoritos
 *
 * Uso:
 * ``` <Favourites /> ```
 *
 * @returns la pagina de favoritos
 */

const Favourites: FC = () => {
  const dispatch = useDispatch();
  const { favouritesMapa } = useSelector((state) => state.favourites);

  const cleanAll = () => {
    dispatch(cleanFav());
  };

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={cleanAll}>
          Limpiar Favoritos
        </button>
      </div>
      <div className="grilla-personajes">
        {!favouritesMapa[0] && (
          <div>No hay personajes seleccionados como favoritos</div>
        )}
        {favouritesMapa.map((character: Character) => {
          return (
            <CharacterCard
              key={"character_" + character.id}
              characterData={character}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Favourites;
