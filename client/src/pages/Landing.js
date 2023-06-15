
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/Testing';
import { Logo } from '../components';
import {Link} from 'react-router-dom';
import { useAppContext } from '../context/appContext';
import React from 'react';
import { Navigate } from 'react-router-dom';

const Landing = () => {

    const {user} = useAppContext();
  return (
    <React.Fragment>
        {user && <Navigate to='/' />}
    
    <Wrapper>
        <nav>
            <Logo/>            
        </nav>
        <div className='container page'>
            {/* info */}
            <div className="info">
                <h1>
                    job <span>tracking</span> app
                </h1>
                <p>
                    I'm baby palo santo tacos selfies knausgaard actually marxism. Truffaut same locavore put a bird on it cold-pressed farm-to-table vinyl banjo distillery twee prism deep v thundercats. Heirloom flannel PBR&B bushwick biodiesel tousled, subway tile franzen fixie schlitz aesthetic praxis irony hell of same.
                </p>
                <Link className='btn btn-hero' to="/register">
                    Login/Register
                </Link>
            </div>
            <img src={main} alt="job hunt" className='img main-img'/>
        </div>
    </Wrapper>
    </React.Fragment>
  )
}



export default Landing