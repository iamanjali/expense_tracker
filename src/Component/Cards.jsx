import styles from './Card.module.css';

function Card ({title, money, buttonText, buttonType, handleClick, success=true}) {
    return (
        <>
        <div className={styles.card}>
            <h3>{`${title}: `}</h3>
            <span className={success ? styles.success : styles.failure}>{`${money}`}</span>
        </div>
        Card
        </>
    );
}

export default Card;