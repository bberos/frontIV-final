import "./boton-favorito.css";

export interface FavouriteButtonProps {
  isFavourite: boolean;
  onClick: any;
}
/**
 * Boton que indica si un elemento es favorito o no, y da la posibilidad de marcarlo/desmarcarlo
 *
 * Deberás tipar las propiedades si usas este componente
 * @author Branko Beros
 * @param {Boolean} isFavourite
 * @param {function} onClick
 * @returns un JSX element
 */

const FavouriteButton = ({ isFavourite, onClick }: FavouriteButtonProps) => {
  const src = isFavourite
    ? "/src/assets/icons/pickleFav.svg"
    : "/src/assets/icons/pickleFav.svg";

  return (
    <div className="boton-favorito">
      <img src={src} alt={"favorito"} />
    </div>
  );
};

export default FavouriteButton;
