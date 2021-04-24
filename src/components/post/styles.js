import styled from "styled-components";

export const PostContainer = styled.div`
  background: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

export const PostHeader = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

export const PostInfo = styled.div`
  margin-left: 10px;
  > p {
    font-size: 12px;
    color: gray;
  }
  > h2 {
    font-size: 15px;
  }
`;

export const PostBody = styled.div`
  overflow-wrap: anywhere;
`;

export const PostButtons = styled.div`
  display: flex;
  justify-content: space-evenly;
`;
