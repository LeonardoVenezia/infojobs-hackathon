import styles from './CardsSection.module.css';

const CardsSection = ({ items }) => {
    return (
        <section className={styles.CardsSection}>
            {
                items.map(i => {
                    return (
                        <div className={styles.item} key={i.description}>
                            <h3>{i.title}</h3>
                            <p className={styles.subtitle}>{i.subtitle}</p>
                            <p className={styles.amountTime}>{i.amountTime}</p>
                            <p className={styles.description}>{i.description}</p>
                        </div>
                    );
                })
            }
        </section>
    );
}

export default CardsSection;
