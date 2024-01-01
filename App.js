import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import StudentAutoComplete from "./screens/MainComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Hall Pass!</Text>
      <StudentAutoComplete />
      <StatusBar style="auto" />
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
    paddingVertical: 8,
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
