import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  border-radius: 10px;
  text-align: center;
  height: fit-content;
`;

export const SidebarTop = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid lightgray;
  border-bottom: 0;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  background-color: white;
  padding-bottom: 10px;
  > img {
    margin-bottom: -20px;
    width: 100%;
    height: 60px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    object-fit: cover;
  }
  > h2 {
    font-size: 18px;

    padding: 0 10px;
  }
  > h4 {
    color: gray;
    font-size: 12px;
    padding: 0 10px;
  }
`;
export const SidebarAvatar = styled(Avatar)`
  margin-bottom: 10px;
  cursor: pointer;
`;
export const SidebarStatsContainer = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  border: 1px solid lightgray;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

export const SidebarStat = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  > p {
    color: gray;
    font-size: 13px;
    font-weight: 600;
  }
`;

export const SidebarStatNumber = styled.p`
  font-weight: bold;
  color: #0a66c2 !important;
`;

export const SidebarBottom = styled.div`
  text-align: left;
  padding: 10px;
  border: 1px solid lightgray;
  background-color: white;
  border-radius: 10px;
  margin-top: 10px;
  > p {
    font-size: 13px;
    padding-bottom: 10px;
  }
`;

export const RecentItem = styled.div`
  display: flex;
  font-size: 13px;
  color: gray;
  font-weight: bolder;
  cursor: pointer;
  margin-bottom: 5px;
  padding: 5px;

  &:hover {
    background-color: whitesmoke;
    border-radius: 10px;
    cursor: pointer;
    color: black;
  }
`;

export const Hash = styled.span`
  margin-left: 5px;
  margin-right: 10px;
`;
