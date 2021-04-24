import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-evenly;
  border-bottom: 0.1px solid lightgray;
  padding-top: 10px;
  padding-bottom: 10px;
  width: 100%;
  z-index: 999;
`;

export const HeaderLeft = styled.div`
  display: flex;
  >img {
    object-fit: contain;
    height: 40px;
    margin-right: 10px;
  }
`;

export const HeaderRight = styled.div`
  display: flex;

`;

export const HeaderSearch = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  border-radius: 5px;
  height: 22px;
  color: gray;
  background-color: #eef3f8;

  > input {
    outline: none;
    border: none;
    background: none;
  }

`;
