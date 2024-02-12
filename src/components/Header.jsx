import styles from '../styles/Header.module.css';
import '../styles/style.css';
import userImg from '../images/foto.png'

export default function() {
    return (
        <header className={styles.header}>
            <input type='search' className={styles.search} placeholder='Поиск по всему...' />
            <div className={styles.userInfo}>
                <img src={userImg} />
                <div className='p1'>
                    <div className={styles.userName}>Константин Константинов</div>
                    <div className={styles.userStatus}>Руководитель департамента</div>
                </div>
            </div>
        </header>
    )
}