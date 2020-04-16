export const facilities = {
  1: {
    id: 1,
    name: "Baskerville Correctional Center",
    createdAt: "2020-04-12 12:00:00",
    updatedAt: "2020-04-13 14:07:23",
    dailyReports: true,
    dataSharing: false,
    typeOfSystem: "Prison",
    stateCode: "VA",
    countyName: "Arlington",
    confirmedCases: 72,
    staffCases: 7,
    staffPopulation: 89,
    ageUnknownCases: 72,
    ageUnknownPopulation: 1164,
    age0Cases: null,
    age0Population: null,
    age20Cases: null,
    age20Population: null,
    age45Cases: null,
    age45Population: null,
    age55Cases: null,
    age55Population: null,
    age65Cases: null,
    age65Population: null,
    age75Cases: null,
    age75Population: null,
    age85Cases: null,
    age85Population: null,
    // model inputs
    facilityDormitoryPct: 0.55,
    facilityOccupancyPct: 1,
    // shit you didn't have in here
    rateOfSpreadFactor: "low",
    usePopulationSubsets: true,
    hospitalBeds: 290,
    countyLevelData: {},
    // totalIncarcerated: 1348,
  },
  2: {
    id: 2,
    name: "Deerfield Correctional Center",
    createdAt: "2020-04-12 12:00:00",
    updatedAt: "2020-04-13 14:07:23",
    dailyReports: true,
    dataSharing: false,
    typeOfSystem: "Prison",
    stateCode: "VA",
    countyName: "Arlington",
    confirmedCases: 34,
    staffCases: 1,
    staffPopulation: 48,
    ageUnknownCases: 34,
    ageUnknownPopulation: 564,
    age0Cases: null,
    age0Population: null,
    age20Cases: null,
    age20Population: null,
    age45Cases: null,
    age45Population: null,
    age55Cases: null,
    age55Population: null,
    age65Cases: null,
    age65Population: null,
    age75Cases: null,
    age75Population: null,
    age85Cases: null,
    age85Population: null,
    // model inputs
    facilityDormitoryPct: 0.15,
    facilityOccupancyPct: 1,
    // shit you didn't have in here
    rateOfSpreadFactor: "low",
    usePopulationSubsets: true,
    hospitalBeds: 290,
    countyLevelData: {},
    // totalIncarcerated: 1348,
  }
  3: {
    id: 3,
    name: "New York Juvenile Home",
    createdAt: "2020-04-12 12:00:00",
    updatedAt: "2020-04-13 14:07:23",
    dailyReports: true,
    dataSharing: false,
    typeOfSystem: "Prison",
    stateCode: "NY",
    countyName: "New York",
    confirmedCases: 375,
    staffCases: 0,
    staffPopulation: 0,
    ageUnknownCases: 375,
    ageUnknownPopulation: 3807,
    age0Cases: null,
    age0Population: null,
    age20Cases: null,
    age20Population: null,
    age45Cases: null,
    age45Population: null,
    age55Cases: null,
    age55Population: null,
    age65Cases: null,
    age65Population: null,
    age75Cases: null,
    age75Population: null,
    age85Cases: null,
    age85Population: null,
    // model inputs
    facilityDormitoryPct: 0.35,
    facilityOccupancyPct: 1,
    // shit you didn't have in here
    rateOfSpreadFactor: "high",
    usePopulationSubsets: true,
    hospitalBeds: 1890,
    countyLevelData: {},
    // totalIncarcerated: 2070331,
    // wtf?
    // stateInitialized: true,
  }  
}

export const models = {
  facility_one: {
    model_one: {
      name: "Moderate Model",
      createdAt: "2020-04-12 12:00:00",
      updatedAt: "2020-04-13 14:07:23",
      baseline: true,
      mitigationEfforts: {
        plannedReleases: [
          {
            date: "2020-04-20",
            count: 100            
          }
        ]
        rateOfSpread: "moderate",
      }
    },
    model_two: {
      name: "High Model",
      createdAt: "2020-04-12 12:00:00",
      updatedAt: "2020-04-13 14:07:23",
      baseline: false,
      mitigationEfforts: {
        plannedReleases: []
        rateOfSpread: "high",
      }
    },
    model_three: {
      name: "Low Model",
      createdAt: "2020-04-12 12:00:00",
      updatedAt: "2020-04-13 14:07:23",
      baseline: false,
      mitigationEfforts: {
        plannedReleases: [
          {
            date: "2020-04-20",
            count: 100            
          },
          {
            date: "2020-04-27",
            count: 100            
          }
        ]
        rateOfSpread: "low",
      }
    },
  },
  facility_two: {
    model_four: {
      name: "Moderate Model",
      createdAt: "2020-04-12 12:00:00",
      updatedAt: "2020-04-13 14:07:23",
      baseline: true,
      mitigationEfforts: {
        plannedReleases: [
          {
            date: "2020-04-20",
            count: 100            
          }
        ]
        rateOfSpread: "low",
      }
    }
  }
}
