import {useState} from "react";
import Form from "./Form";
import WatchesList from "./WatchesList";

export default function Watches() {

  const [watches, setWatches] = useState([])

  const handleAdd = watch => {
    setWatches(prevState => [...prevState, watch]);
  }

  const handleDelete = id => {
    setWatches(prevState => prevState.filter(o => o.id !== id));
  }

  return (
    <div className="wrapper" data-testid="test">
      <div className="wrapper--inner">
        <Form onAdd={handleAdd} />
        <WatchesList list={watches} onDelete={handleDelete} />
      </div>
    </div>
  );
}
