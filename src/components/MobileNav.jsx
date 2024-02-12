import styles from '../styles/MobileNav.module.css';
import menu from '../images/hamburger_menu.svg'

export default function() {
    return (
    <div className={styles.mobileNav}>
        <img src={menu} alt="Меню" />
    </div>
    )
}