import styles from "./itemlistcontainer.module.css";

export const ItemListContainer = ({ greeting }) => {
    return (
        <div className={styles.welcome}>
            <h1>{ greeting }</h1>
        </div>
    )
}