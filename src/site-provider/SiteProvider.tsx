import { navigate } from "gatsby";
import React, { useReducer, useState } from "react";
import { ToastProvider } from "react-toast-notifications";

import config from "../auth/auth_config.json";
import { Auth0Provider } from "../auth/react-auth0-spa";
import Toast from "../design-system/Toast";
import { FeatureFlagsProvider } from "../feature-flags";
import { LocaleDataProvider } from "../locale-data-context";
import {
  FacilityContext,
  rtDataReducer,
} from "../page-multi-facility/FacilityContext";
import { Facility } from "../page-multi-facility/types";
import { ScenarioProvider } from "../scenario-context";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState: any) => {
  navigate(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname,
  );
};

const SiteProvider: React.FC = (props) => {
  const [facility, setFacility] = useState<Facility | undefined>();
  const [rtData, dispatchRtData] = useReducer(rtDataReducer, {});

  let redirectUri =
    typeof window === "undefined" ? undefined : window.location.origin;

  return (
    <FeatureFlagsProvider>
      <Auth0Provider
        domain={config.domain}
        client_id={config.clientId}
        audience={config.audience}
        redirect_uri={redirectUri}
        onRedirectCallback={onRedirectCallback as any}
      >
        <LocaleDataProvider>
          <ScenarioProvider>
            <FacilityContext.Provider
              value={{ facility, setFacility, rtData, dispatchRtData }}
            >
              <ToastProvider
                placement="bottom-center"
                transitionDuration={0}
                components={{ Toast }}
              >
                {props.children}
              </ToastProvider>
            </FacilityContext.Provider>
          </ScenarioProvider>
        </LocaleDataProvider>
      </Auth0Provider>
    </FeatureFlagsProvider>
  );
};

export default SiteProvider;
