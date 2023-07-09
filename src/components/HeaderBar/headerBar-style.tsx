import styled from "styled-components/native";

export const Container = styled.View`
  flex-direction: row;
  height: 80px;
  width: 100%;
  background-color: #fff;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LogoIcon = styled.Image`
    width: 32px;
    height: 32px;
    marginLeft: 12px;
`;

export const Logo = styled.Text`
  font-size: 24px;
  font-family: "Bernadette";
  color: #6db611;
  marginLeft: 4px;
`;
