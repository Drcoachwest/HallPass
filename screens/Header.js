import { View, Text, Image, StyleSheet } from "react-native";

const Header = () => {
  return (
    <View style={styles.header}>
      <Image
        source={require("../assets/SGP_academic_logo.png")}
        style={styles.logo}
      ></Image>
      <Text style={styles.title}>HallPass</Text>
      <Image
        source={require("../assets/SGP_academic_logo.png")}
        style={styles.logo}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    // justifyContent: "space-between",
    backgroundColor: "#A51F26", // Set your desired background color
    padding: 10,
    paddingTop: 50,
  },
  logo: {
    width: 80, // Adjust the width of your logo as needed
    height: 80, // Adjust the height of your logo as needed
    // marginRight: "", // Need to figure out how to center Text without margin
  },
  title: {
    color: "#FFCC63", // Set your desired title color
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Header;
