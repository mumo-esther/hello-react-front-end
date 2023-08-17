import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import fetchRandomGreeting from './store/actions';

function Greeting() {
  const randomGreeting = useSelector((state) => state.randomGreeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRandomGreeting());
  }, [dispatch]);

  return (
    <div className="Greeting">
      <h1>Random Greeting</h1>
      <p>{randomGreeting}</p>
    </div>
  );
}

export default Greeting;
