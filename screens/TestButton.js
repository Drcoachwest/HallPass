import { Button } from "react-native-elements";
import {
  Modal,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

const TestButton = () => {
  return (
    <View style={styles.container}>
      <Button
        title="Create Pass"
        buttonStyle={styles.button}
        titleStyle={styles.buttonText}
      ></Button>
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
