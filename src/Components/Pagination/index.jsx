  
import { useState, useEffect } from "react";
import { http } from "../../Utility/tools";
import { arrayGenerator } from "../../Utility/tools";
import styles from "./Pagination.module.scss";

const Pagination = ({ setActualButtonNum }) => {
  const [buttonNum, setButtonNum] = useState([])

  useEffect(() => {
    http('').then((data) => {
      setButtonNum(Math.ceil(data.length / 9));
    });
  });

  return (
    <ul className={styles.paginationList}>
      <button className={styles.__prevAndNext}>← Prev</button>
      {arrayGenerator(buttonNum).map((index) => (
        <li key={index}>
          <button onClick={() => setActualButtonNum(index + 1)}>
            {index + 1}
          </button>
        </li>
      ))}
      <button className={styles.__prevAndNext}>Next →</button>
    </ul>
  );
};

export default Pagination;

