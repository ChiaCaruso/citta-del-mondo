import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import CityCard from '../../Components/CityCard';
import ButtonUp from '../../Components/ButtonUp';
import { http } from "../../Utility/tools"

import styles from './PageCard.module.scss';



const PageCard = () => {

    const { id } = useParams()
    const [values, setValues] = useState([]);

    useEffect(() => {
        http(`/${id}`).then((data) => setValues(data))
    }, [id]);


    return (
        <div className={styles.main}>
            <div className={styles.card_button}>
                <Link to="/city_app">Torna alla Home</Link>
            </div>
            <div className={styles.page_wrapper} >

                {
                    <CityCard key={values.id} name={values.name} image={values.cover_image_url} text={values.content} />
                }
            </div>

            <ButtonUp />
        </div>
    );
};

export default PageCard;