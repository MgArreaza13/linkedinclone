import { Avatar } from "@material-ui/core";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import React from "react";
import InputOption from "../inputOption";
import {
  PostContainer,
  PostHeader,
  PostInfo,
  PostBody,
  PostButtons,
} from "./styles";

function Post({ name, description, message, photoUrl }) {
  return (
    <PostContainer>
      <PostHeader>
        <Avatar src={photoUrl}>{name[0]}</Avatar>
        <PostInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <p>{message}</p>
      </PostBody>
      <PostButtons>
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Like" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </PostButtons>
    </PostContainer>
  );
}

export default Post;
