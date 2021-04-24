import React from "react";
import {
  HeaderContainer,
  HeaderLeft,
  HeaderRight,
  HeaderSearch,
} from "./styles";

import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import HeaderOption from "../headerOption";
import { BusinessCenter, Chat, Notifications } from "@material-ui/icons";

function Header() {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedin"
        />
        <HeaderSearch>
          <SearchIcon />
          <input type="text" />
        </HeaderSearch>
      </HeaderLeft>

      <HeaderRight>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        <HeaderOption avatar="https://lh3.googleusercontent.com/a-/AOh14GgNDQ9c-FPnM6PWSYOqbji0Sx6IxO-JoKbObCE8NA=s96-c" title="me" />




      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
