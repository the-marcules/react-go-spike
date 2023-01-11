import logo from '../../logo.svg';

import LoginButton from '../LoginButton';
import LogoutButton from '../LogoutButton';

const SiteHeader = () => {
    return (
        <div className="center">
            <img src={logo} alt="logo" height={100} />
            <h1>Audi Vesuv</h1>
        </div>
    );
};
export default SiteHeader;
