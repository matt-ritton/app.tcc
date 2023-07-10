import { Actionsheet, Box, Text, useDisclose } from "native-base";
import React, { useEffect } from "react";
import { View, Image} from "react-native";

const PhotoPreview = ({ photo, setCapturedPhoto, setPreviewVisible }: any) => {
  const _retakePicture = async () => {
    setCapturedPhoto(null);
    setPreviewVisible(false);
  };

  const {
    isOpen,
    onOpen,
    onClose
  } = useDisclose();

  useEffect(() => {
    onOpen();
  }, []);

  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Image source={{ uri: photo && photo.uri }} style={{position: "absolute", width: "100%", height: "100%"}} />
      <Actionsheet isOpen={isOpen}>
        <Actionsheet.Content>
          <Box w="100%" h={60} px={4} justifyContent="center">
            <Text fontSize="16" color="gray.500" _dark={{
            color: "gray.300"
          }}>
              Deseja enviar esta foto?
            </Text>
          </Box>
          <Actionsheet.Item>Enviar</Actionsheet.Item>
          <Actionsheet.Item onPress={_retakePicture}>Cancelar</Actionsheet.Item>
        </Actionsheet.Content>
      </Actionsheet>
      <View style={{height: 80, width: "100%", backgroundColor: "#000"}} ></View>
    </View>
  );
};

export default PhotoPreview;
