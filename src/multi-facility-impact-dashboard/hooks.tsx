import { useState, useEffect } from 'react';
import { facilities as facilitiesData } from "./assumedDataModelExample"

export function useFacilities() {
  const [facilities, setFacilities] = useState({ data: null, loading: true });

  useEffect(() => {
    async function fetchFacilities() {
      // const facilitiesData = // call out to firebase
      setFacilities({
        data: facilitiesData,
        loading: false
      });
    }
    fetchFacilities();
  }, []);

  return facilities;
}

export function useFacility(facilityId) {
  const [facility, setFacility] = useState({ data: null, loading: true });

  useEffect(() => {
    if (facilityId) {
      // const facilityData = // call out to firebase
      setFacility({
        data: facilitiesData[facilityId],
        loading: false
      });
    }
  }, [facilityId]);

  return facility;
}
