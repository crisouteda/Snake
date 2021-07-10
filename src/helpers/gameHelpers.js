export const STAGE_WIDTH = 40;
export const STAGE_HEIGHT = 40;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
