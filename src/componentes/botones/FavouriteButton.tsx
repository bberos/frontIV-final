import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleFav } from "../../actions/favouritesAction";
import { useSelector } from "../../store";
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
  const mapa = useSelector((state) => state.favourites.favouritesMapa);
  const found = mapa.find((char) => char.id === character.id);
  const [isFav, setIsFav] = useState(false);
  const dispatch = useDispatch();
  const toggleFavourite = () => {
    dispatch(toggleFav(character));
    setIsFav(!isFav);
  };

  return (
    <div className="boton-favorito">
      {found ? (
        <img
          src={"/imagenes/star-filled.png"}
          alt={"favorito"}
          onClick={toggleFavourite}
        />
      ) : (
        <img
          src={"/imagenes/star.png"}
          alt={"favorito"}
          onClick={toggleFavourite}
        />
      )}
    </div>
  );
};

export default FavouriteButton;
