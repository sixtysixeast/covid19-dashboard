import { csvParse, DSVRowAny } from "d3";
import { rollup } from "d3-array";
import parseJSON from "date-fns/parseJSON";
import { mapValues, pick, size } from "lodash";
import numeral from "numeral";
import React, { useEffect } from "react";

import { getSavedState, saveState } from "../database";
import useQueryParams, { QueryParams } from "../hooks/useQueryParams";

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

function epidemicModelReducer(
  state: EpidemicModelState,
  action: Action,
): EpidemicModelState {
  switch (action.type) {
    case "update":
      return {
        "stateCode": "US Total",
        "countyName": "Total",
        "rateOfSpreadFactor": "high", "usePopulationSubsets": true,
        "facilityOccupancyPct": 1,
        "facilityDormitoryPct" :0.15,
        "hospitalBeds": 747890,
        "countyLevelDataLoading": false,
        "countyLevelData": {},
        "totalIncarcerated": 2070331,
        "ageUnknownPopulation": 2070331,
        "ageUnknownCases": 25901,
        "confirmedCases": 25901,
        "staffCases": 0,
        "staffPopulation": 0
      }
  }
}

// estimated ratio of confirmed cases to actual cases
const caseReportingRate = 0.14;

function MultiFacilityEpidemicModelProvider({ children }: EpidemicModelProviderProps) {
  const [state, dispatch] = React.useReducer(
    epidemicModelReducer,
    {},
  );

  // fetch from external datasource
  React.useEffect(
    () => {
      async function effect() {
        try {
          dispatch({ type: "update" });
        } catch (error) {
          console.log("Erroring out???")
          console.error(error);
        }
      }
      effect();
    },
    // we only want to run this once, on initial mount
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [],
  );

  console.log("state: " + JSON.stringify(state))

  return (
    <EpidemicModelStateContext.Provider value={state}>
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
