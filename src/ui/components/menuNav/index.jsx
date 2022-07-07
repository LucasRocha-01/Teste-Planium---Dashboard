import React from "react";
import { Container, ItemLista, Lista, Menu, Options, Title } from "./style";

import ImgLogout from "../../../assets/logout.svg";
import ImgOption from "../../../assets/option.svg";
import BadgeAvatars from "../Avatar";

export default function MenuNav() {
  return (
    <Container>
      <Title>Dashboard</Title>
      <Menu>
        <Lista>
          <ItemLista>Dashboard</ItemLista>
          <ItemLista>Cards</ItemLista>
          <ItemLista>Workflow</ItemLista>
          <ItemLista>Notifications</ItemLista>
          <ItemLista>Settings</ItemLista>
        </Lista>
      </Menu>
      <BadgeAvatars />

      <Options>
        <Lista>
          <ItemLista>
            <ImgOption />
          </ItemLista>
          <ItemLista>
            <ImgLogout />
          </ItemLista>
        </Lista>
      </Options>
    </Container>
  );
}
