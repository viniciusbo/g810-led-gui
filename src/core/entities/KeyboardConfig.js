// @flow
export type Model =
  | "g213"
  | "g410"
  | "g413"
  | "g512"
  | "g610"
  | "g810"
  | "g815"
  | "g910"
  | "gpro";

export type KeyGroup =
  | "all"
  | "logo"
  | "indicators"
  | "multimedia"
  | "fkeys"
  | "modifiers"
  | "arrows"
  | "numeric"
  | "functions"
  | "keys"
  | "gkeys";

export type Effect =
  | "color"
  | "breathing"
  | "cycle"
  | "hwave"
  | "vwave"
  | "cwave";

type Config = {
  keyGroup: KeyGroup,
  effect: Effect,
  period: number,
  color: string,
};

export default class KeyboardConfig {
  model: Model;
  config: Config;

  constructor(props: { model: string, config: Config }) {
    this.model = props.model;
    this.config = props.config;
  }
}
