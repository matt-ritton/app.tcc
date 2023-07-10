import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Image, Pressable, TouchableOpacity, View } from "react-native";
import { Container, Logo, LogoIcon } from "./headerBar-style";
import { Menu } from "native-base";

const HeaderBar = ({navigation}:any) => {
  return (
    <>
      <Container>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 4,
          }}
        >
          <LogoIcon source={require("../../../assets/icons/logo.png")} />
          <Logo>AppName</Logo>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <TouchableOpacity style={{ marginRight: 24, marginBottom: 14 }} onPress={() => navigation.navigate("Notifications")}>
            <Ionicons name="notifications" size={24} color="#6db611" />
          </TouchableOpacity>
          <Menu
            shouldOverlapWithTrigger
            trigger={(triggerProps) => {
              return (
                <Pressable {...triggerProps} style={{ marginRight: 16, marginBottom: 14 }}>
                  <FontAwesomeIcon
                    size={24}
                    color="#6db611"
                    icon={faEllipsisVertical}
                  />
                </Pressable>
              );
            }}
          >
            <Menu.Item>Sobre</Menu.Item>
            <Menu.Item>Contato</Menu.Item>
            <Menu.Item>Configurações</Menu.Item>
          </Menu>
        </View>
      </Container>
      <Image
        source={require("../../../assets/images/img.header-border.png")}
        style={{ marginTop: -68, zIndex: -1 }}
      />
    </>
  );
};

export default HeaderBar;
