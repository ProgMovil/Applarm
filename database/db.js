import React from "react";
import * as SQLite from "expo-sqlite";

// https://docs.expo.io/versions/latest/sdk/sqlite/
// Crea y abre la base de datos
const db = SQLite.openDatabase("crono.db");

// Funcionalidades de la base de datos

// Obtener las fechas del usuario
const getDates = (setDatesFunc) => {
  db.transaction((tx) => {
    tx.executeSql(
      "select * from fecha",
      [],
      (_, { rows: { _array } }) => {
        setDatesFunc(_array);
      },
      (_t, error) => {
        console.log("Error al momento de obtener los fechas");
        console.log(error);
      },
      (_t, _success) => {
        console.log("Fechas obtenidas");
      }
    );
  });
};

// Insertar fechas
const insertDates = (fecha, successFunc) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into fecha (fecha) values (?)", [
        "08.12.20",
      ]);
    },
    (_t, error) => {
      console.log("Error al insertar la fecha");
      console.log(error);
    },
    (_t, _success) => {
      successFunc;
    }
  );
};

// Borrar la base de datos
const dropDatabaseTableAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("drop table fecha");
      },
      (_t, error) => {
        console.log("Error al eliminar la tabla de fechas");
        reject(error);
      },
      (_t, result) => {
        resolve(result);
      }
    );
  });
};

// Creación de la tabla de fechas
const setupDatabaseTableAsync = async () => {
    return new Promise((resolve, reject) => {
      db.transaction(
        (tx) => {
          tx.executeSql(
            "create table if not exists fecha (PKfechaID id integer primary key, fecha date not null);"
          );
        },
        (_t, error) => {
          console.log("Error al momento de crear la tabla");
          console.log(error);
          reject(error);
        },
        (_t, success) => {
          console.log("Tabla creada!");
          resolve(success);
        }
      );
    });
  };

// Agrega una nota por defecto en fechas
const setupDatesAsync = async () => {
  return new Promise((resolve, reject) => {
    db.transaction(
      (tx) => {
        tx.executeSql("insert into fecha (PKfechaID,fecha) values (?,?)", [
            "1","08.12.20",
        ]);
      },
      (_t, error) => {
        console.log("Error al momento de insertar los valores por defecto");
        console.log(error);
        reject(error);
      },
      (_t, success) => {
        resolve(success);
      }
    );
  });
};

export const database = {
  getDates,
  insertDates,
  dropDatabaseTableAsync,
  setupDatabaseTableAsync,
  setupDatesAsync,
};