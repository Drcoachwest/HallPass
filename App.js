import { StyleSheet, Text, View } from "react-native";
import StudentForm from "./screens/StudentForm";
import RoomNumbers from "./screens/RoomNumberField";
import Destination from "./screens/Destination";
import TestButton from "./screens/TestButton";
import { useState } from "react";
import { ScrollView } from "react-native-gesture-handler";
import Header from "./screens/Header";

export default function App() {
  const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [selectedRoomNumber, setSelectedRoomNumber] = useState(undefined);
  const [selectedDestination, setSelectedDestination] = useState(undefined);

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
});
