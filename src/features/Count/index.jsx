import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from './counterSlice';
import Button from '@mui/material/Button';
import { makeStyles } from '@mui/styles';
Count.propTypes = {

};
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'red',
      height: 48,
      padding: '0 30px',
    },
  });
  
const test = 0;
function Count(props) {

    const [count, setCount] = useState(0);
    if(count === 2){
        setCount(x=>x = test);
    }
    //redux toolkit
    const dispatch = useDispatch();
    const counter = useSelector(state=> state.counter);
    const handleClickIncrease = ()=> dispatch(increase());
    const handleClickDecrease = ()=> dispatch(decrease()); 
    const classes = useStyles();
    return (
        <div>
            <p>
            {count}
            <Button className= {classes.root} onClick={() => setCount(x => x + 1)}>Increase Number</Button>
            <Button className= {classes.root} onClick={() => setCount(x => x - 1)}>Decrease Number</Button>
            </p>
             {counter}
            <button onClick={handleClickIncrease}>Increase Number redux</button>
            <button onClick={handleClickDecrease}>Decrease Number redux</button>
        </div>
    );
}

export default Count;