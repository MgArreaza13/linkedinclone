import React from "react";
import { InputOptionContainer } from "./styles";

function InputOption({ Icon, title, color }) {
  return (
    <InputOptionContainer>
      {Icon && <Icon style={{ color: color }} />}
      <h4> {title} </h4>
    </InputOptionContainer>
  );
}

export default InputOption;
