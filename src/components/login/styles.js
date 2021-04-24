import styled from "styled-components";

export const LoginContainer = styled.div`
  display: grid;
  place-items: center;
  margin-left: auto;
  margin-right: auto;
  padding-top: 100px;
  padding-bottom: 100px;

  > img {
    object-fit: contain;
    height: 70px;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  > form {
    display: flex;
    flex-direction: column;
  }

  > form > input {
    width: 350px;
    height: 50px;
    font-size: 20px;
    padding-left: 10px;
    margin-bottom: 10px;
    border-radius: 5px;
  }

  > form > button {
    width: 365px;
    height: 50px;
    font-size: large;
    color: #fff;
    background-color: #0074b1;
    border-radius: 5px;
  }

  > p {
    margin-top: 20px;
  }
`;

export const Register = styled.span`
  cursor: pointer;
  color: #0177b7;
`;
