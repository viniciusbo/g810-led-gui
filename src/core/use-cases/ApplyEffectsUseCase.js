import KeyboardConfig from "../entities/KeyboardConfig";

export default (applyConfigGatway) => ({ model, config }) => {
  const kc = new KeyboardConfig({
    model: model,
    config: {
      keyGroup: config.keyGroup,
      effect: config.effect,
      period: config.period,
      color: config.color,
      effectColor: config.effectColor,
    },
  });

  return applyConfigGatway(kc);
};
