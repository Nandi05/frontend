import React from 'react'
import { Link, useHistory } from 'react-router-dom';
import styles from './Home.module.css';
import Card from '../../components/shared/Card/Card';
import Button from '../../components/shared/Button/Button';

export const Home = () => {
    const signInLinkStyle={
        color: '#0077ff',
        fontWeight: 'bold',
        textDecoration: 'none',
        marginLeft: '10px'
    }
    const history=useHistory();
    function startRegister(){
        history.push('/authenticate');
    
    }
    
  return (
    <div className={styles.cardWrapper}>
        <Card title="Welcome to CodersHouse!!" icon="logo">
        <p className={styles.text}>We are working hard to get CodersHouse ready for everyone! While we wrap up the finishing touches, we are adding people gradually to make sure nothing breaks.</p>
                <div>
                    <Button onClick={startRegister} text="Let's Go"/>
                </div>
                <div className={styles.signinWrapper}>
                    <span className={styles.hasInvite}>Have an invite text?</span>
                    <Link style={signInLinkStyle}to="/login">Sign In</Link>
                </div>
        </Card>
        {/* <div className={styles.card}>
            <div className={styles.headingWrapper}>
                <img src="/images/logo.png" alt='logo'/>
                <h1 className={styles.heading}>Welcome to Coders House</h1>
                <p className={styles.text}>We are working hard to get CodersHouse ready for everyone! While we wrap up the finishing touches, we are adding people gradually to make sure nothing breaks.</p>
                <div>
                    <button>
                        <span>Get your username</span>
                        <img src='/images/arrow-forward.png' alt='arrow'/>
                    </button>
                </div>
                <div>
                    <span>Have an invite text?</span>
                    <Link to="/login">Sign In</Link>
                </div>
            </div>
    </div> */}
    </div>
  )
}
export default Home