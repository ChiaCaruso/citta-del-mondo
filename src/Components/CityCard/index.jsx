

import styles from './CityCard.module.scss';

const CityCard = ({ image, name, text }) => {
    return (
        <div className={styles.pageCard_wrapper}>

            <div className={styles.card_header}>
                <img src={image} alt={name} />
                <div className={styles._card_header_text}>
                    <h2>{name}</h2>
                </div>
            </div>

            <div className={styles.card_text}>
                <h4>Attività imperdibili da svolgere a {name}</h4>
                <p>{text}</p>
            </div>

        </div>
    );
};

export default CityCard;