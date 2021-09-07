import styled from "styled-components";
//Icons
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { MenuAltLeft } from "@styled-icons/boxicons-regular/MenuAltLeft";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  max-height: 100vh;
  display: flex;
  align-content: center;
  padding: 32px;

  @media (max-width: 768px) {
    max-height: 100%;
    flex-direction: column;
    padding: 12px;
  }
`;

export const MenuIcon = styled(MenuAltLeft)`
  width: 24px;
  height: 24px;
  color: black;
  fill: black;
  flex-shrink: 0;
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
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }
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
