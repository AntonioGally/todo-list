import styled from "styled-components";
import { MessageAltAdd } from "@styled-icons/boxicons-regular/MessageAltAdd";
export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Head = styled.div`
  width: 100%;
  > h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 165%;
    color: var(--title);
    margin: 0;
  }
`;
export const Body = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-height: 80vh;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 10px;
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
export const Tag = styled.span`
  white-space: nowrap;
  overflow-x: hidden;
  text-overflow: ellipsis;
  min-height: 30px;
  width: fit-content;
  max-width: 80%;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-size: 18px;
  font-weight: 600;
  line-height: 165%;
  color: var(--subTitle);
  margin-top: 16px;
  padding-left: 26px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: calc(50% - 8px);
    width: 16px;
    height: 16px;
    border-radius: 50px;
    background-color: ${(props) => props.color};
  }
`;

export const Foot = styled.div`
  width: 100%;
  /* margin-top: 32px; */
  > span {
    cursor: pointer;
  }
`;

export const AddIcon = styled(MessageAltAdd)`
  width: 32px;
  height: 32px;
  margin-right: 6px;
  cursor: pointer;
`;
