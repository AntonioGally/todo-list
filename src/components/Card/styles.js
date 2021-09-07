import styled from "styled-components";
//Icons
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular/DotsHorizontalRounded";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 12px;
  background-color: var(--cardBackground);
  border-radius: 6px;
  width: 95%;
  margin: 6px 0;
  height: fit-content;
  @media (max-width: 768px) {
    width: 100%;
  }
  ${(props) => {
    if (props.isDone) {
      return "opacity: 0.5 !important";
    }
  }}
`;
export const Head = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Title = styled.h3`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 165%;
  color: var(--title);
  margin: 0;
  text-decoration: ${({ isDone }) => isDone && "line-through"};
`;
export const MenuIcon = styled(DotsHorizontalRounded)`
  height: 24px;
  width: 24px;
  flex-shrink: 0;
  color: var(--subTitle);
  fill: var(--subTitle);
  cursor: pointer;
`;
export const Body = styled.div`
  width: 100%;
  flex-wrap: wrap;
  margin: 12px 0;
`;
export const Text = styled.p`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 145%;
  color: var(--title);
  text-decoration: ${({ isDone }) => isDone && "line-through"};
`;
export const Foot = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const TagContent = styled.div`
  ::-webkit-scrollbar {
    height: 4px;
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
  max-width: 90%;
  overflow-x: auto;
  display: flex;
  align-content: center;
`;

export const Tag = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 6px;
  border-radius: 50%;
  flex-shrink: 0;
  background-color: ${(props) => {
    return props.color;
  }};
`;
