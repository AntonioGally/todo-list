import styled from "styled-components";

export const Navbar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    color: var(--subTitle);
    cursor: pointer;
  }
  > button {
    border: none;
    outline: 0;
    border-radius: 6px;
    padding: 6px 34px;
    background-color: var(--buttonBackground);
    > span {
      color: var(--buttonFont);
      font-size: 13px;
    }
  }
`;

export const Body = styled.div`
  width: 100%;
`;

export const Title = styled.div`
  color: var(--title);
  font-size: 18px;
  margin-top: 24px;
`;
export const Input = styled.input`
  margin-top: 5px;
  width: 100%;
  font-size: 15px;
  padding-left: 16px;
  color: var(--subTitle);
  border: none;
  outline: 0;
`;
export const TextArea = styled.textarea`
  margin-top: 5px;
  width: 100%;
  font-size: 15px;
  padding-left: 16px;
  color: var(--subTitle);
  border: none;
  outline: 0;
`;
export const Footer = styled.div`
  width: 100%;
  margin-top: 24px;
`;

export const TitleContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SearchTag = styled.input`
  width: 50%;
  font-size: 15px;
  padding-left: 16px;
  color: var(--subTitle);
  border: none;
  outline: 0;
`;

export const TagContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  margin-top: 10px;
  flex-wrap: wrap;
`;
export const Tag = styled.div`
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
    background-color: ${(props) => props.tagColor};
  }
`;

export const Color = styled.div`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  padding: 3px;
  margin: 3px;
  background-color: ${(props) => props.color};
  opacity: 0.3;
  ${(props) => {
    if (props.isSelected) {
      return "opacity: 1";
    }
  }}
`;
