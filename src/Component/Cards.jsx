import styles from './Card.module.css';
import Button from './Button';

function Card ({title, money, buttonText, buttonType, handleClick, success=true}) {
    return (
        <>
        {/* <div className={styles.card}>
            <h3>{`${title}: `}</h3>
            <span className={success ? styles.success : styles.failure}>{`${money}`}</span>
        </div> */}

        <div>
            <h3>
                {`${title}`}
                <span className={success ? styles.success : styles.failure}>{`${money}`}</span>
            </h3>
            <Button handleClick={handleClick} style={buttonType}>{buttonText}</Button>
        </div>
        </>
    );
}

export default Card;