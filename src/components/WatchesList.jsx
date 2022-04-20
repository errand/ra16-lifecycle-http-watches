import PropTypes from "prop-types";
import dayjs from "dayjs";

export default function WatchesList({list, onDelete: handleDelete}) {

  const listItems = list.map(item =>
    <div className="clock">
      <div className="title">{item.title}</div>
      <div className="hero-circle" key={item.id}>
        <div className="hero-face">
          <div id="hour" className="hero-hour"></div>
          <div id="minute" className="hero-minute"></div>
          <div id="second" className="hero-second"></div>
        </div>
      </div>
    </div>
  )

  return(
    <div className="training">
      {listItems}
    </div>
  )
}
WatchesList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
