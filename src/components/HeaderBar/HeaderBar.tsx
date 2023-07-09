import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { Container, Logo, LogoIcon } from "./headerBar-style";

const HeaderBar = () => {
  return (
    <>
    <Container>
      <View style={{flexDirection: "row", alignItems: "center", marginBottom: 4}}>
        <LogoIcon source={require("../../../assets/icons/logo.png")} />
        <Logo>AppName</Logo>
      </View>
      <View style={{flexDirection: "row", alignItems: "center"}}>
      <TouchableOpacity style={{marginRight: 24, marginBottom: 14}}>
        <Ionicons name="notifications" size={24} color="#6db611" />
      </TouchableOpacity>
      <TouchableOpacity style={{marginRight: 12, marginBottom: 14}}>
        <FontAwesomeIcon size={24} color="#6db611" icon={faEllipsisVertical}/>
      </TouchableOpacity>
      </View>
    </Container>
    <Image source={require("../../../assets/images/img.header-border.png")} style={{marginTop: -68, zIndex: -1}} />
    </>
  );
};

export default HeaderBar;
