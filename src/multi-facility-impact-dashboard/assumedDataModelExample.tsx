export const assumedDataModelExample = [
  {
    id: "mhvXdrZT4jP5T8vBxuvm75",
    facilityName: "Baskerville Correctional Center",
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
    facilityDormitoryPct: 0.15,
    facilityOccupancyPct: 1,
    models: [
      {
        id: "uvm75mhvXjP5rZT4T8vBxd"
        name: "Moderate Model",
        createdAt: "2020-04-12 12:00:00",
        updatedAt: "2020-04-13 14:07:23",
        baseline: true,
        mitigationEfforts: {
          plannedReleases: [
            {
              date: "2020-04-20";
              count: 100            
            }
          ]
          rateOfSpread: "moderate",
        }
      },
      {
        id: "avL755hvXjP5jZTlT8vcxd",
        name: "High Model",
        createdAt: "2020-04-12 12:00:00",
        updatedAt: "2020-04-13 14:07:23",
        baseline: false,
        mitigationEfforts: {
          plannedReleases: []
          rateOfSpread: "high",
        }
      },
      {
        id: "hvXjcxd75P5avL8v5jZTlT",
        name: "Low Model",
        createdAt: "2020-04-12 12:00:00",
        updatedAt: "2020-04-13 14:07:23",
        baseline: false,
        mitigationEfforts: {
          plannedReleases: [
            {
              date: "2020-04-20";
              count: 100            
            },
            {
              date: "2020-04-27";
              count: 100            
            }
          ]
          rateOfSpread: "low",
        }
      },
    ]
  },
  {
    id: "mhvXdrZT4jP5T8vBxuvm75",
    facilityName: "Deerfield Correctional Center",
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
    facilityDormitoryPct: 0.15,
    facilityOccupancyPct: 1,
    models: [
      {
        id: "uvm75mhvXjP5rZT4T8vBxd"
        name: "Moderate Model",
        createdAt: "2020-04-12 12:00:00",
        updatedAt: "2020-04-13 14:07:23",
        baseline: true,
        mitigationEfforts: {
          plannedReleases: [
            {
              date: "2020-04-20";
              count: 100            
            }
          ]
          rateOfSpread: "moderate",
        }
      },
    ]
  },
]

