import styled from "styled-components";
//Icons
import { Add } from "@styled-icons/fluentui-system-filled/Add";
import { MenuAltLeft } from "@styled-icons/boxicons-regular/MenuAltLeft";
import { ArrowIosDownwardOutline } from "@styled-icons/evaicons-outline/ArrowIosDownwardOutline";
import { Trash } from "@styled-icons/bootstrap/Trash";
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
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > div {
      cursor: pointer;
    }
  }
`;

export const TrashIcon = styled(Trash)`
  width: 32px;
  height: 32px;
  color: var(--subTitle);
  fill: var(--subTitle);
  flex-shrink: 0;
  @media (max-width: 768px) {
    width: 34px;
    height: 34px;
  }
`;
export const ArrowDownIcon = styled(ArrowIosDownwardOutline)`
  width: 22px;
  height: 22px;
  color: var(--subTitle);
  fill: var(--subTitle);
`;

export const AddIcon = styled(Add)`
  margin-left: 20px;
  width: 38px;
  height: 38px;
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
  max-height: 87vh;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 4px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 4px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export const Input = styled.input`
  width: 30%;
  padding: 14px;
  border: none;
  outline: 0;
  color: var(--subTitle);
  font-size: 18px;
  background-color: transparent;
  @media (max-width: 768px) {
    width: 80%;
  }
`;
