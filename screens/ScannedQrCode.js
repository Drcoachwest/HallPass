import React, { useEffect } from "react";
import { useState } from "react";
import QRCodeScanner from "react-native-qrcode-scanner";
import { RNCamera } from "react-native-camera";
import {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableOpacity,
  Linking,
  Alert,
  View,
} from "react-native";

const ScannedQRCode = () => {
  const [scannedData, setScannedData] = useState(null);

  const handleScan = (data) => {
    setScannedData(data);
  };
  return (
    <View>
      <Text>
        {scannedData ? `Scanned Data: ${scannedData}` : "Scan a QR Code"}
      </Text>
      <QRCodeScanner onRead={handleScan} />
    </View>
  );
};
export default ScannedQRCode;
