import { useState, useEffect } from 'react';
import axios from "axios"
import CityCard from '../../Components/CityCard';

import styles from './PageCard.module.scss';



const PageCard = ({ id }) => {
    const [values, setValues] = useState([]);

    const getData = async () => {
        const response = await axios.get(`https://api.musement.com/api/v3/cities/${id}.json`);
        setValues(response.data);
    }

    useEffect(() => {
        getData();
    }, []);


    return (
        <div className={styles.page_wrapper} >
            {values.map((el) => (
                <CityCard key={el.id} name={el.name} image={el.cover_image_url} text={el.content} />
            ))}
        </div>
    );
};

export default PageCard;