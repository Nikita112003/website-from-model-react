import styles from '../styles/LeftAside.module.css';
import '../styles/LeftAside.module.css';
import homeletterIcon from '../images/homeletter.svg';
import stagingIcon from '../images/staging.svg';
import listIcon from '../images/list-ul.svg';
import booksIcon from '../images/books.svg';
import boxContainerIcon from '../images/box-container.svg';
import bellIcon from '../images/bell-on.svg';
import usersIcon from '../images/users.svg';
import qr from '../images/qr.svg';

export default function() {
    return (
        <div className={styles.left}>
            <nav className={styles.leftSidebar}>
                <ul>
                    <li>
                        <img src={homeletterIcon} alt="" />
                        <a>Интранет портал</a>
                    </li>
                    <li>
                        <img src={stagingIcon} alt="" />
                        <a>Управление обучением</a>
                    </li>
                    <li className={styles.current}>
                        <img src={listIcon} alt="" />
                        <a>Расписание тренера</a>
                    </li>
                    <li>
                        <img src={booksIcon} alt="" />
                        <a>Дистанционные курсы</a>
                    </li>
                    <li>
                        <img src={boxContainerIcon} alt="" />
                        <a>Карты развития</a>
                    </li>
                    <li>
                        <img src={bellIcon} alt="" />
                        <a>Обучающие мероприятия</a>
                    </li>
                    <li>
                        <img src={usersIcon} alt="" />
                        <a>Тренерский состав</a>
                    </li>
                </ul>
            </nav>
            <aside className={styles.newGuys}>
                <h3>Полезные ссылки и дополнительные материалы для новичков</h3>
                <div>
                <img src={qr} alt="qr" height="130px" width="130px" />
                <div><button className={styles.moreButton}>
                    <a>Подробнее</a>
                </button></div>
                </div>
            </aside>
        </div>
    )
}