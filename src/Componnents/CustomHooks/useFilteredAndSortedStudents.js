import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addStudent, deleteStudent, updateStudent } from "../../store/studentSlice";

const useFilteredAndSortedStudents = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [newStudent, setNewStudent] = useState({
    name: "",
    dateOfBirth: "",
  });
  const [editedStudent, setEditedStudent] = useState({
    name: "",
    dateOfBirth: "",
  });
  const [isEditing, setIsEditing] = useState(false);

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

  const handleEditClick = (student) => {
    setIsEditing(true);
    setEditedStudent({ name: student.name, dateOfBirth: student.dateOfBirth });
  };

  const handleEditInputChange = (event) => {
    const { name, value } = event.target;
    setEditedStudent((prevStudent) => ({
      ...prevStudent,
      [name]: value,
    }));
  };

  const handleEditSubmit = (studentId) => {
    dispatch(
      updateStudent({ studentId, updatedData: editedStudent })
    );
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
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
    handleEditClick,
    handleEditInputChange,
    handleEditSubmit,
    handleCancelEdit,
    handleClosePopup,
    editedStudent,
    isEditing,
  };
};

export default useFilteredAndSortedStudents;
