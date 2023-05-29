import styles from './Arrows.module.css';

const Arrows = ({foward, back})=> {
    return (
        <div className={styles.Arrows}>
            <button className={styles.button} onClick={back}>↑</button>
            <button className={styles.button} onClick={foward}>↓</button>
        </div>
    );
}

export default Arrows;
