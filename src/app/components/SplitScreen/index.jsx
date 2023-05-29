import styles from './SplitScreen.module.css';
import HalfScreen from '../HalfScreen';
import { useState } from 'react';

const SplitScreen = ({ candidateToCompare, candidates, select, selectedCandidates, remove }) => {
    const [active, setActive] = useState(0);
    if (!candidateToCompare) return;
    const rigthCompare = candidates[active];
    const hasSelected = selectedCandidates.find(sel => sel.id === rigthCompare.id);
    const hasSelectedMain = selectedCandidates.find(sel => sel.id === candidateToCompare.id);

    const deleteCandidate = () => {
        remove(hasSelected.id);
    }

    const deleteMainCandidate = () => {
        remove(candidateToCompare.id);
    }

    return (
        <article className={styles.SplitScreen}>
            <HalfScreen
                candidateToCompare={candidateToCompare}
                select={select}
                remove={hasSelectedMain ? deleteMainCandidate : null }
            />
            <HalfScreen
                candidateToCompare={rigthCompare}
                right
                active={active}
                setActive={setActive}
                maxCandidates={candidates?.length}
                select={select}
                remove={hasSelected ? deleteCandidate : null }
            />
        </article>
    );
}

export default SplitScreen;
