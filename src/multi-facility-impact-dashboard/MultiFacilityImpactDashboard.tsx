import FacilitiesHeader from "./FacilitiesHeader"
import FacilityRow from "./FacilityRow"
import ModelSideBar from "./ModelSideBar"
import {
  SectionHeader
} from "./shared"

import Loading from "../design-system/Loading";

import { useFacilities } from "./hooks"

import { MultiFacilityEpidemicModelProvider } from "./MultiFacilityEpidemicModelContext";

const MultiFacilityImpactDashboard: React.FC = () => {
  const facilities = useFacilities()

  return (
    <div className="h-screen flex">
      {/* Disabled for the first version of the MF experience
        <ModelSideBar />
      */}
      <ModelSideBar />

      <div className="flex flex-col flex-1 pb-6 pl-8">
        <SectionHeader>+ Add Facilities</SectionHeader>
        <FacilitiesHeader />
        { facilities.loading ? <Loading /> :
          Object.keys(facilities.data).map((facilityId) => {
            return <FacilityRow key={facilityId} id={facilityId} />
          })
        }
      </div>
    </div>
  );
};

export default MultiFacilityImpactDashboard;
