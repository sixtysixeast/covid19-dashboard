import { csvParse, DSVRowAny } from "d3";
import { rollup } from "d3-array";
import parseJSON from "date-fns/parseJSON";
import { mapValues, pick, size } from "lodash";
import numeral from "numeral";
import React, { useEffect } from "react";

import { getSavedState, saveState } from "../database";
import useQueryParams, { QueryParams } from "../hooks/useQueryParams";

import {
 facilities 
} from "./assumedDataModelExample"


type CountyLevelRecord = {
  hospitalBeds: number;
  totalIncarceratedPopulation: number;
  estimatedIncarceratedCases: number;
  county: string;
  state: string;
};

type CountyLevelData = Map<string, Map<string, CountyLevelRecord>>;

export type PlannedRelease = { date?: Date; count?: number };
export type PlannedReleases = PlannedRelease[];

type Action = { type: "update"; payload: EpidemicModelUpdate };
type Dispatch = (action: Action) => void;

export enum RateOfSpread {
  low = "low",
  moderate = "moderate",
  high = "high",
}
// any field that we can update via reducer should be here,
// and should probably be optional

// fields that we want to store in URL or other persistent store
interface ModelInputsPersistent {
  age0Cases?: number;
  age0Population?: number;
  age20Cases?: number;
  age20Population?: number;
  age45Cases?: number;
  age45Population?: number;
  age55Cases?: number;
  age55Population?: number;
  age65Cases?: number;
  age65Population?: number;
  age75Cases?: number;
  age75Population?: number;
  age85Cases?: number;
  age85Population?: number;
  ageUnknownCases?: number;
  ageUnknownPopulation?: number;
  facilityDormitoryPct?: number;
  facilityOccupancyPct?: number;
  rateOfSpreadFactor?: RateOfSpread;
  staffCases?: number;
  staffPopulation?: number;
  plannedReleases?: PlannedReleases;
}

interface ModelInputsUpdate extends ModelInputsPersistent {
  // these don't persist because they are auto-populated from external data
  confirmedCases?: number;
  totalIncarcerated?: number;
  usePopulationSubsets?: boolean;
}
// some fields are required for calculations, define them here
interface EpidemicModelInputs extends ModelInputsUpdate {
  rateOfSpreadFactor: RateOfSpread;
  usePopulationSubsets: boolean;
  facilityDormitoryPct: number;
  facilityOccupancyPct: number;
}

interface MetadataPersistent {
  // fields that we want to store in URL or other persistent store
  countyName?: string;
  facilityName?: string;
  stateCode?: string;
}

interface MetadataUpdate extends MetadataPersistent {
  countyLevelData?: CountyLevelData;
  countyLevelDataLoading?: boolean;
  countyLevelDataFailed?: boolean;
  stateInitialized?: boolean;
  // this is not user input so don't store it
  hospitalBeds?: number;
}
// some fields are required to display a sensible UI, define them here
interface Metadata extends MetadataUpdate {
  stateCode: string;
  hospitalBeds: number;
}

export type EpidemicModelPersistent = ModelInputsPersistent &
  MetadataPersistent;

export type EpidemicModelUpdate = ModelInputsUpdate & MetadataUpdate;

type EpidemicModelState = EpidemicModelInputs & Metadata;

type EpidemicModelProviderProps = { children: React.ReactNode };

const EpidemicModelStateContext = React.createContext<
  EpidemicModelState | undefined
>(undefined);

const EpidemicModelDispatchContext = React.createContext<Dispatch | undefined>(
  undefined,
);

interface ResetPayload {
  dataSource?: CountyLevelData;
  stateCode?: string;
  countyName?: string;
}

function MultiFacilityEpidemicModelProvider({ children }: EpidemicModelProviderProps) {
  console.log("in the provider...")

  const [facilitiesList, setFacilitiesList] = React.useState();

  // I feel like this isn't quite right...

  useEffect(
    () => {
      async function effect() {
        console.log("facilities in use effect: " + JSON.stringify(facilities));
        setFacilitiesList(facilities);
      }
      effect();
    }, [facilitiesList]
  );

  console.log("facilitiesList: " + JSON.stringify(facilitiesList))

  return (
    <EpidemicModelStateContext.Provider value={facilitiesList}>
      {children}
    </EpidemicModelStateContext.Provider>
  );
}

function useEpidemicModelState() {
  const context = React.useContext(EpidemicModelStateContext);

  if (context === undefined) {
    throw new Error(
      "useEpidemicModelState must be used within an MultiFacilityEpidemicModelProvider",
    );
  }

  return context;
}

export {
  MultiFacilityEpidemicModelProvider,
  useEpidemicModelState,
  EpidemicModelInputs,
};
