import { styled } from "@mui/material";

export const Container = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  top: 0;
  background-color: #f7f8fa;
  width: 100%;
  z-index: 2;
  padding: 29px 50px;
`;

export const Title = styled("h2")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 24px;
  line-height: 36px;
  width: 200px;
`;

export const Menu = styled("nav")`
  display: flex;
  flex-direction: row;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  gap: 200px;
`;

export const Lista = styled("ul")`
  list-style: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 0;
`;

export const ItemLista = styled("li")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  align-items: center;
  gap: 24px;
  color: #98a2b2;

  &:hover {
    color: #2563eb;
    path {
      fill: #2563eb;
    }
  }
  path {
    fill: #98a2b3;
  }
`;

export const Options = styled("div")`
  display: flex;
  gap: 16px;
`;

export const Search = styled("input")`
  border: 0;
  background-color: initial;
`;

export const SearchDiv = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;

  &:hover {
    input {
      color: #2563eb;
      border-bottom: 1px solid #2563eb;
    }

    path {
      fill: #2563eb;
    }
  }
`;

export const Avatar = styled("div")`
  display: flex;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
  }
`;
