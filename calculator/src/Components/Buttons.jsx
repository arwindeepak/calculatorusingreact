import styles from "../Calculator.module.css"
export default function Button({value}){
    const buttons=["C","1","2","+","3","4","-","5","6","*","7","8","/","=","9","0","."];
    return (
        <div className={styles.buttonContainer}>

                
                {buttons.map((items)=>(
                    <button onClick={()=>value(items)} className={styles.button}>{items}</button>
                ))}
                
                
            </div>

    );
}