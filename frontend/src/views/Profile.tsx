import { t } from 'i18next';
import React from 'react';

interface User {
    name: string;
    email: string;
    picture: string;
}

const Profile = () => {
    const user: User = {
        name: 'Markus Fischer',
        email: 'markus2.fischer@audi.com',
        picture: '../public/logo192.png',
    };

    return (
        <div>
            <h2>{t('Profile')}</h2>
            <p>{user.name}</p>
            <p>{user.email}</p>
        </div>
    );
};

export default Profile;
