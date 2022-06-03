import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import randomColor from 'randomcolor';

useMagicColor.propTypes = {

};

function useMagicColor() {
    const [color, setColor] = useState('green');
    const [count, setCount] = useState(0);
    useEffect(() => {
        const intervalColor = setInterval(() => {
            const newColor = randomColor();
            setColor(newColor);
            setCount(x => x + 1);
        }, 5000);
        return () => {
            clearInterval(intervalColor);
        }
    }, [])
    return { color, count };
}
export default useMagicColor;