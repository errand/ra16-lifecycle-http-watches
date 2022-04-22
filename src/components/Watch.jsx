import {useState, useEffect} from 'react'
import dayjs from "dayjs";

export default function Watch({item, onDelete: handleDelete}) {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    const hours = parseInt(dayjs(time).format('h')) + parseInt(item.timeZone)
    const minutes = dayjs(time).format('mm')
    const seconds = dayjs(time).format('ss')

    console.log(new Date().toLocaleString("ru-RU", {timeZone: "Africa/Abidjan"}))

    const clock = document.querySelector(`[data-clock-id="${item.id}"]`)

    const hoursHand = clock.querySelector('.hero-hour')
    const minutesHand = clock.querySelector('.hero-minute')
    const secondsHand = clock.querySelector('.hero-second')

    hoursHand.style.transform = `rotate(${hours * 30}deg)`
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
          <div className="hero-hour"></div>
          <div className="hero-minute"></div>
          <div className="hero-second"></div>
        </div>
      </div>
    </div>
  )

}
