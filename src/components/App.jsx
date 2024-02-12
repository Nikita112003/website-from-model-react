import styles from '../styles/App.module.css'
import '../styles/style.css';
import MobileNav from './MobileNav';
import Header from './Header';
import LeftAside from './LeftAside';
import Main from './Main';

export default function() {
    return (
        <div className={styles.app}>
            <MobileNav />
            <Header />
            <LeftAside />
            <Main />
        </div>
    );
};