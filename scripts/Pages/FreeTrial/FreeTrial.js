import React from 'react';
import './FreeTrial.css'
import Alert from './Alert/Alert';
import Navbar from '../Shared/Navbar/Navbar';
import FreeTrialAvailable from './FreeTrialAvailable/FreeTrialAvailable';
import Checkout from './Checkout/Checkout';
import Footer from '../Shared/Footer/Footer';

// Images
import crossIcon from '../Images/X_alert.svg';
import brand_logo from '../Images/dip-brand-logo.svg';
// import Tabs from './Checkout/FAQ/Tabs/Tabs';

const FreeTrial = () => {
  return (
    <div className='free_trial_page'>
        <Alert crossIcon={crossIcon}/>
        <Navbar brand_logo={brand_logo}/>
        <FreeTrialAvailable timerHeading='FREE TRIAL IS STILL AVAILABLE' leftStock='X' days='05' hours='08' minutes='40' seconds='09' />
        <Checkout />
        <Footer />
        {/* <Tabs /> */}
    </div>
  )
}

export default FreeTrial;