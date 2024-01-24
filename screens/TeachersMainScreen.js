import { StyleSheet, Text, View } from "react-native";
import StudentForm from "./StudentForm";
import RoomNumbers from "./RoomNumberField";
import Destination from "./Destination";
import TestButton from "./TestButton";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./Header";
import React from "react";
import { useAuthentication } from "../utils/hooks/useAuthentification";
import { Button } from "react-native-elements";
import { getAuth, signOut } from "firebase/auth";

export default function TeachersMainScreen() {
  const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState(undefined);
  const [selectedDestination, setSelectedDestination] = useState(undefined);
  const { user } = useAuthentication();
  const auth = getAuth();
  return (
    <>
      <Header></Header>
      <ScrollView style={styles.container}>
        <StudentForm
          selectedStudent={selectedStudent}
          setSelectedStudent={setSelectedStudent}
        />
        <View>
          <RoomNumbers
            selectedRoomNumber={selectedRoomNumber}
            setSelectedRoomNumber={setSelectedRoomNumber}
          />
        </View>
        <View>
          <Destination
            selectedDestination={selectedDestination}
            setSelectedDestination={setSelectedDestination}
          />
          <TestButton
            selectedStudent={selectedStudent}
            selectedDestination={selectedDestination}
            selectedRoomNumber={selectedRoomNumber}
          />
          <Button
            title="Sign Out"
            buttonStyle={styles.button}
            titleStyle={styles.buttonText}
            onPress={() => signOut(auth)}
          />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#FECD64",
  },
  title: {
    marginTop: 50,
    paddingVertical: 30,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#ffff00",
    color: "#ff0000",
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  button: { backgroundColor: "#6D161C" },
  buttonText: {
    color: "yellow",
  },
});
