// @flow
import React from "react";
import KeyGroupSelect from "../components/KeyGroupSelect";
import EffectSelect from "../components/EffectSelect";
import ColorPicker from "../components/ColorPicker";

export default function EffectsScreen(props: {
  config: {
    keyGroup: string,
    effect: string,
    period: string,
    color: string,
    effectColor: string,
  },
  onConfigChange: Function,
  onConfigSubmit: Function,
}) {
  return (
    <div>
      <div className="Row">
        <div className="Col">
          <div className="FormGroup">
            <label className="FormGroup-label">Onboard Effect</label>
            <EffectSelect
              value={props.config.effect}
              onChange={(effect) =>
                props.onConfigChange({ ...props.config, effect })
              }
            />
          </div>
        </div>
        <div className="Col">
          <div className="FormGroup">
            <label className="FormGroup-label">Key Group</label>
            <KeyGroupSelect
              value={props.config.keyGroup}
              onChange={(keyGroup) =>
                props.onConfigChange({ ...props.config, keyGroup })
              }
            />
          </div>
        </div>
      </div>

      <div className="FormGroup">
        <label className="FormGroup-label">
          Period ({props.config.period} seconds)
        </label>
        <input
          className="RangeInput"
          type="range"
          min="0"
          max="30"
          value={parseInt(props.config.period)}
          onChange={(e) =>
            props.onConfigChange({
              ...props.config,
              period: e.target.value,
            })
          }
        />
      </div>

      <div className="FormGroup">
        <label className="FormGroup-label">Color</label>
        <ColorPicker
          color={props.config.color}
          onChange={(color) => props.onConfigChange({ ...props.config, color })}
        />
      </div>

      <button
        type="button"
        className="Button"
        onClick={() => props.onConfigSubmit(props.config)}
      >
        Apply changes
      </button>
    </div>
  );
}
