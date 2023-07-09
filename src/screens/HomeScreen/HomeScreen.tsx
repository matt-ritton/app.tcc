import React from "react";
import { View } from "react-native";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import PlantDiagnosis from "../../components/Home/ActionMenu/ActionMenu";
import PlantMgmt from "../../components/Home/PlantMgmt/PlantMgmt";
import {
  UsernameText,
  WelcomeText,
  WelcomeTextContainer,
} from "./homeScreen-style";

export default function HomeScreen({navigation}:any) {
  return (
    <>
      <View style={{ backgroundColor: "#f2f2f2", borderBottomLeftRadius: 64, paddingBottom: 8 }}>
        <HeaderBar />
        <WelcomeTextContainer>
          <View style={{ alignItems: "flex-end" }}>
            <WelcomeText>Bem-Vindo de Volta,</WelcomeText>
            <UsernameText>Matheus Ritton</UsernameText>
          </View>
        </WelcomeTextContainer>
        <PlantMgmt />
      </View>
      <PlantDiagnosis navigation={navigation}/>
    </>
  );
}
