import styles from '../../../style/Navigation.module.css';
import {useTranslation} from 'react-i18next';
import {Link} from 'react-router-dom'
import {NaviItem} from "./types";


function NavigationItem(props: NaviItem) {
    const {t} = useTranslation();
    return (
        <li className={styles.navigationListItem}>
            <Link to={props.url}>{t(props.title)}</Link>
        </li>
    );
}

function Navigation() {
    const NaviItems: Array<NaviItem> = [
        {
            title: 'Upload',
            url: '/',
        },
        {
            title: 'Crash Tests',
            url: '/tests',
        },
        {
            title: 'Profile',
            url: '/profile',
        },
    ];
    return (
        <ul className={styles.navigationList}>
            {NaviItems.map(function (item, index) {
                return <NavigationItem title={item.title} url={item.url} key={index}/>;
            })}
        </ul>

    );
}

export default Navigation;
