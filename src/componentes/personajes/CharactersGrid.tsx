import { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import "./grilla-personajes.css";
import CharacterCard from "./CharacterCard";
import { useSelector } from "../../store";
import Character from "../../types/character.types";
import { fetchCharactersThunk } from "../../actions/charactersActions";

/**
 * Grilla de personajes para la pagina de inicio
 *
 * Deberás agregar las funciones necesarias para mostrar y paginar los personajes
 * @author Branko Beros
 *
 * @returns un JSX element
 */

const CharactersGrid: FC = () => {
  const dispatch = useDispatch();
  const { data, status } = useSelector((state) => state.data);
  useEffect(() => {
    dispatch(
      fetchCharactersThunk("https://rickandmortyapi.com/api/character/")
    );
  }, []);

  if (status === "LOADING")
    return (
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}
      >
        Cargando personajes...
      </div>
    );
  if (status === "FAILED")
    return (
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}
      >
        No se pudo cargar los personajes.
      </div>
    );
  if (!data || data?.results?.length === 0 || data.error?.length >= 1)
    return (
      <div
        style={{ display: "flex", justifyContent: "center", fontSize: "24px" }}
      >
        No hay personajes con ese nombre.
      </div>
    );

  return (
    <div className="grilla-personajes">
      {data?.results?.map((character: Character) => {
        return (
          <CharacterCard
            key={"character_" + character.id}
            characterData={character}
          />
        );
      })}
    </div>
  );
};

export default CharactersGrid;
