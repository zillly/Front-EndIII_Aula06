import styles from "./ItemComponent.module.css";
function ItemComponent({id, country,city,population,color}) {
    return (  
        <div className={styles.div}>
         <li>
            <p style={{color: "white"}}>{id}</p>
            <p>Pais: {country}</p>
            <p>Cidade: {city}</p>
            <p>Populacão: {population}</p>
            <p>{color}</p>
         </li>
        </div>
    );
}

export default ItemComponent;