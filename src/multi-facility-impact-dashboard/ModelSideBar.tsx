import {
  SectionHeader
} from "./shared"

const ModelSideBar: React.FC = () => {
  return (
    <div className="flex flex-col w-1/4 mr-24">
      <div className="flex-1 flex flex-col pb-4">
        <SectionHeader>Model 01</SectionHeader>
        <div className="mt-5 mb-5 border-b border-gray-300"></div>
        <div className="mb-12">
          <p>
            This text describes unique qualities for this data model.  Taking notes here will be useful when you have multiple data model experiments in your library?
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500">Last Update: March 25, 2020</p>
        </div>
        <div className="mt-5 mb-5 border-b border-gray-300"></div>
        <div>
          <div className="flex justify-between items-baseline">
            <h3>Daily Reports</h3>
            <div>
              <label htmlFor="daily_reports" className="mr-3">Off</label><input type="checkbox" id="daily_reports" />
            </div>
          </div>
          <div className="mt-5 mb-5 border-b border-gray-300"></div>
          <div className="flex justify-between items-baseline">
            <h3>Data Sharing</h3>
            <div>
              <label htmlFor="data_sharing" className="mr-3">Off</label><input type="checkbox" id="data_sharing" defaultChecked />
            </div>
          </div>
          <div className="mt-5 mb-5 border-b border-gray-300"></div>
          <div className="bg-gray-300 p-6">
            <p className="mb-6">
              Turn on 'Daily Reports' to receive lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <span className="font-bold">Dismiss</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModelSideBar;
