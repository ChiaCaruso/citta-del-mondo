

import styles from './CityCard.module.scss';

const CityCard = ({image, name, text}) => {
    return (
        <div className={styles.pageCard_wrapper}>

            <div className={styles.card_header}>
                <img src={image} alt={name} />
                <h2>{name}</h2>
            </div>

            <div className={styles.card_text}>
                <p>{text}</p>
            </div>

        </div>
    );
};

export default CityCard;