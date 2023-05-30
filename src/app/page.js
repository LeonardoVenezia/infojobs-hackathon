'use client'
import Image from 'next/image';
import styles from './page.module.css';
import { useEffect, useState } from 'react';
import Card from './components/Card';
import { mock } from './mock';
import BottomList from './components/BottomList';
import SplitScreen from './components/SplitScreen';
import Modal from './components/Modal';

export default function Home() {
  const [candidates, setCandidates] = useState(mock);
  const [selectedCandidates, setSelectedCandidates] = useState([]);
  const [candidateToCompare, setCandidateToCompare] = useState(null);
  const [openModal, setOpenModal] = useState(false)

  const findCandidate = (id) => candidates.filter(c => c.id === id)[0];

  const select = (id) => {
    if (selectedCandidates.filter(c => c.id === id)[0]) return;
    const newCandidate = findCandidate(id);
    setSelectedCandidates([...selectedCandidates, newCandidate]);
  }
  const remove = (id) => {
    const newCandidates = selectedCandidates.filter(c => c.id !== id);
    setSelectedCandidates(newCandidates);
  }
  const compare = (id) => {
    const newCandidate = findCandidate(id);
    setCandidateToCompare(newCandidate);
  }
  return (
    <main >
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </div>
      </header>
      <main className={styles.main}>
        <h1 className={styles.title}>Candidatos para <span className={styles.searchName}>Fronend Developer</span></h1>
        <section className={styles.candidates}>
          {
            candidates.map(candidate => {
              return (
                <Card
                  key={`${candidate.name} ${candidate.lastname} ${candidate.photo}`}
                  selectCandidate={() => select(candidate.id)}
                  compareCandidate={() => compare(candidate.id)}
                  src={candidate.photo}
                  name={`${candidate.name} ${candidate.lastname}`}
                />

              );
            })
          }
        </section>
      </main>

      <SplitScreen
        candidateToCompare={candidateToCompare}
        candidates={candidates}
        select={select}
        remove={remove}
        selectedCandidates={selectedCandidates}
        compare={compare}
        close={()=> setCandidateToCompare(false)}
      />
      <BottomList
        candidates={selectedCandidates}
        remove={remove}
        openModal={setOpenModal}
      />
      <Modal openModal={openModal} />
    </main>
  )
}
