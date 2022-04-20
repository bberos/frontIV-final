import { FC } from "react";
import "./tarjeta-episodio.css";

/**
 * Tarjeta para cada episodio dentro de la vista de personaje.
 *
 * Deberás agregar las propiedades necesarias para mostrar los datos de los episodios
 * @author Branko Beros
 * @param {void}
 *
 * @returns un JSX element
 */

const ChapterCard: FC = () => {
  return (
    <div className="tarjeta-episodio">
      <h4>Close Rick-counters of the Rick Kind</h4>
      <div>
        <span>S01E01</span>
        <span>Lanzado el: April 7, 2014</span>
      </div>
    </div>
  );
};

export default ChapterCard;