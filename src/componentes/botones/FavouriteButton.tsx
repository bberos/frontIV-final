import { useDispatch } from "react-redux";
import { toggleFav } from "../../actions/favouritesAction";
import { useSelector } from "../../store";
import Character from "../../types/character.types";
import "./boton-favorito.css";

/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 * @author Branko Beros
 * @param {Boolean} isFavourite
 * @param {function} onClick
 * @returns un JSX element
 */

const FavouriteButton = ({ character }: any) => {
  const mapa = useSelector((state) => state.favourites.favoritosMapa);
  const dispatch = useDispatch();
  const toggleFavorito = () => {
    dispatch(toggleFav(character));
  };

  // if (mapa.has(personaje.id)) return <div onClick={toggleFav}>FAVORITO</div>;
  // return <div onClick={toggleFav}>-</div>;

  return (
    <div className="boton-favorito">
      {mapa.has(character.id) ? (
        <img
          src={"/imagenes/star-filled.png"}
          alt={"favorito"}
          onClick={toggleFavorito}
        />
      ) : (
        <img
          src={"/imagenes/star.png"}
          alt={"favorito"}
          onClick={toggleFavorito}
        />
      )}
    </div>
  );
};

export default FavouriteButton;
