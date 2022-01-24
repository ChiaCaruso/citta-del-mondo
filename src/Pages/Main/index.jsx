import { useState, useEffect } from 'react';

import { http } from '../../Utility/tools';

import Card from '../../Components/Card';
import Search from '../../Components/Search';
// import Pagination from '../../Components/Pagination';

import styles from './Main.module.scss';

const Main = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isError, setIsError] = useState(false);
    const [item, setItem] = useState([])
    const [authorInput, setAuthorInput] = useState("");
    // const [buttonNum, setButtonNum] = useState([])
  
    const handleAuthorInput = (e) => setAuthorInput(e.target.value);
  
    useEffect(() => {
        setIsError(false);
        setIsLoading(true);
        try {
          http("").then((data) => setItem(data))
    
        } catch (error) {
          console.log(error)
          setIsError(true);
        }
    
        setIsLoading(false);
    
      }, [])
    
      if (isLoading) {
        return <Loading />
      }
      if (isError) {
        return <Error />
      }
      return (

        <>
          <header className={styles.header}>
            <h1>Città del <span style={{ color: "#f3bf8a" }}>Mondo</span></h1>
            <h3>Scopri le curiosità e la storia delle più belle città del mondo!</h3>
            <Search authorInput={authorInput} handleAuthorInput={handleAuthorInput} />
          </header>
          <section className={styles.section_wrapper}>
            {item.filter(el => el.name.toLowerCase().includes(authorInput.toLowerCase()) || authorInput === '')
              .map((el) => (
                <Card key={el.id} name={el.name} image={el.cover_image_url} content={el.content} id={el.id} />
              ))}
    
          </section>
          {/* <div >
            <Pagination setActualButtonNum={setButtonNum} />
          </div> */}
        </>
      );
    }
    
    const Loading = () => {
      return (
        <div>
          <h2>Loading...</h2>;
        </div>
      );
    }
    
    const Error = () => {
      return (
        <div>
          <h2>Mi dispiace, c'è un'errore!</h2>;
        </div>
      );
    }
    
    
    export default Main;