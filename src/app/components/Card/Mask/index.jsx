import styles from './Mask.module.css';

const Mask = ({ selectCandidate, compareCandidate, removeCandidate }) => {
    if (!selectCandidate && !compareCandidate && !removeCandidate) return null;

    const select = selectCandidate ? <button className={styles.button} onClick={selectCandidate}>Select</button> : null
    const compare = compareCandidate ? <button className={styles.button} onClick={compareCandidate}>Compare</button> : null
    const remove = removeCandidate ? <button className={styles.button} onClick={removeCandidate}>Remove</button> : null

    return (
        <div className={styles.mask}>
            {select}
            {compare}
            {remove}
        </div>

    );
}

export default Mask;
