import React from "react";
import { Camera } from "expo-camera";
import { useState } from "react";
import { Button, Text, View } from "react-native";
import PhotoPreview from "../../components/Camera/PhotoPreview/PhotoPreview";
import CameraLivePreview from "../../components/Camera/CameraLivePreview/CameraLivePreview";
import { useIsFocused } from "@react-navigation/native";

export default function CameraScreen({ navigation }: any) {
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const [previewVisible, setPreviewVisible] = useState(false);
  const [capturedPhoto, setCapturedPhoto] = useState<any>(null);

  const isFocused = useIsFocused();

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
  return (
    <>
      {previewVisible && capturedPhoto ? (
        <PhotoPreview
          setPreviewVisible={setPreviewVisible}
          setCapturedPhoto={setCapturedPhoto}
          photo={capturedPhoto}
        />
      ) : (
        <>
          {isFocused && (
            <CameraLivePreview
              navigation={navigation}
              setPreviewVisible={setPreviewVisible}
              setCapturedPhoto={setCapturedPhoto}
            />
          )}
        </>
      )}
    </>
  );
}
