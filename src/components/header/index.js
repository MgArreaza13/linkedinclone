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
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "../../features/userSlice";
import { auth } from "../../firebase";

function Header() {
  const user = useSelector(selectUser);

  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <HeaderContainer>
      <HeaderLeft>
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg"
          alt="linkedin"
        />
        <HeaderSearch>
          <SearchIcon />
          <input type="text" placeholder="search" />
        </HeaderSearch>
      </HeaderLeft>

      <HeaderRight>
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenter} title="Jobs" />
        <HeaderOption Icon={Chat} title="Messaging" />
        <HeaderOption Icon={Notifications} title="Notifications" />
        {user && (
          <HeaderOption avatar={true} title="Logout" onClick={logoutOfApp} />
        )}
      </HeaderRight>
    </HeaderContainer>
  );
}

export default Header;
