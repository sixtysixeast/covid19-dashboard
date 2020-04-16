import FacilitiesHeader from "./FacilitiesHeader"
import FacilityRow from "./FacilityRow"
import ModelSideBar from "./ModelSideBar"
import {
  SectionHeader
} from "./shared"

import Loading from "../design-system/Loading";

import { useFacilities } from "./hooks"

const MultiFacilityImpactDashboard: React.FC = () => {
  const facilities = useFacilities();

  return (
    <div className="h-screen flex">
      <div className="flex flex-col flex-1 pb-6 pl-8">
        <SectionHeader>+ Add Facilities</SectionHeader>
        <FacilitiesHeader />
        { facilities.loading ? <Loading /> :
          facilities.data.map((facility, index) => {
            return <FacilityRow key={index} facility={facility} />
          })
        }
      </div>
    </div>
  );
};

export default MultiFacilityImpactDashboard;
