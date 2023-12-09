import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Modal from 'react-modal';

const AuthModel = ({modalIsOpen, afterOpenModal, closeModal, customStyles, children}) => {
  return (
    <div>
        <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          shouldCloseOnOverlayClick={true}
        >
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={closeModal} style={{ background: 'none', border: 'none' }}>
              <AiOutlineClose size={24} />
            </button>
          </div>

          {children}
          
        </Modal>
    </div>
  )
}

export default AuthModel