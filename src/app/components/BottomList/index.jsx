import Card from "../Card";
import styles from './BottomList.module.css'

const BottomList = ({ candidates, remove, openModal }) => {
    if (!candidates || !candidates.length) return;
    return (
        <section className={styles.BottomList}>
            <div className={styles.relative}>
                <div className={styles.cards}>
                    {
                        candidates.map(candidate => {
                            return (
                                <Card
                                    key={`${candidate.name} ${candidate.lastname} ${candidate.photo}`}
                                    src={candidate.photo}
                                    name={`${candidate.name} ${candidate.lastname}`}
                                    removeCandidate={remove}
                                    small
                                    id={candidate.id}
                                />
                            );
                        })
                    }
                    <button className={styles.send} onClick={()=> openModal(true)}>Enviar</button>
                </div>
            </div>
        </section>
    );
}

export default BottomList;
