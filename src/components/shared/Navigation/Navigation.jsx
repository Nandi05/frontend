import React from 'react';
import { Link } from 'react-router-dom';

import styles from './Navigation.module.css';


const Navigation = () => {
    const brandStyle = {
        color: '#fff',
        textDecoration: 'none',
        fontWeight: 'bold',
        fontSize: '22px',
        display: 'flex',
        alignItems: 'center',
    };

    const logoText = {
        marginLeft: '10px',
    };
    // const dispatch = useDispatch();
    // const { isAuth, user } = useSelector((state) => state.auth);
    // async function logoutUser() {
    //     try {
    //         const { data } = await logout();
    //         dispatch(setAuth(data));
    //     } catch (err) {
    //         console.log(err);
    //     }
    // }

    return (
        <nav className={`${styles.navbar} container`}>
            <Link style={brandStyle} to="/">
                <img src='/images/logo.png' alt='logo'/>
                <span style={logoText}>CodersHouse</span>
            </Link>
        </nav>
    );
};

export default Navigation;