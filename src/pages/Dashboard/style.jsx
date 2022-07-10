import { styled } from "@mui/material";

export const Main = styled("div")`
  height: 100%;
  display: flex;
  max-width: 1300px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;

  .PieSchart {
    position: relative;
  }

  .charts2Columns {
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 20px;
  }

  .BarCostChart {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Container = styled("div")`
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-content: center;
  gap: 20px;
  margin: 50px;
`;

export const Coluna = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;

export const Linha = styled("div")`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
  gap: 20px;
`;
