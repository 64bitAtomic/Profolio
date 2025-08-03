import { useState } from "react";
import Modal from "react-modal";
import "./CertificationCard.css";
const CertificationCard = ({ value }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  return (
    <div className="image-card">
      <div
        onClick={openModal}
        style={{ backgroundImage: `url('${value.certificate}')` }}
        className="image-placeholder"
      >
        <div className="certificate-name">
          <span>{value.name}</span>
        </div>
      </div>
      {/* Modal for Full-Screen Image */}
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        className="modal"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-button">
          X
        </button>
        <img src={value.certificate} alt={value.name} className="modal-image" />
      </Modal>
    </div>
  );
};

export default CertificationCard;
