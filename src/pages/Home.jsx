import React, { useState } from 'react';
import Button from '../components/Button';
import './home.scss'
import settings from '../icons/settings.svg'
import details from '../icons/list.svg'
import IconButton from '../components/IconButton';

const Home = ({ openBalance }) => {
  const [balance, setBalance] = useState()
  return (
    <div className='home'>
      <IconButton
        className='settings clean secondary'
        iconClass='settings-icon'
        alt='settings'
        icon={settings}
      />

      <main className='budget-wrapper'>
        <p className='header'>Weekly Budget</p>
        <p className='balance'><i>£</i>{ balance || openBalance } </p>
      </main>
      <div className="actions">
        <Button className='circle primary'
                onClick={ () => setBalance('1035.00') }>
          +
        </Button>
        <IconButton
          className='primary'
          iconClass='details-icon'
          icon={details}
        />
        <Button className='circle secondary'>
          -
        </Button>
      </div>
    </div>
  );
};

export default Home;
