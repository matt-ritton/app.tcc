import { Button, FormControl, Input, Modal } from "native-base";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import HeaderBar from "../../components/HeaderBar/HeaderBar";
import PlantDiagnosis from "../../components/Home/PlantDiagnosis/PlantDiagnosis";
import PlantMgmt from "../../components/Home/PlantMgmt/PlantMgmt";
import {
  UsernameText,
  WelcomeText,
  WelcomeTextContainer,
} from "./homeScreen-style";

export default function HomeScreen({navigation}:any) {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("Matheus Ritton");

  const handleInputChange = (text: string) => {
    setName(text);
  };

  useEffect(() => {

  }, [name]);
  
  return (
    <>
      <View style={{ backgroundColor: "#f2f2f2", borderBottomLeftRadius: 64, paddingBottom: 8 }}>
        <HeaderBar />
        <WelcomeTextContainer>
          <View style={{ alignItems: "flex-end" }}>
            <WelcomeText>Bem-Vindo de Volta,</WelcomeText>
            <UsernameText onPress={() => setShowModal(true) }>{name.trim()}</UsernameText>
          </View>
        </WelcomeTextContainer>
        <PlantMgmt />
      </View>
      <PlantDiagnosis navigation={navigation}/>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Editar Seu Nome</Modal.Header>
          <Modal.Body>
            <FormControl>
              <FormControl.Label>Novo Nome</FormControl.Label>
              <Input value={name} onChangeText={handleInputChange}/>
            </FormControl>
          </Modal.Body>
          <Modal.Footer>
            <Button.Group space={2}>
              <Button variant="ghost" colorScheme="primary" onPress={() => {
              setShowModal(false);
            }}>
                Cancelar
              </Button>
              <Button colorScheme="primary" onPress={() => {
                console.log(name);
              setShowModal(false);
            }}>
                Salvar
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
}
