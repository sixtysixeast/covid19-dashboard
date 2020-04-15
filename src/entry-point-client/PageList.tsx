import GetInvolvedPage from "../page-get-involved/GetInvolvedPage";
import MultiFacilityPage from "../page-multi-facility/MultiFacilityPage";
import OverviewPage from "../page-overview/OverviewPage";
import UnsupportedBrowserPage from "../page-unsupported-browser/UnsupportedBrowserPage";
import VerificationNeeded from "../page-verification-needed/VerificationNeeded";

export interface PageInfo {
  path: string;
  title: string;
  isPrivate: boolean;
  contents: React.ReactNode;
}

function getPageTitle(...parts: string[]) {
  return [...parts, "COVID-19 Dashboard"].join(" • ");
}

const PageList: PageInfo[] = [
  {
    path: "/",
    title: getPageTitle(),
    isPrivate: true,
    contents: <OverviewPage />,
  },
  {
    path: "/get-involved",
    title: getPageTitle("Get Involved"),
    isPrivate: false,
    contents: <GetInvolvedPage />,
  },
  {
    path: "/mf",
    title: getPageTitle(),
    isPrivate: false,
    contents: <OverviewPage mf={true}/>,
  },
  {
    path: "/unsupported-browser",
    title: getPageTitle("Unsupported Browser"),
    isPrivate: false,
    contents: <UnsupportedBrowserPage />,
  },
  {
    path: "/verify",
    title: getPageTitle("Verification Needed"),
    isPrivate: false,
    contents: <VerificationNeeded />,
  },
  {
    path: "/multi-facility",
    title: getPageTitle(),
    isPrivate: true,
    contents: <MultiFacilityPage />,
  },
];

export default PageList;
