import React from "react";
import { Camera, CameraType, FlashMode } from "expo-camera";
import { useState } from "react";
import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import {
  BottomContainer,
  CameraButton,
  Icon,
  ShutterButton,
  ShutterButtonOutline,
  UpperContainer,
} from "./style";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faBolt,
  faChevronLeft,
  faImages,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import PhotoPreview from "../../components/PhotoPreview/PhotoPreview";
import * as ImagePicker from "expo-image-picker";

export default function CameraScreen() {
  const [type, setType] = useState(CameraType.back);
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [flashMode, setFlashMode] = useState(FlashMode.off);
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<any>(null);

  let camera: Camera | null;

  if (!permission) {
    // Camera permissions are still loading
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet
    return (
      <View>
        <Text style={{ textAlign: "center" }}>
          Precisamos da sua permissão para usar a câmera
        </Text>
        <Button onPress={requestPermission} title="grant permission" />
      </View>
    );
  }

  function toggleCameraType() {
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );
  }

  const _takePicture = async () => {
    if (!camera) return;
    const photo = await camera.takePictureAsync();
    console.log("Foto capturada", photo);
    setPreviewVisible(true);
    setCapturedPhoto(photo);
  };

  const _handleFlashMode = () => {
    flashMode === "on"
      ? setFlashMode(FlashMode.off)
      : setFlashMode(FlashMode.on);
  };

  const _imagePicker = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });
    console.log("Foto carregada", result)
    if(!result.canceled) {
      setPreviewVisible(true);
      setCapturedPhoto(result.assets[0]);
    }
  };

  return (
    <>
      {previewVisible && capturedPhoto ? (
        <PhotoPreview photo={capturedPhoto}/>
      ) : (
        <View style={{ flex: 1, justifyContent: "center" }}>
          <Camera
            flashMode={flashMode}
            style={{ flex: 1 }}
            type={type}
            ratio="16:9"
            ref={(ref) => {
              camera = ref;
            }}
          >
            <UpperContainer>
              <FontAwesomeIcon size={24} color={"#fff"} icon={faChevronLeft} />
              <TouchableOpacity onPress={_handleFlashMode}>
                {flashMode == "off" ? (
                  <FontAwesomeIcon size={24} color={"#fff"} icon={faBolt} />
                ) : (
                  <Icon source={require("../../../assets/bolt-slash.png")} />
                )}
              </TouchableOpacity>
            </UpperContainer>
            <BottomContainer>
              <CameraButton onPress={_imagePicker}>
                <FontAwesomeIcon size={24} color={"#fff"} icon={faImages}/>
              </CameraButton>
              <ShutterButtonOutline>
                <ShutterButton onPress={_takePicture} />
              </ShutterButtonOutline>
              <CameraButton onPress={toggleCameraType}>
                <FontAwesomeIcon size={24} color={"#fff"} icon={faRepeat} />
              </CameraButton>
            </BottomContainer>
          </Camera>
        </View>
      )}
    </>
  );
}
