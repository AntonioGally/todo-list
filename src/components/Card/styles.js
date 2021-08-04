import styled from "styled-components";
//Icons
import { DotsHorizontalRounded } from "@styled-icons/boxicons-regular/DotsHorizontalRounded";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  /* margin: 6px; */
  padding: 12px;
  background-color: var(--cardBackground);
  border-radius: 6px;
  width: 95%;
  margin: 6px auto;
  height: fit-content;
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
  background-color: ${(props) => {
    return props.color;
  }};
`;
