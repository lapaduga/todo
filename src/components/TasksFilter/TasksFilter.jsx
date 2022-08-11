import './TasksFilter.scss'

function TasksFilter({ filter, onFilter }) {
  return (
    <ul className="filters">
      {filter.map((item) => (
        <li key={item.value}>
          <button className={item.clazz} onClick={() => onFilter(item.value)}>
            {item.value}
          </button>
        </li>
      ))}
    </ul>
  )
}

export default TasksFilter
