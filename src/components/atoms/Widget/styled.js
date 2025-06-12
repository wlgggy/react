import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0px 20px ;
  justify-content: start;
  align-items: center;
  width: 850px;
`;

export const Card = styled.div`
  width: 230px;
  height: 200px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  padding: 20px;
  &:hover{
    scale: 1.05;
  }
`;

export const DateText = styled.p`
  font-size: 14px;
  color: #999999;
  margin: 8px 0;
`;

export const TitleText = styled.h2`
  font-size: 20px;
  font-weight: bold;
  color: #333333;
  margin: 8px 0;
  text-align: start;
`;

export const MoreText = styled.span`
  font-size: 14px;
  color: #007bff;
  margin-top: auto;
  cursor: pointer;
`;
