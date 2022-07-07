import { MenuContainer, ItemLista, Lista } from "./style";

import ImgUnion from "../../../assets/Union.svg";
import ImgBasket_solid from "../../../assets/Basket_solid.svg";
import ImgDevices_solid from "../../../assets/Devices_solid.svg";
import ImgSwitch_solid from "../../../assets/Switch_solid.svg";
import ImgChat_solid from "../../../assets/Chat_solid.svg";
import ImgCustomization_solid from "../../../assets/Customization_solid.svg";
import ImgMail_solid from "../../../assets/Mail_solid.svg";
import Imgemoji_solid from "../../../assets/emoji_solid.svg";

export default function MenuLateral() {
  return (
    <MenuContainer>
      <Lista>
        <ItemLista className="active">
          <ImgUnion /> Main Page
        </ItemLista>
        <ItemLista>
          <ImgBasket_solid /> Payments
        </ItemLista>
        <ItemLista>
          <ImgDevices_solid /> Cards
        </ItemLista>
        <ItemLista>
          <ImgSwitch_solid /> Services
        </ItemLista>
        <ItemLista>
          <ImgChat_solid /> Chats
        </ItemLista>
        <ItemLista>
          <ImgCustomization_solid /> Settings
        </ItemLista>
        <ItemLista>
          <ImgMail_solid /> Inbox
        </ItemLista>
        <ItemLista>
          <Imgemoji_solid /> Notifications
        </ItemLista>
      </Lista>
    </MenuContainer>
  );
}
