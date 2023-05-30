import styles from './Arrows.module.css';

const Arrows = ({foward, back, close, show})=> {
    if (!show) return null;
    return (
        <div className={styles.Arrows}>
            <button className={styles.button} onClick={back}>↑</button>
            <button className={styles.button} onClick={foward}>↓</button>
            <button className={styles.close} onClick={close}>X</button>
        </div>
    );
}

export default Arrows;
