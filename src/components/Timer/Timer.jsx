import { useState, useEffect } from 'react'

function Timer({ minutes, seconds, setFormTimeToZero }) {
  const [timerMinutes, setTimerMinutes] = useState(minutes)
  const [timerSeconds, setTimerSeconds] = useState(seconds)
  //const [isPaused, setIsPaused] = useState(false)
  let timerID

  useEffect(() => {
    if (minutes === '' && seconds === '') {
      setTimerMinutes('00')
      setTimerSeconds('00')
    } else {
      setTimerMinutes(() => getPadTime(minutes))
      setTimerSeconds(() => getPadTime(seconds))
      setFormTimeToZero()
    }
    return () => {
      clearInterval(timerID)
    }
  }, [])

  const getPadTime = (time) => time.toString().padStart(2, '0')

  const startTimer = () => {
    timerID = setInterval(() => {
      setTimerSeconds((timerSeconds) => {
        if (+timerSeconds >= 1) {
          return getPadTime(+timerSeconds - 1)
        } else {
          if (+timerMinutes === 0) {
            clearInterval(timerID)
            return '00'
          }
          setTimerMinutes((timerMinutes) => {
            if (+timerMinutes === 0 && +timerSeconds === 0) {
              clearInterval(timerID)
            }
            return getPadTime(+timerMinutes - 1)
          })
          return '59'
        }
      })
      console.log(timerID)
    }, 100)
  }

  const pauseTimer = () => {}

  return (
    <span className="description">
      <button className="icon icon-play" onClick={startTimer}></button>
      <button className="icon icon-pause" onClick={pauseTimer}></button>
      &nbsp;&nbsp;{timerMinutes}:{timerSeconds}
    </span>
  )
}

export default Timer
