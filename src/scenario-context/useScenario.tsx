import { saveScenario } from "../database";
import { Scenario } from "../page-multi-facility/types";
import {
  ScenarioUpdate,
  useScenarioDispatch,
  useScenarioState,
} from "./ScenarioContext";

export default function useScenario() {
  const dispatch = useScenarioDispatch();
  const scenario = useScenarioState();

  function updateScenario(scenario: Scenario) {
    dispatch({
      type: "update",
      payload: {
        data: scenario,
        loading: false,
      },
    });
  }

  return [scenario, updateScenario] as [typeof scenario, typeof updateScenario];
}
