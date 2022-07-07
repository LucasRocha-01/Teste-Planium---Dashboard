import { styled } from "@mui/material";

export const MenuContainer = styled("div")`
  /* display: flex; */

  font-family: "Inter";
  justify-content: center;
  background-color: #f7f8fa;
  height: 100vh;
  /* position: relative; */
  /* top: 0px; */
  /* left: 0px; */
  border-bottom: 1px solid #f0f0f0;
  padding: ${({ theme }) => theme.spacing(6)};

  .active {
    color: #2563eb;
    path {
      fill: #2563eb;
    }
  }
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

  &:hover {
    color: #2563eb;
    path {
      fill: #2563eb;
    }
  }
  path {
    fill: #dadee6;
  }
`;

export const Lista = styled("ul")`
  list-style: none;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 20px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 0;
`;
