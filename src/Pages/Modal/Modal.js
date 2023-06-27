import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/userSlice";
import { auth } from "../../firebase";
import { closeModal } from "../../features/modalSlice";

function Modal() {
  const dispatch = useDispatch();

  return (
    <aside className="modal-container">
      <div className="modal">
        <h4>Are you sure you want to log out?</h4>
        <div className="btn-container">
          <button
            className="modalBtn confirm-btn"
            onClick={() => {
              dispatch(logOut());
              auth.signOut();
              dispatch(closeModal());
            }}
          >
            Yes
          </button>
          <button
            className="modalBtn clear-btn"
            onClick={() => dispatch(closeModal())}
          >
            No
          </button>
        </div>
      </div>
    </aside>
  );
}

export default Modal;
