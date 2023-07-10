import React from "react";
import { Subtitle, Title } from "../../../../assets/global";
import { ActionMenuContainer, CardBackground, TakePictureCard } from "./plantDiagnosis-style";
import { Button } from "native-base";

export default function PlantDiagnosis({navigation}:any) {
    return (
        <ActionMenuContainer>
            <TakePictureCard>
                <CardBackground source={require("../../../../assets/images/bg.takePictureCard.png")} />
                <Title style={{marginTop: 16}}>Diagnosticar Cultura</Title>
                <Subtitle style={{color: "#628536", paddingLeft: 8, paddingRight: 8, marginTop: 16, marginBottom: 16}}>Para diagnosticar sua cultura, basta tirar uma foto e aguardar o diagnóstico, contendo as informações principais informações da doença ou praga.</Subtitle>
                <Button colorScheme={"primary"} style={{marginBottom: 16}} onPress={() => navigation.navigate("Camera") } >Tire uma foto</Button>
            </TakePictureCard>
        </ActionMenuContainer>
    );
}