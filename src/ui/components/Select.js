// @flow
import React from "react";

type Option = {
  value: string,
  label: string,
};

export default function Select(props: {
  options: Option[],
  value: string,
  onChange: Function,
}) {
  return (
    <select
      className="Select"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    >
      {props.options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );
}
