import React from 'react';
import {Box} from "@mui/material";
import { useTimer } from 'react-timer-hook';

const CounterItem = ({heading,value}) => {
    return(
        <Box>
            <Box sx={{
                textAlign:"center",
                fontSize: {xs: "50px",lg:"99px"},
                '-webkit-text-stroke-width':'2px',
                '-webkit-text-stroke-color':"#23AF6D",
                color:"transparent",
            }}>
                {value}
            </Box>
            <Box sx={{
                textAlign:"center",
                fontSize:"1rem",
                fontWeight:"semi-bold"
            }}>
                {heading}
            </Box>

        </Box>
    )
}

const Counter = () => {

    const expiryTimestamp = new Date('May 20,2022')

    const {
        seconds,
        minutes,
        hours,
        days,
    } = useTimer({ expiryTimestamp, onExpire: () => console.warn('Timer Completed') });

    return (
        <Box sx={{
            display:"grid",
            gridTemplateColumns:"repeat(4,minmax(4rem,1fr))",
            gridGap:"1rem",
            overflow: {
                // xs: "scroll",
                // lg: "unset",
            }
        }}>

          <CounterItem heading={'Days'} value={days}/>
          <CounterItem heading={'Hours'} value={hours}/>
          <CounterItem heading={'Mins'} value={minutes}/>
          <CounterItem heading={'Sec'} value={seconds}/>

        </Box>
    );
};

export default Counter;