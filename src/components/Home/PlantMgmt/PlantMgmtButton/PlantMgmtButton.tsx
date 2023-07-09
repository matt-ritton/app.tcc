import React from "react";
import { Image, Text, View } from "react-native";
import { PlantMgmtButtonContainer } from "./plantMgmtButton-style";

export default function PlantMgmtButton() {
    return (
        <PlantMgmtButtonContainer>
            <Image style={{height: 40, width: 40}} source={require("../../../../../assets/images/img.lettuce.png")}/>
            <Text style={{fontFamily: "SairaLight" ,fontSize: 10, color: "#7e7e7e"}}>Alface</Text>
        </PlantMgmtButtonContainer>
    );
}