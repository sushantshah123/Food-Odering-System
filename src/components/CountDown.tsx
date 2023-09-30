import React from 'react'
import Countdown from 'react-countdown'

const EndingDate = new Date("2023-08-10")
const CountDown = () => {
  return (
    <div>
        <Countdown date={EndingDate}/>
    </div>
  )
}

export default CountDown