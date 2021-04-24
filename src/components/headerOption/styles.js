import styled from "styled-components";
import { Avatar } from "@material-ui/core";

export const HeaderOptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;

  &:hover {
    color: black;
  }
  > .MuiSvgIcon-root {
    object-fit: contain;
    height: 25px !important;
    width: 25px !important;
  }

  > h3 {
    font-size: 12px;
    font-weight: 400;
  }
`;

export const AvatarContainer = styled(Avatar)`
  object-fit: contain;
  height: 25px !important;
  width: 25px !important;
`;
