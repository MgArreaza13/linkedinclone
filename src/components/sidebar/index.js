import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import {
  SidebarContainer,
  SidebarTop,
  SidebarAvatar,
  SidebarStatsContainer,
  SidebarStat,
  SidebarStatNumber,
  SidebarBottom,
  RecentItem,
  Hash,
} from "./styles";
function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <RecentItem>
        <Hash>#</Hash>
        <p>{topic}</p>
      </RecentItem>
    );
  };

  return (
    <SidebarContainer>
      <SidebarTop>
        <img
          src="https://images.hdqwalls.com/wallpapers/bthumb/ribbon-generator-abstract-4k-3b.jpg"
          alt="image"
        />
        <SidebarAvatar src={user.photoUrl}>{user.email[0]}</SidebarAvatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </SidebarTop>
      <SidebarStatsContainer>
        <SidebarStat>
          <p>Who viewed you</p>
          <SidebarStatNumber>2,543</SidebarStatNumber>
        </SidebarStat>
        <SidebarStat>
          <p>Views on post</p>
          <SidebarStatNumber>2,448</SidebarStatNumber>
        </SidebarStat>
      </SidebarStatsContainer>

      <SidebarBottom>
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("design")}
        {recentItem("developer")}
      </SidebarBottom>
    </SidebarContainer>
  );
}

export default Sidebar;
