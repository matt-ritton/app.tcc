import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import { Text, View, ImageBackground } from "react-native";
import { BottomContainer, CameraButton } from "../../screens/CameraScreen/style";

const PhotoPreview = ({photo}:any) => {
    return(
        <View style={{flex : 1, width: "100%", height: "100%"}}>
            <ImageBackground source={{uri: photo && photo.uri}} style={{flex : 1}}>
            <BottomContainer>
                <CameraButton>
                    <FontAwesomeIcon size={32} color={"#fff"} icon={faCheck} />
                </CameraButton>
                <CameraButton>
                    <FontAwesomeIcon size={32} color={"#fff"} icon={faXmark} />
                </CameraButton>
            </BottomContainer>
            </ImageBackground>
        </View>
    )
}

export default PhotoPreview;