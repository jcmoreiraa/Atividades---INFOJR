import './Modal.css';

type ModalProps = {
    show: boolean;
    onClose: () => void;
    children: React.ReactNode;
};

const Modal = ({ show, onClose, children }: ModalProps) => {
    if (!show) return null;

    return (
        <div className='modal-overlay'>
            <div className='modal'>
                <button className='modal-close' onClick={onClose}>
                    &times;
                </button>
                <div className='modal-content'>
                    {children}
                </div>
            </div>
        </div>
    );
};

export default Modal;