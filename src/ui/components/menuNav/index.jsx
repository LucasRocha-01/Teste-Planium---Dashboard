import React from "react";
import {
  Avatar,
  Container,
  ItemLista,
  Lista,
  Menu,
  Options,
  Search,
  SearchDiv,
  Title,
} from "./style";

import TextField from "@mui/material/TextField";

import ImgLogout from "../../../assets/logout.svg";
import ImgOption from "../../../assets/option.svg";
import ImgSearch from "../../../assets/Search.svg";
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

        <SearchDiv>
          <ImgSearch />
          <Search placeholder={"Search Content ..."} />
        </SearchDiv>
      </Menu>

      <Avatar>
        <BadgeAvatars />
        <div>
          <strong>Jackson D.</strong>
          <span>Mananger</span>
        </div>
      </Avatar>

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
