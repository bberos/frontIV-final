import { FC } from "react";
import "./paginacion.css";

/**
 * Componente que contiene los botones para paginar
 *
 * Deberás agregar las propiedades necesarias para que funcione correctamente
 *
 * @author Branko Beros
 * @returns un JSX element
 */
const Pagination: FC = () => {
  return (
    <div className="paginacion">
      <button disabled={true} className={"primary"}>
        Anterior
      </button>
      <button disabled={false} className={"primary"}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination;
