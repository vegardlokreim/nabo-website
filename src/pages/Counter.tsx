// src/components/Counter.tsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store/store';
import { increment, decrement } from '../redux/features/counter/counterSlice';

const Counter: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    );
};

export default Counter;
