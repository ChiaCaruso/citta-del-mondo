import { useState, useEffect } from "react";

import btnUp from "./buttonUp.png";
import styles from "./ButtonUp.module.scss";


const ButtonUp = () => {

    const [scrollUp, setScrollUp] = useState(false);

    const handleVisibleBtn = () => {
        setScrollUp(window.scrollY > 70)
    }

    const handleScrollUp = () => {
        window.scrollTo({
            left: 0,
            top: 0,
            behavior: 'smooth'
        });
    }

    useEffect(() => {
        window.addEventListener('scroll', handleVisibleBtn)
    }, [])

    return (
        <div className={scrollUp ? '' : styles.goTop} onClick={handleScrollUp}>
            <button className={styles.btnUp}>
                <img src={btnUp} alt="button up" />
            </button>

        </div>
    )
}

export default ButtonUp;