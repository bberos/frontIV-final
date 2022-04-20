import { FC, useEffect } from "react";
import {
  TypedUseSelectorHook,
  useDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
import "./grilla-personajes.css";
import CharacterCard from "./CharacterCard";
import { IRootState } from "../../store";
import { fetchCharactersThunk } from "../../actions/characterActions";
export const useSelector: TypedUseSelectorHook<IRootState> = useReduxSelector;
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
  const { characters, status } = useSelector((state) => state.characters);
  useEffect(() => {
    dispatch(fetchCharactersThunk(""));
  }, []);

  if (status === "LOADING") return <div>Cargando personajes...</div>;
  if (status === "FAILED") return <div>No se pudo cargar los personajes.</div>;
  if (!characters || characters.length === 0) return <></>;
  return (
    <div className="grilla-personajes">
      {characters?.map((character) => {
        return (
          <CharacterCard
            key={"character_" + character.name}
            characterData={character}
          />
        );
      })}
    </div>
  );
};

export default CharactersGrid;
