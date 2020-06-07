export default (applyEffectsUseCase) => (config: {
  model: string,
  keyGroup: string,
  effect: string,
  period: string,
  color: string,
}) => {
  return applyEffectsUseCase({
    model: config.model,
    config: {
      keyGroup: config.keyGroup,
      effect: config.effect,
      period: parseInt(config.period, 10),
      color: config.color,
    },
  });
};
