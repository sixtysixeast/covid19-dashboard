import { useState, useEffect } from 'react';
import { getSavedState, saveState, getFacilities } from "../database";

export function useFacilities() {
  const [facilities, setFacilities] =
    useState({ data: null, loading: true });

  useEffect(() => {
    async function fetchModelInputs() {
      const facilitiesData = await getFacilities();

      setFacilities({
        data: facilitiesData,
        loading: false
      });
    }
    fetchModelInputs();
  }, []);

  return facilities;
}
