import React from "react";
import QRCode from "react-native-qrcode-svg";

const QRCODE = ({ selectedStudent, getRef }) => {
  console.log("QRCode value", selectedStudent);
  return (
    <QRCode
      value={selectedStudent}
      size={250}
      color="black"
      backgroundColor="white"
      getRef={getRef}
    />
  );
};

export default QRCODE;
