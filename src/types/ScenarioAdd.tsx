import { useAddScenario } from "../Hooks/FundHooks"
import { ScenarioModel } from "../types/ScenarioModel";
import ValidationSummary from "./ValidationSummary";
import ScenarioAddForm from "./ScenarioForm";

const ScenarioAdd = () => {
  const addScenarioAddMutation = useAddScenario();

  const scenario: ScenarioModel = {
    event: "",
    deal: "",
    date: "",
    name:"",
    Id :0
  };

  return (
    <>
      {addScenarioAddMutation.isError && (
        <ValidationSummary error={addScenarioAddMutation.error} />
      )}
      <ScenarioAddForm
        scenario={scenario}
        submitted={(scenario) => addScenarioAddMutation.mutate(scenario)}
      />
    </>
  );
};

export default ScenarioAdd;
