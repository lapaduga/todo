import Task from '../Task/Task'
import './TaskList.scss'

function TaskList({
  data,
  onDeleted,
  onComplete,
  onEdit,
  onEnter,
  onChange,
  minutes,
  seconds,
  setFormTimeToZero
}) {
  return (
    <ul className="todo-list">
      {data.map((item) => (
        <Task
          key={item.id}
          props={item}
          onDeleted={() => onDeleted(item.id)}
          onComplete={() => onComplete(item.id)}
          onEdit={() => onEdit(item.id)}
          onEnter={onEnter}
          onChange={onChange}
          minutes={minutes}
          seconds={seconds}
          setFormTimeToZero={setFormTimeToZero}
        />
      ))}
    </ul>
  )
}

export default TaskList
