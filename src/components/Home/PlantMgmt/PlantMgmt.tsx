import React from "react";
import { ScrollView, View } from "react-native";
import { Subtitle, Title } from "../../../../assets/global";
import { PlantMgmtAddButton, PlantMgmtContainer } from "./plantMgmt-style";
import PlantMgmtButton from "./PlantMgmtButton/PlantMgmtButton";
import { Ionicons } from "@expo/vector-icons";

export default function PlantMgmt() {
  return (
    <PlantMgmtContainer>
      <Title>Escolha sua Cultura</Title>
      <Subtitle>
        OBS: Nesta fase inicial do aplicativo, apenas uma cultura está
        disponível. Novas serão adicionadas no futuro.
      </Subtitle>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <PlantMgmtAddButton>
          <Ionicons name="add" size={24} color="#6db611" />
        </PlantMgmtAddButton>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <PlantMgmtButton />
          <PlantMgmtButton />
          <PlantMgmtButton />
          <PlantMgmtButton />
          <PlantMgmtButton />
          <PlantMgmtButton />
        </ScrollView>
      </View>
    </PlantMgmtContainer>
  );
}
