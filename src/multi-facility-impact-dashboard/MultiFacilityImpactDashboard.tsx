import FacilitiesHeader from "./FacilitiesHeader"
import FacilityRow from "./FacilityRow"
import ModelSideBar from "./ModelSideBar"
import {
  SectionHeader
} from "./shared"
import {
  assumedDataModelExample
} from "./assumedDataModelExample"

import { MultiFacilityEpidemicModelProvider } from "./MultiFacilityEpidemicModelContext";

const MultiFacilityImpactDashboard: React.FC = () => {
  return (
    <div className="h-screen flex">
      {/* Disabled for the first version of the MF experience
        <ModelSideBar />
      */}
      <div className="flex flex-col flex-1 pb-6 pl-8">
        <SectionHeader>+ Add Facilities</SectionHeader>
        <FacilitiesHeader />
        <MultiFacilityEpidemicModelProvider>
          <FacilityRow />
        </MultiFacilityEpidemicModelProvider>
      </div>
    </div>
  );
};

export default MultiFacilityImpactDashboard;
