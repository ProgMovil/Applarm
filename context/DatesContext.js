import React, { useEffect, createContext, useState } from "react";
import { database } from "../database/db";

// Crear el contexto de las notas
export const DatesContext = createContext({});

export const DatesContextProvider = (props) => {
  // Obtener los valores iniciales para el contexto
  // se obtienen desde los props
  const { fecha: initialdates, children } = props;

  // Almacenar los valores en el estado
  const [fecha, setDates] = useState(initialdates);
  const [vuelta ,setvuelta] = useState()
  // Cargar u obtener las notas
  useEffect(() => {
    refreshDates();
  }, []);
  const lookDates = (id) => {
    console.log( database.getInfo(id));
    /*console.log(vuelta);*/
  };
  const refreshDates = () => {
    return database.getDates2(setDates);
  };

  const addNewDate = (fecha) => {
    return database.insertDates(fecha, refreshDates);
  };

  // Crear el objeto de contexto
  const datesContext = {
    fecha,
    vuelta,
    addNewDate,
    refreshDates,
    lookDates
  };

  // Pasar los valores al proveedor y retornarlo
  return (
    <DatesContext.Provider value={datesContext}>
      {children}
    </DatesContext.Provider>
  );
};
