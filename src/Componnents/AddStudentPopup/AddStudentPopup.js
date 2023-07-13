import React from "react";
import { BsX } from "react-icons/bs";
import { BsFileEarmarkPlus} from "react-icons/bs";
import AddStudentForm from "../AddStudentForm/AddStudentForm";
import "./AddStudentPopup"

const AddStudentPopup = ({
  isPopupOpen,
  setPopupOpen,
  newStudent,
  setNewStudent,
  handleAddStudent,
  
}) => {
  const handleClosePopup = () => {
    setPopupOpen(false);
  };
  return (
    <>
      <button className="Button1" onClick={() => setPopupOpen(true)}>
        <BsFileEarmarkPlus />
      </button>
      {isPopupOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-button" onClick={handleClosePopup} >
              <BsX  size={30}/>
            </button>
            <AddStudentForm
              newStudent={newStudent}
              setNewStudent={setNewStudent}
              handleAddStudent={handleAddStudent}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default AddStudentPopup;
