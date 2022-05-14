import {useState, useEffect} from 'react';
import dayjs from "dayjs";
import utc from "dayjs/plugin/utc";
import PropTypes from "prop-types";
dayjs.extend(utc);

export default function Watch({item, onDelete: handleDelete}) {

  const [time, setTime] = useState(new Date());

  const hours = parseInt(dayjs.utc(time).format('h')) + parseInt(item.timeZone);
  const minutes = dayjs(time).format('mm');
  const seconds = dayjs(time).format('ss');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000)

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const hourPos = `rotate(${(hours + 3) * 30}deg)`;
  const minPos = `rotate(${minutes * 6}deg)`;
  const secPos = `rotate(${seconds * 6}deg)`;

  return (
    <div className="clock" data-clock-id={item.id}>
      <div className="title">{item.title}</div>
      <div className="delete" onClick={() => handleDelete(item.id)}>X</div>
      <div className="hero-circle">
        <div className="hero-face">
          <div className="hand hour" style={{transform: hourPos}}></div>
          <div className="hand minute" style={{transform: minPos}}></div>
          <div className="hand second" style={{transform: secPos}}></div>
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
