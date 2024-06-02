import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";

export default function App() {
  const navigation = useNavigation();
  const [facing, setFacing] = useState("back");
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    // Camera permissions are still loading.
    return <View />;
  }

  if (!permission.granted) {
    // Camera permissions are not granted yet.
    return (
      <View style={styles.container}>
        <Text style={{ textAlign: "center" }}>
          We need your permission to show the camera
        </Text>
        <TouchableOpacity
          onPress={requestPermission}
          style={styles.permissionButton}
        >
          <Text style={styles.permissionText}>Grant Permission</Text>
        </TouchableOpacity>
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing((current) => (current === "back" ? "front" : "back"));
  }

  return (
    <View style={styles.container}>
      <CameraView style={styles.camera} facing={facing}>
        <View style={styles.topContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.navigate("Home")}
          >
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.bottomContainer}>
          <TouchableOpacity style={styles.captureButton}>
            <Ionicons name="camera" size={36} color="white" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.flipButton}
            onPress={toggleCameraFacing}
          >
            <Ionicons name="camera-reverse" size={36} color="white" />
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  camera: {
    flex: 1,
  },
  topContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    padding: 20,
    paddingTop: 50, // Lower the back button a bit
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Add some background color to make it look more like the iPhone camera
  },
  backButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 20,
    padding: 10,
  },
  bottomContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: 20,
    backgroundColor: "rgba(0, 0, 0, 0.2)", // Add some background color to make it look more like the iPhone camera
  },
  captureButton: {
    backgroundColor: "rgba(255, 0, 0, 0.7)",
    borderRadius: 40,
    padding: 20,
  },
  flipButton: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 40,
    padding: 10,
  },
  permissionButton: {
    backgroundColor: "blue",
    borderRadius: 5,
    padding: 10,
    marginTop: 20,
  },
  permissionText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
});
