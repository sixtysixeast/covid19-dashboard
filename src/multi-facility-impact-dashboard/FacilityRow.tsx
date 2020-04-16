import styled from "styled-components";
import Colors from "../design-system/Colors";
import Loading from "../design-system/Loading";

import { useEpidemicModelState } from "./MultiFacilityEpidemicModelContext";

import CurveChartContainer from "../impact-dashboard/CurveChartContainer";
import ImpactProjectionTable from "../impact-dashboard/ImpactProjectionTableContainer";

import { useFacility } from "./hooks"

const markColors = {
  exposed: Colors.green,
  fatalities: Colors.black,
  hospitalized: Colors.lightBlue,
  hospitalBeds: Colors.red,
  infectious: Colors.red,
};

const FacilityRow: React.FC = (props) => {
  const facility = useFacility(props.id)

  if(facility.loading) {
    return <Loading />;
  }

  const {
    name,
    confirmedCases
  } = facility.data

  const modelData = facility.data;

  return (
    <div>
      <div className="flex flex-row h-48 mb-8 border-b border-grey-300">
        <div className="w-2/5 flex flex-col justify-between">
          <div className="flex flex-row">
            <div className="w-1/4 text-red-600 font-bold">
              {confirmedCases}
            </div>
            <div className="w-3/4 font-bold">
              {name}
            </div>
          </div>
          <div className="text-xs text-gray-500 pb-4 flex flex-row justify-between">
            <div>
              Last update: on March 25, 2020
            </div>
            <div className="mr-8">
              <a className="px-1" href="#">Delete</a>
              <a className="px-1" href="#">Edit</a>
              <a className="px-1" href="#">Share</a>
            </div>
          </div>
        </div>
        <div className="w-3/5">
          <CurveChartContainer modelData={modelData} markColors={markColors} chartHeight={200} />
          {/* <ImpactProjectionTable modelData={modelData} /> */}
        </div>
      </div>
    </div>
  );
};

export default FacilityRow;