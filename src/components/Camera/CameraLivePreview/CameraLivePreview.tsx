import { faImages, faRepeat } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { Ionicons } from "@expo/vector-icons";
import { Camera, CameraType, FlashMode } from "expo-camera";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import {
  BottomContainer,
  CameraButton,
  ShutterButton,
  ShutterButtonOutline,
  UpperContainer,
} from "./cameraLivePreview-style";
import * as ImagePicker from "expo-image-picker";
import { Modal, Text, VStack } from "native-base";

const CameraLivePreview = ({
  navigation,
  setPreviewVisible,
  setCapturedPhoto,
}: any) => {
  const [type, setType] = useState(CameraType.back);
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [showModal, setShowModal] = useState(false);

  let camera: Camera | null;

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const _takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    const availableSizes = camera
      .getAvailablePictureSizesAsync("16:9")
      .then((sizes) => {
        console.log(sizes);
      });
    console.log("Tamanhos disponíveis", availableSizes);
    setPreviewVisible(true);
    setCapturedPhoto(photo);
  };

  const _handleFlashMode = () => {
    flashMode === "on"
      ? setFlashMode(FlashMode.off)
      : setFlashMode(FlashMode.on);
  };

  const _imagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });
    console.log("Foto carregada", result);
    if (!result.canceled) {
      setPreviewVisible(true);
      setCapturedPhoto(result.assets[0]);
    }
  };

  return (
    <>
      <View
        style={{ flex: 1, justifyContent: "center", backgroundColor: "#000" }}
      >
        <UpperContainer>
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <Ionicons
              name="information-circle-outline"
              size={30}
              color={"#fff"}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={_handleFlashMode}>
            {flashMode == "off" ? (
              <Ionicons name="flash" size={24} color={"#fff"} />
            ) : (
              <Ionicons name="flash-off" size={24} color={"#fff"} />
            )}
          </TouchableOpacity>
        </UpperContainer>
        <Camera
          flashMode={flashMode}
          style={{ height: 640 }}
          type={type}
          ratio="16:9"
          ref={(ref) => {
            camera = ref;
          }}
        >
          <BottomContainer>
            <CameraButton onPress={_imagePicker}>
              <FontAwesomeIcon size={20} color={"#fff"} icon={faImages} />
            </CameraButton>
            <ShutterButtonOutline>
              <ShutterButton onPress={_takePicture} />
            </ShutterButtonOutline>
            <CameraButton onPress={toggleCameraType}>
              <FontAwesomeIcon size={20} color={"#fff"} icon={faRepeat} />
            </CameraButton>
          </BottomContainer>
        </Camera>
      </View>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header>Como fazer o diagnóstico?</Modal.Header>
          <Modal.Body>
            <VStack space={4}>
              <Text>
                1. Tire uma foto próxima e focada nos danos encontrados.
              </Text>
              <Text>
                2. Certifique-se de tirar a foto em um ambiente bem iluminado.
              </Text>
            </VStack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default CameraLivePreview;
