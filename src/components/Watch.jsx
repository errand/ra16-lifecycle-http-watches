import {useState, useEffect} from 'react'
import dayjs from "dayjs";

export default function Watch({item, onDelete: handleDelete}) {

  const [time, setTime] = useState(new Date())

  useEffect(() => {
    setInterval(() => {
      setTime(new Date())
    }, 1000)

    const hours = dayjs(time.getHours() + item.timeZone).format('h')
    const minutes = dayjs(time).format('mm')
    const seconds = dayjs(time).format('ss')

    const clock = document.querySelector(`[data-clock-id="${item.id}"]`)

    const hoursHand = clock.querySelector('.hero-hour')
    const minutesHand = clock.querySelector('.hero-minute')
    const secondsHand = clock.querySelector('.hero-second')

    hoursHand.style.transform = `rotate(${hours * 30 + minutes * 0.5 - 180}deg)`
    minutesHand.style.transform = `rotate(${minutes * 6 - 180}deg)`
    secondsHand.style.transform = `rotate(${seconds * 6 - 180}deg)`

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
