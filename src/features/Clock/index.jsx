import React, { useState } from 'react';
import PropTypes from 'prop-types';
import dateFormat from 'dateformat';

useClock.propTypes = {

};

function useClock(props) {
    const [timeString, setTimeString] = useState('');
    const clockInterval = setInterval(() => {
        const now = new Date();
        const newTimeString = dateFormat(now);
        setTimeString(newTimeString);
    }, 1000);
    return (
        timeString
    );
}

export default useClock;