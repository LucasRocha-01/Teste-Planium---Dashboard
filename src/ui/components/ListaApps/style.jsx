import { styled } from "@mui/material";

export const Container = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Lista = styled("ul")`
  display: flex;
  margin: 0 auto;
  flex-direction: column;
  list-style: none;
  padding: 0;
  gap: 8.44px;
  align-items: center;
  overflow-y: auto;

  /* height: 100%; */
`;

export const ListaItem = styled("li")`
  width: 695.13px;
  height: 45.56px;
  left: 23.87px;
  top: 174px;
  display: flex;
  align-items: center;

  background: #fafbfc;
  border-radius: 4px;

  div {
    margin-left: 18.13px;
    display: flex;
    align-items: center;
    justify-content: center;

    width: 29px;
    height: 29px;
    /* left: 42px;
    top: 342px; */

    /* White/White */

    background: #ffffff;
    /* Shadows/Gray/1 Level */

    box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
    border-radius: 4px;
  }
`;

export const IconApp = styled("img")``;

export const TitleApp = styled("h5")`
  margin-left: 50px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 20px;
  /* or 182% */

  /* Gray/500 */

  color: #606c80;
`;
export const TimeApp = styled("span")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 11px;
  line-height: 20px;
  margin-left: auto;
  margin-right: 60px;
  right: 0;
  /* or 182% */

  /* Gray/400 */
  color: #7a8699;
`;

export const TitleCardApps = styled("h2")`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;

  color: #323c4d;

  width: 695px;
  height: 33px;
  left: 24px;
  top: 25px;

  display: flex;
  align-items: center;

  /* White/White */

  background: #ffffff;
  /* Gray/50 */

  border: 1px solid #ebeef2;
  /* Shadows/Gray/1 Level */

  padding-left: 6px;

  box-shadow: 0px 1px 3px rgba(96, 108, 128, 0.05);
  border-radius: 8px;
`;
