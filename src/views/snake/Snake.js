import React from "react";
import { createStage } from "./../../helpers";
import { useStage } from "./../../hooks";
import { Stage } from "./../../components";

export function Snake() {
  const [stage, setStage] = useStage();

  const startGame = () => {
    setStage(createStage());
  };
  return <Stage stage={stage} />;
}
