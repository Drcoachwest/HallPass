import { StyleSheet, Text, View } from "react-native";
import StudentAutoComplete from "./screens/MainComponent";
import RoomNumbers from "./screens/RoomNumberField";
import Destination from "./screens/Destination";
import TestButton from "./screens/TestButton";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hall Pass!</Text>
      <StudentAutoComplete />
      <View>
        <RoomNumbers />
      </View>
      <View>
        <Destination />
        <TestButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "#eaeaea",
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
