import styles from './Card.module.css';
import Image from 'next/image';
import Mask from './Mask';

const Card = ({ selectCandidate, compareCandidate, src, name, small, removeCandidate, id }) => {
    return (
        <div className={styles.candidate}>
            <div className={small ? styles.candidatePhotoSmall : styles.candidatePhoto}>
                <Image
                    className={styles.candidatePhotoImg}
                    src={src}
                    alt={name}
                    fill
                />
                <Mask
                    selectCandidate={selectCandidate}
                    compareCandidate={compareCandidate}
                    removeCandidate={removeCandidate && (()=> removeCandidate(id))}
                />
            </div>

            <h2 className={small ? styles.candidateNameSmall : styles.candidateName}>{name}</h2>
        </div>
    );
}

export default Card;
