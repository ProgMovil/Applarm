import React, { useEffect, useState } from "react";
import { database } from "../database/db";

const useDatabase = () => {
  const [isLoadingComplete, setIsLoadingComplete] = useState(false);

  const loadDatabase = async () => {
    try {
      // await database.dropDatabaseTableAsync();
      await database.setupDatabaseTableAsync();
      // await database.setupDatesAsync();

      // Finaliza la carga de la DB
      setIsLoadingComplete(true);
    } catch (error) {
      console.log(error+"Isloading");
    }
  };

  useEffect(() => {
    loadDatabase();
  }, []);

  return isLoadingComplete;
};

export default useDatabase;
