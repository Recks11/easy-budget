import React, { useState } from 'react';
import Button from '../components/Button';
import './home.scss'
import settings from '../icons/settings.svg'

const Home = ({ openBalance }) => {
  const [balance, setBalance] = useState()
  return (
    <div className='home'>
      <button className='settings clean circle secondary'>
        <img src={settings} alt='S' />
      </button>

      <main className='budget-wrapper'>
        <p className='header'>Weekly Budget</p>
        <p className='balance'><i>£</i>{ balance || openBalance } </p>
      </main>
      <div className="actions">
        <Button className='circle primary'
                onClick={ () => setBalance('1035.00') }>
          +
        </Button>
        <Button className='circle primary'>
          D
        </Button>
        <Button className='circle secondary'>
          -
        </Button>
      </div>
    </div>
  );
};

export default Home;
