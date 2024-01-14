import React, { useState } from "react";
import {
  View,
  TextInput,
  Modal,
  FlatList,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { STUDENTINFO } from "../shared/StudentArray";

const StudentForm = ({ selectedStudent, setSelectedStudent }) => {
  const [inputValue, setInputValue] = useState("");
  // const [selectedStudent, setSelectedStudent] = useState(undefined);
  const [filteredStudents, setFilteredStudents] = useState([]);
  const [isModalVisible, setModalVisible] = useState(false);

  const handleInputChange = (text) => {
    setInputValue(text);
    // Filter students based on input value
    const filtered = STUDENTINFO.filter((student) =>
      `${student.firstName} ${student.lastName} ${student.idNumber}`
        .toLowerCase()
        .includes(text.toLowerCase())
    );
    setFilteredStudents(filtered);
  };

  const handleItemSelect = (selectedStudent) => {
    console.log("Selected Student from StudentAutoComplete:", selectedStudent);
    setSelectedStudent(selectedStudent);
    setModalVisible(false);
    setInputValue(
      `${selectedStudent.firstName} ${selectedStudent.lastName} - ${selectedStudent.idNumber}`
    );
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemSelect(item)}>
      <Text>{`${item.firstName} ${item.lastName} - ${item.idNumber}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.red}>
            {selectedStudent
              ? selectedStudent.firstName +
                " " +
                selectedStudent.lastName +
                " " +
                selectedStudent.idNumber
              : "Find Student"}
          </Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={isModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View
          style={{
            flex: 1,
            justifyContent: "flex-start",
            maxHeight: 400,
            borderColor: "black",

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
              placeholder="Type a student name or ID"
              value={inputValue}
              onChangeText={handleInputChange}
            />
            <FlatList
              data={filteredStudents}
              renderItem={renderStudentItem}
              keyExtractor={(item) => item.idNumber.toString()}
            />
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

export default StudentForm;
