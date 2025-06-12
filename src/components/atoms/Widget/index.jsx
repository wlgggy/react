// InfoCard
import React from "react";
import { Card, DateText, TitleText, MoreText } from "./styled";

const InfoCard = ({ date, title }) => {
  return (
    <Card>
      <DateText>{date}</DateText>
      <TitleText>{title}</TitleText>
      <MoreText>더보기 →</MoreText>
    </Card>
  );
};

export default InfoCard;
