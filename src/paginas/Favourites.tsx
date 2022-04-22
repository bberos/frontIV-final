import { FC } from "react";
import { render } from "react-dom";
import { useDispatch } from "react-redux";
import { cleanFav } from "../actions/favouritesAction";
import CharacterCard from "../componentes/personajes/CharacterCard";
import CharactersGrid from "../componentes/personajes/CharactersGrid";
import { useSelector } from "../store";
import Character from "../types/character.types";

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
  const { favoritosMapa } = useSelector((state) => state.favourites);

  return (
    <div className="container">
      <div className="actions">
        <h3>Personajes Favoritos</h3>
        <button className="danger" onClick={() => {}}>
          LIMPIAR FAVORITOS
        </button>
        {favoritosMapa.forEach((character: Character) => {
          console.log(character);
          return (
            <CharacterCard
              key={"character_" + character.id}
              characterData={character}
            />
          );
        })}
      </div>
      {/* <CharactersGrid /> */}
    </div>
  );
};

export default Favourites;
