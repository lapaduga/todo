import './NewTaskForm.scss'

function NewTaskForm({ value, onChange, onEnter }) {
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
        <input className="new-todo-form__timer" placeholder="Min" autoFocus />
        <input className="new-todo-form__timer" placeholder="Sec" autoFocus />
      </form>
    </header>
  )
}

export default NewTaskForm
