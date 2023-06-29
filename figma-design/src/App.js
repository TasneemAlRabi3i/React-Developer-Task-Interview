import React, { useState } from 'react';
import './App.css';

// Importing SVG components
import { ReactComponent as GoogleLogo } from './Google.svg';
import { ReactComponent as AppleIDLogo } from './Apple ID.svg';
import { ReactComponent as FacebookLogo } from './Facebook.svg';
import { ReactComponent as GlobeLightLogo } from './ph_globe-light.svg';
import { ReactComponent as ArroweLogo } from './arrow.svg';
import { ReactComponent as DashLogo } from './Dash.svg';

const App = () => {

  // State for passcode visibility
  const [passwordVisible, setPasswordVisible] = useState(true);

  // Function to toggle passcode visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  }

  return (
    <div className='backgroundPage'>

      {/* Header buttons background*/}
      <div className='headerButtonsBackground'>
        <p><GlobeLightLogo width="40px" height="24px" /></p>
        <button id='headerButtons' style={{ background: '#F5F2EB', borderColor: '#F5F2EB', color: '#000', textAlign: 'center', fontSize: '16px', fontFamily: 'Degular Display Demo', fontWeight: '500', letterSpacing: '0.8px' }} >sign up</button>
        <button id='headerButtons' style={{ background: '#AED6B3', borderColor: '#AED6B3', marginRight: '60px'}}>Request Demo
          <ArroweLogo width="16px" height="16px" />
        </button>
      </div>

      {/* the sign in box and image code*/}
      <div className='signin-container'>

        <div id='SignInBox'>

          {/* Title of the box*/}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h1 style={{ color: '#000', fontFamily: 'Degular Display Demo', fontSize: '40px', fontWeight: '700', letterSpacing: '0.5px' }}>Sign in</h1>
            <p style={{ color: '#000', textAlign: 'center', fontFamily: 'Degular Display Demo', fontSize: '22px', letterSpacing: '0.5px', marginTop: '0px' }}>Hey, Enter your details to login to your account</p>
          </div>
          <br />

          <form>
            {/* Sign-in form elements */}
            {/* Username input */}
            <input id='Buttons' style={{ gap: '10px' }} type="text" placeholder="Enter Email / Phone No" />

            {/* Passcode input */}
            <div id="passwordContainer" style={{ display: 'flex', alignItems: 'center' }}>
              <input id='Buttons' style={{ gap: '235px' }} type={passwordVisible ? 'text' : 'password'} placeholder="Passcode" />
              <div style={{ position: 'relative' }}>
                <span style={{ position: 'absolute', top: '50%', transform: 'translateY(-70%)', right: '25px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer', fontFamily: 'Degular Display Demo', fontStyle: 'normal', fontWeight: '500'}} onClick={togglePasswordVisibility}>
                  {passwordVisible ? 'Hide' : 'Show'}
                </span>
              </div>
            </div>

            <div>
              <p style={{ display: 'flex', flexDirection: 'row', flex: '1 0 0', color: '#797979', fontSize: '12px', fontFamily: 'Degular Display Demo', fontWeight: '300', padding: '4px' }}> Don't have an account yet? <span style={{ display: 'inline', fontWeight: 'bold', color: 'black' }}>Register now!</span></p>
            </div>

            <br />

            {/* Sign-in button */}
            <button id='Buttons' style={{ justifyContent: 'center', gap: '10px', backgroundColor: '#AED6B3', width: '100%', height: '20%', borderColor: '#AED6B3' }} type="submit">Sign In</button>
            <p style={{ color: '#000', textAlign: 'center', fontSize: '13px', fontFamily: 'Inter', fontWeight: '500', lineHeight: '120%', padding: '15px' }} ><DashLogo width="12px" height="9px" /> Or Sign in with <DashLogo width="12px" height="9px" /></p>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '8px' }}>
              <button id='signInVia' style={{ marginRight: '10px' }}>

                {/* Three ways to sign in*/}
                <GoogleLogo width="20px" height="20px" />
                Google
              </button>

              <button id='signInVia' style={{ marginRight: '10px' }}>
                <AppleIDLogo width="15.167px" height="18.002px" />
                Apple ID
              </button>

              <button id='signInVia'>
                <FacebookLogo width="17.544px" height="17.5px" />
                Facebook
              </button>
            </div>

            <div>
              <p style={{ color: '#000', textAlign: 'center', fontSize: '13px', fontFamily: 'Inter', fontWeight: '500', lineHeight: '120%', paddingBottom: '15px', marginTop: '40px' }}>Don't have an account? <span style={{ display: 'inline', fontWeight: 'bold' }}>Register Now</span></p>
            </div>

          </form>
        </div>

        <div className="image-container">
          {/* Image element */}
          <img style={{ width: '598.802px', height: '600px', flexShrink: '0' }} src="https://i.pinimg.com/564x/df/90/a2/df90a2972392755e5fd2fc27d7ec6f91.jpg" alt="Image" />
        </div>
      </div>
    </div>
  );
};

export default App;
