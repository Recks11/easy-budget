import React, { useEffect, useState } from 'react';
import './home.scss'
import settings from '../icons/settings.svg'
import details from '../icons/list.svg'
import plus from '../icons/plus.svg'
import minus from '../icons/minus.svg'
import IconButton from '../components/IconButton';
import { AppCache } from '../service/cache';

const cache = new AppCache()

const Home = () => {
  const [balance, setBalance] = useState(0)
  const [state, setState] = useState({
    used: 0,
    free: 0
  })
  const ms = 0

  useEffect(() => {
    try {
    cache.getStorage().estimate()
      .then((estimate) => {
        setState({
          free: estimate.quota,
          used: estimate.usage,
          balance: 0
        })
      })
    } catch (ex) {

    }
  }, [ms])

  const updateBalance = (amount, add) => {
    if (add) {
      setBalance(+balance + amount)
    } else {
      setBalance(+balance - amount)
    }
  };

  const cacheOutput = () => {
    if (cache.getStorage())
      return <p>Storage using {state.used} out of {state.free / 1000000} MB</p>
    else
      return <p>storage not supported</p>
  }
  return (
    <div className='home'>
      <IconButton
        className='settings clean secondary'
        iconClass='settings-icon'
        alt='settings'
        icon={ settings }
      />

      <main className='budget-wrapper'>
        <p className='header'>Weekly Budget</p>
        <p className='balance'><i>£</i>{ balance } </p>
        {cacheOutput()}
      </main>
      <div className="actions">
        <IconButton
          className='primary'
          iconClass='action-icon'
          icon={ plus }
          onClick={ () => updateBalance(100, true) }
        />
        <IconButton
          className='primary'
          iconClass='action-icon'
          icon={ details }
        />
        <IconButton
          className='secondary'
          iconClass='action-icon'
          icon={ minus }
          onClick={ () => updateBalance(100, false) }
        />
      </div>
    </div>
  );
};

export default Home;
