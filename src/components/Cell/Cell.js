import React from "react";
import { StyledCell } from "./Style";
import { TYPES } from "../../helpers";

export function Cell({ type }) {
  return <StyledCell type={type} color={TYPES[type].color}></StyledCell>;
}
