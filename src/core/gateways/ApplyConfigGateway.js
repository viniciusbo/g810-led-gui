import KeyboardConfig from "../entities/KeyboardConfig";

export default (runCmd) => (kc: KeyboardConfig) => {
  // Remove # from hex colors
  console.log(kc);
  console.log(kc.config.effectColor);
  const color = kc.config.color.hex.substr(1);

  const effectsArgs = {
    color:
      kc.config.keyGroup === "all"
        ? `-a ${color}`
        : `-g ${kc.config.keyGroup} ${color}`,
    breathing: `-fx ${kc.config.effect} all ${color} ${kc.config.period}s`,
    cycle: `-fx ${kc.config.effect} all ${kc.config.period}`,
    hwave: `-fx ${kc.config.effect} keys ${kc.config.period}`,
    vwave: `-fx ${kc.config.effect} keys ${kc.config.period}`,
    cwave: `-fx ${kc.config.effect} keys ${kc.config.period}`,
  };

  const cmd = `g810-led ${effectsArgs[kc.config.effect]}`;

  console.log(cmd);

  return runCmd(cmd);
};
