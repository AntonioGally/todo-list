import styled from "styled-components";
//Icons
import { Add } from "@styled-icons/fluentui-system-filled/Add";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-content: center;
  padding: 32px;
`;

export const SideBarContent = styled.div`
  padding: 6px;
  height: 100%;
  width: 100%;
`;

export const IconContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const AddIcon = styled(Add)`
  width: 52px;
  height: 52px;
  color: var(--subTitle);
  fill: var(--subTitle);
  flex-shrink: 0;
  cursor: pointer;
`;

export const CardContent = styled.div`
  padding: 6px;
  width: 100%;
  display: flex;
  align-content: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

export const Input = styled.input`
  width: 30%;
  padding: 14px;
  border: none;
  outline: 0;
  color: var(--subTitle);
  font-size: 18px;
  background-color: transparent;
`;
