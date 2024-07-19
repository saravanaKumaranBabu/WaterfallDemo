import React, { useState } from "react";

import { ScenarioModel } from "./ScenarioModel";

type Args = {
  scenario: ScenarioModel;
  submitted: (scenario: ScenarioModel) => void;
};

const ScenarioForm = ({ scenario, submitted }: Args) => {
  const [scenarioState, setScenarioState] = useState({ ...scenario });

  const onSubmit: React.MouseEventHandler<HTMLButtonElement> = async (e) => {
    e.preventDefault();
    submitted(scenarioState);
  };

  

  return (
    <form className="mt-2">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          className="form-control"
          placeholder="name"
          value={scenarioState.name}
          onChange={(e) =>
            setScenarioState({ ...scenarioState, name: e.target.value })
          }
        />
      </div>
      <div className="form-group mt-2">
        <label htmlFor="event">Event</label>
        <input
          type="text"
          className="form-control"
          placeholder="Event"
          value={scenarioState.event}
          onChange={(e) =>
            setScenarioState({ ...scenarioState, event: e.target.value })
          }
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="Date">Date</label>
        <input
          type="text"
          className="form-control"
          placeholder="Event"
          value={scenarioState.date}
          onChange={(e) =>
            setScenarioState({ ...scenarioState, date: e.target.value })
          }
        />
      </div>

      <div className="form-group mt-2">
        <label htmlFor="Deal">Deal</label>
        <input
          type="text"
          className="form-control"
          placeholder="Deal"
          value={scenarioState.deal}
          onChange={(e) =>
            setScenarioState({ ...scenarioState, deal: e.target.value })
          }
        />
      </div>
     
      <button
        className="btn btn-primary mt-2"
        disabled={!scenarioState.event || !scenarioState.name}
        onClick={onSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default ScenarioForm;
