import React from "react";
import {
  Lista,
  ListaItem,
  TimeApp,
  TitleApp,
  TitleCardApps,
  Container,
} from "./style";

import IconFigma from "../../../assets/appsIcons/figma.svg";
import IconAdobe from "../../../assets/appsIcons/Adobe.svg";
import IconEdge from "../../../assets/appsIcons/Edge.svg";
import IconOffice from "../../../assets/appsIcons/Office.svg";
import IconChrome from "../../../assets/appsIcons/Chrome.svg";
import IconlineMessenger from "../../../assets/appsIcons/lineMessenger.svg";
import IconLogo from "../../../assets/appsIcons/Logo.svg";

export default function ListaApps() {
  return (
    <Container>
      <TitleCardApps>Applications</TitleCardApps>
      <Lista>
        <ListaItem>
          <div>
            <IconFigma />
          </div>
          <TitleApp>Figma</TitleApp>
          <TimeApp>4h 43 min</TimeApp>
        </ListaItem>
        <ListaItem>
          <div>
            <IconAdobe />
          </div>
          <TitleApp>Adobe</TitleApp>
          <TimeApp>4h 43 min</TimeApp>
        </ListaItem>
        <ListaItem>
          <div>
            <IconEdge />
          </div>
          <TitleApp>Edge</TitleApp>
          <TimeApp>4h 43 min</TimeApp>
        </ListaItem>
        <ListaItem>
          <div>
            <IconOffice />
          </div>
          <TitleApp>Office</TitleApp>
          <TimeApp>4h 43 min</TimeApp>
        </ListaItem>
        <ListaItem>
          <div>
            <IconChrome />
          </div>
          <TitleApp>Chrome</TitleApp>
          <TimeApp>4h 43 min</TimeApp>
        </ListaItem>
        <ListaItem>
          <div>
            <IconlineMessenger />
          </div>
          <TitleApp>lineMessenger</TitleApp>
          <TimeApp>4h 43 min</TimeApp>
        </ListaItem>
        <ListaItem>
          <div>
            <IconLogo />
          </div>
          <TitleApp>Logo</TitleApp>
          <TimeApp>4h 43 min</TimeApp>
        </ListaItem>
      </Lista>
    </Container>
  );
}
