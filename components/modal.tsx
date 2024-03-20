import React from "react";

type ModalProps = {
  modalOpen: boolean;
  setModalOpen: (isOpen: boolean) => void;
  children: React.ReactNode;
};

const Modal = ({ modalOpen, setModalOpen, children }: ModalProps) => {
  return (
    <>
      <dialog
        id='my_modal_3'
        tabIndex={-1}
        className={`modal ${modalOpen ? "modal-open" : ""}`}
        open={modalOpen}
      >
        <div className='modal-box'>{children}</div>
      </dialog>
    </>
  );
};

export default Modal;
