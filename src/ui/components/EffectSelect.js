// @flow
import React from "react";
import Select from "../components/Select";

const options = [
  {
    value: "color",
    label: "Static",
  },
  {
    value: "breathing",
    label: "Breathing",
  },
  {
    value: "cycle",
    label: "Cycle",
  },
  {
    value: "waves",
    label: "Waves",
  },
  {
    value: "hwave",
    label: "Horizontal Wave",
  },
  {
    value: "vwave",
    label: "Vertical Wave",
  },
  {
    value: "cwave",
    label: "Center Wave",
  },
];

export default function EffectSelect(props: {
  value: string,
  onChange: Function,
}) {
  return (
    <Select
      options={options}
      value={props.value}
      onChange={(effect) => props.onChange(effect)}
    />
  );
}
