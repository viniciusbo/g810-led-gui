// @flow
import React from "react";
import { SketchPicker } from "react-color";

export default function ColorPicker(props: {
  color: string,
  onChange: Function,
}) {
  return (
    <SketchPicker width={265} color={props.color} onChange={props.onChange} />
  );
}
