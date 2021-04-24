import { FiberManualRecord, Info } from "@material-ui/icons";
import React from "react";
import {
  WidgetsContainer,
  WidgetsHeader,
  WidgetArticleContainer,
  WidgetArticleLeft,
  WidgetArticleRight,
} from "./styles";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <WidgetArticleContainer>
      <WidgetArticleLeft>
        <FiberManualRecord />
      </WidgetArticleLeft>
      <WidgetArticleRight>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </WidgetArticleRight>
    </WidgetArticleContainer>
  );

  return (
    <WidgetsContainer>
      <WidgetsHeader>
        <h2>LinkedIn News</h2>
        <Info />
      </WidgetsHeader>
      {newsArticle("React", "Top news - 9099 readers ")}
      {newsArticle("React", "Top news - 9099 readers ")}
      {newsArticle("React", "Top news - 9099 readers ")}
      {newsArticle("React", "Top news - 9099 readers ")}
      {newsArticle("React", "Top news - 9099 readers ")}
      {newsArticle("React", "Top news - 9099 readers ")}
    </WidgetsContainer>
  );
}

export default Widgets;
