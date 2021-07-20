import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Scrolable = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 100%;
  max-height: 100vh;
  overflow: auto;
`;

export const Head = styled.div`
  width: 100%;
  > h3 {
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
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
`;
export const Tag = styled.span`
  width: fit-content;
  cursor: pointer;
  font-family: "Inter";
  font-style: normal;
  font-size: 18px;
  line-height: 165%;
  color: var(--subTitle);
  margin-top: 14px;
  margin-left: 22px;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    left: -22px;
    bottom: calc(50% - 8px);
    width: 16px;
    height: 16px;
    border-radius: 50px;
    background-color: ${(props) => props.color};
  }
`;

export const Foot = styled.div`
  width: 100%;
  margin-top: 32px;
`;
