import {useState} from "react";
import PropTypes from "prop-types";

import Watch from "../models/Watch";

export default function Form({onAdd}) {

  const [form, setForm] = useState({
    title: '',
    timeZone: '',
  });

  const handleTitle = evt => {
    setForm(prevForm => ({...prevForm, title: evt.target.value}))
  }

  const handleTimeZone = evt => {
    setForm(prevForm => ({...prevForm, timeZone: evt.target.value}))
  }

  const handleSubmit = evt => {
    evt.preventDefault()
    const watch = new Watch(form.title, form.timeZone)
    onAdd(watch)
    setForm({
      title: '',
      timeZone: '',
    })
  }

  return(
    <form onSubmit={handleSubmit}>
      <div className="form-row">
        <div className="form-group">
          <label htmlFor="title">Название</label>
          <input type="text" id="title" name="title" value={form.title} onChange={handleTitle} />
        </div>
        <div className="form-group">
          <label htmlFor="timeZone">Временная зона</label>
          <input type="text" id="timeZone" name="timeZone" value={form.timeZone} onChange={handleTimeZone} />
        </div>
        <div className="form-group">
          <button type="submit">Добавить</button>
        </div>
      </div>
    </form>
  )
}

Form.propTypes = {
  onAdd: PropTypes.func.isRequired,
};
