import { useState, useEffect } from 'react';
import { facilities as facilitiesData } from "./assumedDataModelExample"
import { getSavedState, saveState, getFacilities } from "../database";

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
    // Do you still need this if statement?
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


// export function useFB() {
//   const [modelInputs, setModelInputs] = useState({ data: null, loading: true });

//   useEffect(() => {
//     async function fetchModelInputs() {
//       const modelInputsData = await getSavedState();

//       setModelInputs({
//         data: modelInputsData,
//         loading: false
//       });
//     }
//     fetchModelInputs();
//   }, []);

//   return modelInputs;
// }

export function useFB() {
  const [facilities, setFacilities] = useState({ data: null, loading: true });

  useEffect(() => {
    async function fetchModelInputs() {
      const facilitiesData = await getFacilities();

      console.log("facilitiesData: " + JSON.stringify(facilitiesData));

      setFacilities({
        data: facilitiesData,
        loading: false
      });
    }
    fetchModelInputs();
  }, []);

  return facilities;
}
