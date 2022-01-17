import styles from "./Search.module.scss";


const Search = ({ authorInput, handleAuthorInput }) => {



    return (
        <div className={styles.input_wrapper}>
            <p>Cerca la tua città</p>
            <input
                value={authorInput}
                onChange={handleAuthorInput}
                type="text"
                name="search"
                id="search"
                placeholder="Cerca"
            />
        </div>
    )
}

export default Search;