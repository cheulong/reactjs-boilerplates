/* eslint-disable implicit-arrow-linebreak */
import React, { FC } from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Home: FC = () => {
  const counterState = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <button
        type='button'
        onClick={() => dispatch({ type: 'counter/decrement' })}
      >
        -
      </button>
      <button
        type='button'
        onClick={() => dispatch({ type: 'counter/increment' })}
      >
        +
      </button>
      <button
        type='button'
        onClick={() =>
          dispatch({ type: 'counter/incrementByAmount', payload: 5 })
        }
      >
        5
      </button>
      <div>Home{counterState.value}</div>
    </>
  );
};

export default Home;
