import { Button } from "react-native-elements";
import { View, StyleSheet, Alert } from "react-native";
import { useEffect, useState } from "react";
import QRCODE from "./QRcode";

const TestButton = ({ selectedStudent }) => {
  const [showQRCode, setShowQRCode] = useState(false);

  useEffect(() => {
    console.log("Use Effect");
  }, [selectedStudent]);

  const generateQRCode = () => {
    console.log("Selected Student111", selectedStudent);
    if (selectedStudent && selectedStudent !== null) {
      setShowQRCode(true);
    } else {
      Alert.alert(
        "Error",
        "Please fill in all fields before generating the QR Code"
      );
    }
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
      {showQRCode && (
        <View style={{ alignItems: "center", marginTop: 20 }}>
          <QRCODE value={selectedStudent} />
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    backgroundColor: "yellow",
    color: "red",
  },
  button: { backgroundColor: "red" },
  buttonText: {
    color: "yellow",
  },
});

export default TestButton;
