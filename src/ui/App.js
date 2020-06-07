// @flow
import React, { useState } from "react";
import EffectsScreen from "./screens/EffectsScreen";
import "./styles/App.css";

function App(props: { onConfigSubmit: Function }) {
  const [config, setConfig] = useState({
    model: "g810",
    effect: "color",
    keyGroup: "all",
    period: 5,
    color: { hex: "#00ff35" },
  });

  return (
    <div className="App">
      <EffectsScreen
        config={config}
        onConfigChange={(newConfig) => setConfig(newConfig)}
        onConfigSubmit={(finalConfig) => props.onConfigSubmit(finalConfig)}
      />
    </div>
  );
}

export default App;
