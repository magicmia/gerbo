import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    zIndex: "1000",
    padding: "20px",
    inset: "auto",
    width:'40%',
    
     },
     overlay: {
        zIndex: "1000",
        backgroundColor: "rgba(0, 0, 0, 0.75)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        inset: "0px",
        position: "fixed",
        padding: "40px",
      }
};

function BasicModal({ setIsOpen, modalIsOpen, popup }) {
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Modal 
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Modal"
      >
        <h2 class="flex-center m-5 place-content-center w-max font-bold text-xl">{popup?.title}</h2>
        <div>
          {popup?.description}
        </div>
        <button
          onClick={closeModal}
          class="rounded bg-black text-white flex-center w-9/12 m-11  h-12"
        >
          BEZÁRÁS
        </button>
      </Modal>
    </>
  );
}

export default BasicModal;
