import React from "react";
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
        <SidebarAvatar />
        <h2>mgarreaza13</h2>
        <h4>mg.arreaza.13@gmail.com</h4>
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
