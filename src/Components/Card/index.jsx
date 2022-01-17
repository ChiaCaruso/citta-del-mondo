import { Link } from "react-router-dom";
import styles from "./Card.module.scss"

const Card = ({ image, name, id}) => {
    return (
        <div className={styles.wrapper_card}>
            <img src={image} alt={name} />
            <div className={styles.card_text}>
                <h3>{name}</h3>
                <div className={styles.link_wrapper}>
                    <Link to={`/card/${id}`} className={styles.link} >Scopri di più</Link>
                </div>
            </div>
        </div>
    )
}

export default Card;