import styles from "../Calculator.module.css"
export default function Input({value}){
    return(
        <div >
        <input className={styles.input} value={value} readOnly/>
    </div>
    );
}