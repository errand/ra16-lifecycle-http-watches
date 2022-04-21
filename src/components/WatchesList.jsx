import PropTypes from "prop-types";
import Watch from "./Watch";

export default function WatchesList({list, onDelete: handleDelete}) {

  const listItems = list.map(item => <Watch key={item.id} item={item} onDelete={handleDelete}/>)

  return(
    <div className="watches">
      {listItems}
    </div>
  )
}
WatchesList.propTypes = {
  list: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
};
