import styled from "styled-components";

export const StyledStage = styled.div`
  display: grid;
  grid-template-rows: repeat(
    ${(props) => props.height},
    calc(550px / ${(props) => props.width})
  );
  grid-template-columns: repeat(${(props) => props.width}, 0fr);
  width: 550px;
`;
