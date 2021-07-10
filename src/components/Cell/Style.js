import styled from "styled-components";

export const StyledCell = styled.div`
  width: auto;
  background: #fff;
  border: ${(props) =>
    props.type === 0 ? "0px solid white" : "4px solid white"};
`;
