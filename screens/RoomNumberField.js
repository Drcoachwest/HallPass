import React from "react";
import { useState } from "react";
import {
  Modal,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { ROOMNUMBERS } from "../shared/roomNumbers";
import { TextInput } from "react-native-gesture-handler";

const RoomNumbers = () => {
  const [filteredRoomNumbers, setFilteredRoomNumbers] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [selectedRoomNumber, setSelectedRoomNumber] = useState(undefined);

  const handleInputChange = (text) => {
    console.log(ROOMNUMBERS);
    setInputValue(text);
    // Filter room numbers based on input value
    const filtered = ROOMNUMBERS.filter((room) =>
      `${room.roomNumber} ${room.teacherName}`
        .toLowerCase()
        .includes(text.toLowerCase())
    );
    console.log(filtered);
    setFilteredRoomNumbers(filtered);
  };

  const handleItemSelect = (selectedRoomNumber) => {
    setSelectedRoomNumber(selectedRoomNumber);
    setModalVisible(false);
    setInputValue(
      `${selectedRoomNumber.roomNumber} ${selectedRoomNumber.teacherName}`
    );
  };

  const renderRoomItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemSelect(item)}>
      <Text>{`${item.roomNumber} ${item.teacherName}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={{
          color: "white",
          fontSize: 6,
        }}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.red}>
          {selectedRoomNumber
            ? `${selectedRoomNumber.roomNumber} ${selectedRoomNumber.teacherName}`
            : "Current Location"}
        </Text>
      </TouchableOpacity>
      <Modal visible={isModalVisible} transparent={true}>
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            maxHeight: 400,
            borderColor: "black",
            // borderWidth: 4,
            backgroundColor: "none",
            margin: 20,
            marginTop: 240,
          }}
        >
          <View style={{ backgroundColor: "white", padding: 10 }}>
            <TextInput
              style={{
                height: 40,
                borderColor: "gray",
                borderWidth: 1,
                padding: 10,
              }}
              placeholder="Room Number or Teacher's Name"
              value={inputValue}
              onChangeText={handleInputChange}
            />
            {inputValue && (
              <FlatList
                data={filteredRoomNumbers}
                renderItem={renderRoomItem}
                keyExtractor={(item) => item.roomNumber.toString()}
              />
            )}
            <TouchableOpacity onPress={() => setModalVisible(false)}>
              <Text>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: "#20232a",
    borderRadius: 6,
    backgroundColor: "#ffff00",
    color: "#ff0000",
    textAlign: "center",
  },
  red: {
    color: "red",
    fontWeight: "bold",
    paddingVertical: 8,
    padding: 10,
  },
});

export default RoomNumbers;
