import { useState } from "react";
import { addStudent, deleteStudent } from "../../store/studentSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const useFilteredAndSortedStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const dispatch = useDispatch();

  const students = useSelector((state) => state.students.data);
  const filteredStudents = students.filter((student) =>
    student.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedStudents = [...filteredStudents];
  if (sortOrder !== "") {
    sortedStudents.sort((a, b) => {
      const dateA = new Date(a.dateOfBirth);
      const dateB = new Date(b.dateOfBirth);

      if (sortOrder === "asc") {
        return dateA - dateB;
      } else {
        return dateB - dateA;
      }
    });
  }

  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  const [isPopupOpen, setPopupOpen] = useState(false);

  const [newStudent, setNewStudent] = useState({
    name: "",
    dateOfBirth: "",
  });

  const handleAddStudent = () => {
    const studentData = {
      name: newStudent.name,
      dateOfBirth: newStudent.dateOfBirth,
    };
    dispatch(addStudent(studentData));
    setNewStudent({ name: "", dateOfBirth: "" });
    setPopupOpen(false);
  };

  const handleDeleteStudent = (studentId) => {
    dispatch(deleteStudent(studentId));
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
  };

  return {
    searchTerm,
    setSearchTerm,
    sortOrder,
    sortedStudents,
    handleSortOrderChange,
    handleAddStudent,
    isPopupOpen,
    newStudent,
    setNewStudent,
    setPopupOpen,
    handleDeleteStudent,
    handleClosePopup,
  };
};

export default useFilteredAndSortedStudents;
