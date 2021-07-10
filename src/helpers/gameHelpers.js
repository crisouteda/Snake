export const STAGE_WIDTH = 50;
export const STAGE_HEIGHT = 50;

export const createStage = () =>
  Array.from(Array(STAGE_HEIGHT), () =>
    new Array(STAGE_WIDTH).fill([0, "clear"])
  );
