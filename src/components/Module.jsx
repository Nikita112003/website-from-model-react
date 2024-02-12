import styles from '../styles/Module.module.css';
import '../styles/style.css'

export default function({n, heading, description, icon}) {
    let classes = {
        '1': styles.module1,
        '2': styles.module2,
        '3': styles.module3,
        '4': styles.module4,
        '5': styles.module5
    }

    return (
        <div className={`${styles.module} ${classes[n]}`}>
            <h3>{heading}</h3>
            <p>{description}</p>
            <div className={styles.moduleIcon}>
                {n === '1' && 
                <a className={`${styles.moreLink} p1`}>Подробнее</a>
                }
                <img src={icon} />
            </div>
        </div>
    )
}