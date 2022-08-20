import './NewTaskForm.scss'

function NewTaskForm({
  value,
  onChange,
  onEnter,
  minutes,
  seconds,
  onMinutesChange,
  onSecondsChange
}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <form className="new-todo-form">
        <input
          className="new-todo"
          placeholder="Task"
          autoFocus
          value={value}
          onChange={(event) => onChange(event)}
          onKeyPress={(event) => onEnter(event)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Min"
          value={minutes}
          onChange={(event) => onMinutesChange(event.target.value)}
        />
        <input
          className="new-todo-form__timer"
          placeholder="Sec"
          value={seconds}
          onChange={(event) => onSecondsChange(event.target.value)}
        />
      </form>
    </header>
  )
}

export default NewTaskForm
