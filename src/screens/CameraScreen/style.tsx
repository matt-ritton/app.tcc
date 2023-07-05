import React from "react";
import styled from "styled-components/native";

export const Icon = styled.Image`
  width: 24px;
  height: 24px;
`;



export const UpperContainer = styled.View`
  flex: 1;
  flex-direction: row;
  margin: 40px 16px 0 16px;
  justify-content: space-between;
  align-items: flex-start;
`;

export const BottomContainer = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: flex-end;
`;

export const CameraButton = styled.TouchableOpacity`
  padding: 8px;
  border: 2px solid #fff;
  border-radius: 40px;
  margin: 0 32px 72px 32px;
`;

export const ShutterButtonOutline = styled.TouchableOpacity`
  width: 72px;
  height: 72px;
  margin: 0 16px 64px 16px;
  border-radius: 40px;
  border: 2px solid #fff;
`;

export const ShutterButton = styled.TouchableOpacity`
  width: 64px;
  height: 64px;
  border-radius: 32px;
  background-color: #fff;
  align-self: center;
  margin-top: 2px;
`;
