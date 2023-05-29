import styles from './HalfScreen.module.css';
import Image from 'next/image';
import CardsSection from '../CardsSection';
import { mapItemsCandidate } from '@/app/utils/general';
import Arrows from '../Arrows';

const HalfScreen = ({ candidateToCompare, right, setActive, active, maxCandidates, select, remove }) => {
    const back = () => {
        if (!active) return;
        setActive(active - 1);

    }
    const foward = () => {
        if (active === maxCandidates -1) return;
        setActive(active + 1);
    }

    return (
        <div className={`${styles.HalfScreen} ${!right && styles.left}`}>
            <header className={styles.header}>
                <Image
                    className={styles.photo}
                    src={candidateToCompare.photo}
                    width={100}
                    height={100}
                />
                <h2 className={styles.name}>{candidateToCompare.name} {candidateToCompare.lastname}</h2>
                {
                    right && <Arrows back={back} foward={foward} />
                }
            </header>
            <h2 className={styles.subtitle}>Experiencia</h2>
            <CardsSection items={mapItemsCandidate(candidateToCompare.experience)} />
            <h2 className={styles.subtitle}>Estudios</h2>
            <CardsSection items={mapItemsCandidate(candidateToCompare.studies)} />
            {
                remove ?
                    (
                        <button
                            className={styles.remove}
                            onClick={remove}
                        >
                            Remove
                        </button>
                    ) :
                    (
                        <button
                            className={styles.select}
                            onClick={() => select(candidateToCompare.id)}
                        >
                            Select
                        </button>
                    )
            }
        </div>
    );
}

export default HalfScreen;
