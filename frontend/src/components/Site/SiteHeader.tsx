import logo from '../../logo.svg';
import styles from '../../style/SiteHeader.module.css'


import Navigation from "./Navigation/Navigation";

const SiteHeader = () => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.titleImage}>
                <img src={logo} alt="logo" height={100} />
            </div>
            <div className={styles.headline}>
                <h1 className={styles.title}><span className={styles.titleBold}>Audi</span> Vesuv</h1>
                <Navigation/>
            </div>
        </div>
    );
};
export default SiteHeader;
