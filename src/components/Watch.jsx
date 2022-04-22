import {useState, useEffect} from 'react'
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc"
import PropTypes from "prop-types";
dayjs.extend(utc)

export default function Watch({item, onDelete: handleDelete}) {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    const hours = parseInt(dayjs.utc(time).format('h')) + parseInt(item.timeZone)
    const minutes = dayjs(time).format('mm')
    const seconds = dayjs(time).format('ss')

    const clock = document.querySelector(`[data-clock-id="${item.id}"]`)

    const hoursHand = clock.querySelector('.hour')
    const minutesHand = clock.querySelector('.minute')
    const secondsHand = clock.querySelector('.second')

    hoursHand.style.transform = `rotate(${(hours + 3) * 30}deg)`
    minutesHand.style.transform = `rotate(${minutes * 6}deg)`
    secondsHand.style.transform = `rotate(${seconds * 6}deg)`

    return () => {
      clearInterval(intervalId);
    };

  }, [time])

  return (
    <div className="clock" data-clock-id={item.id}>
      <div className="title">{item.title}</div>
      <div className="delete" onClick={() => handleDelete(item.id)}>X</div>
      <div className="hero-circle">
        <div className="hero-face">
          <div className="hand hour"></div>
          <div className="hand minute"></div>
          <div className="hand second"></div>
          <div className="center"></div>
        </div>
      </div>
    </div>
  )
}

Watch.propTypes = {
  item: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};
