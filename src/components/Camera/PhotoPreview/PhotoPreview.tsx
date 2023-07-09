import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { View, Image } from "react-native";
import {
  BottomContainer,
  CameraButton,
} from "../CameraLivePreview/cameraLivePreview-style";

const PhotoPreview = ({ photo, setCapturedPhoto, setPreviewVisible }: any) => {
  const _retakePicture = async () => {
    setCapturedPhoto(null);
    setPreviewVisible(false);
  };

  return (
    <View style={{ flex: 1, width: "100%", height: "100%" }}>
      <Image source={{ uri: photo && photo.uri }} style={{ flex: 1 }} />
      <BottomContainer>
        <CameraButton>
          <FontAwesomeIcon size={32} color={"#fff"} icon={faCheck} />
        </CameraButton>
        <CameraButton onPress={_retakePicture}>
          <FontAwesomeIcon size={32} color={"#fff"} icon={faXmark} />
        </CameraButton>
      </BottomContainer>
    </View>
  );
};

export default PhotoPreview;
