import { useState, useEffect } from 'react';
import CityCard from '../../Components/CityCard';
import { http } from "../../Utility/tools"

import styles from './PageCard.module.scss';



const PageCard = ({ id }) => {
    const [values, setValues] = useState([]);

    useEffect(() => {
        http(`/${id}`).then((data) => setValues(data))
    }, [values]);


    return (
        <div className={styles.page_wrapper} >
            {values.map((el) => (
                <CityCard key={el.id} name={el.name} image={el.cover_image_url} text={el.content} />
            ))}
        </div>
    );
};

export default PageCard;