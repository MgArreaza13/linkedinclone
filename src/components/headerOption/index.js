import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import { HeaderOptionContainer, AvatarContainer } from "./styles";

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);

  return (
    <HeaderOptionContainer onClick={onClick}>
      {Icon && <Icon />}
      {avatar && (
        <AvatarContainer src={user?.photoUrl}>
          {user?.email[0]}{" "}
        </AvatarContainer>
      )}
      <h3>{title}</h3>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;
