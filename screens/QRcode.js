import React from "react";
import QRCode from "react-native-qrcode-svg";

const QRCODE = ({
  selectedStudent,
  selectedRoomNumber,
  selectedDestination,
  getRef,
}) => {
  const qrData = JSON.stringify({
    selectedStudent,
    selectedRoomNumber,
    selectedDestination,
  });
  console.log("QRCode value", qrData);
  return (
    <QRCode
      value={qrData}
      size={250}
      color="black"
      backgroundColor="white"
      getRef={getRef}
    />
  );
};

export default QRCODE;
