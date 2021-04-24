import React from "react";
import { HeaderOptionContainer, AvatarContainer } from "./styles";
function HeaderOption({ avatar, Icon, title }) {
  return (
    <HeaderOptionContainer>
      {Icon && <Icon />}
      {avatar && <AvatarContainer src={avatar} />}
      <h3>{title}</h3>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;
