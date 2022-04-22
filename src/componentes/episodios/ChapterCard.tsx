import { FC } from "react";
import "./tarjeta-episodio.css";
export interface ChapterCardProps {
  name: string;
  airDate: string;
  episodio: string;
}
/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * @author Branko Beros
 * @param {void}
 *
 * @returns un JSX element
 */

const ChapterCard: FC<ChapterCardProps> = ({
  name,
  airDate,
  episodio,
}: ChapterCardProps) => {
  return (
    <div className="tarjeta-episodio">
      <h4>{name}</h4>
      <div>
        <span>{episodio}</span>
        <span>Lanzado el: {airDate}</span>
      </div>
    </div>
  );
};

export default ChapterCard;
