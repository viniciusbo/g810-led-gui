// @flow
import React from "react";
import Select from "../components/Select";

const options = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "logo",
    label: "Logo",
  },
  {
    value: "indicators",
    label: "Indicators",
  },
  {
    value: "multimedia",
    label: "Multimedia",
  },
  {
    value: "fkeys",
    label: "F Keys",
  },
  {
    value: "modifiers",
    label: "Modifiers",
  },
  {
    value: "arrows",
    label: "Arrows",
  },
  {
    value: "numeric",
    label: "Numeric",
  },
  {
    value: "functions",
    label: "Functions",
  },
  {
    value: "keys",
    label: "Keys",
  },
  {
    value: "gkeys",
    label: "G Keys",
  },
];

export default function KeyGroupSelect(props: {
  value: string,
  onChange: Function,
}) {
  return (
    <Select options={options} value={props.value} onChange={props.onChange} />
  );
}
