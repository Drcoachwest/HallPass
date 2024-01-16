import { Button } from "react-native-elements";
import {
  View,
  StyleSheet,
  Alert,
  Modal,
  Text,
  TouchableOpacity,
} from "react-native";
import { useEffect, useState } from "react";
import QRCODE from "./QRcode";

const TestButton = ({
  selectedStudent,
  selectedRoomNumber,
  selectedDestination,
}) => {
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    console.log("Use Effect");
  }, [selectedStudent, selectedRoomNumber, selectedDestination]);

  const generateQRCode = () => {
    console.log("Selected Student QRCODE Generator", selectedStudent);
    console.log("Selected Room Number QRCODE Generator", selectedRoomNumber);
    console.log("Selected Destination QRCODE Generator", selectedDestination);
    if (
      selectedStudent &&
      selectedStudent !== null &&
      selectedRoomNumber &&
      selectedDestination
    ) {
      setShowQRCode(true);
    } else {
      Alert.alert(
        "Error",
        "Please fill in all fields before generating the QR Code"
      );
    }
  };
  const closeModal = () => {
    setShowQRCode(false);
  };

  return (
    <View style={styles.container}>
      {selectedStudent && (
        <Button
          title="Create Pass"
          buttonStyle={styles.button}
          titleStyle={styles.buttonText}
          onPress={generateQRCode}
        />
      )}
      <Modal
        transparent={true}
        visible={showQRCode}
        onRequestClose={closeModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <TouchableOpacity onPress={closeModal}>
              <Text style={styles.closeButton}>Close</Text>
            </TouchableOpacity>
            <View style={{ alignItems: "center", marginTop: 20 }}>
              <QRCODE
                value={{
                  selectedStudent,
                  selectedRoomNumber,
                  selectedDestination,
                }}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: "yellow",
    color: "red",
  },
  button: { backgroundColor: "#6D161C" },
  buttonText: {
    color: "yellow",
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    alignItems: "center",
  },
  closeButton: {
    color: "blue",
    marginBottom: 10,
  },
});

export default TestButton;
