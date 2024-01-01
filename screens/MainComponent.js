import { useState, useEffect } from "react";
import { STUDENTINFO } from "../shared/StudentArray";
import {
  View,
  TextInput,
  FlatList,
  Text,
  TouchableOpacity,
} from "react-native";

// const Main = () => {
//   const [studentinfo, setStudentInfo] = useState(STUDENTINFO);

//   return <DirectoryScreen studentinfo={studentinfo}/>;
// };

// export default Main;

const StudentAutoComplete = () => {
  const [inputValue, setInputValue] = useState("");
  const [filteredStudents, setFilteredStudents] = useState([]);

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
    setInputValue(
      `${selectedStudent.firstName} ${selectedStudent.lastName} - ${selectedStudent.idNumber}`
    );
    setFilteredStudents([]); // Clear the filtered list after selection
  };

  const renderStudentItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemSelect(item)}>
      <Text>{`${item.firstName} ${item.lastName} - ${item.idNumber}`}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: "gray", borderWidth: 1, padding: 10 }}
        placeholder="Type a student name or ID"
        value={inputValue}
        onChangeText={handleInputChange}
      />
      <FlatList
        data={filteredStudents}
        renderItem={renderStudentItem}
        keyExtractor={(item) => item.idNumber.toString()} // Use idNumber as the unique key
      />
    </View>
  );
};

export default StudentAutoComplete;
