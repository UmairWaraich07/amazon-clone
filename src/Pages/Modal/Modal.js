import React from "react";
import "./Modal.css";
import { useDispatch } from "react-redux";
import { logOut } from "../../features/userSlice";
import { auth } from "../../firebase";
import { closeModal } from "../../features/modalSlice";
import { useNavigate } from "react-router-dom";

function Modal() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

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
              navigate("/");
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
