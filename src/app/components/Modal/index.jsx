import styles from './Modal.module.css';

const Modal = ({ openModal }) => {
    if (!openModal) return null;
    return (
        <div className={styles.Modal}>
            <div className={styles.content}>
                <h2 className={styles.title}>¡ENVIADO!</h2>
                <p>Se ha enviadoun e-mail a los candidatos elegidos y se ha avisado a los que no continúan con la selección.</p>
            </div>
        </div>
    );
}

export default Modal;
