import TasksFilter from "../TasksFilter/TasksFilter";
import "./Footer.scss";

function Footer({filter, onFilter, onClearCompleted, tasksLeft}) {
  return (
    <footer className="footer">
      <span className="todo-count">{tasksLeft} items left</span>
      <TasksFilter 
				filter={filter} 
				onFilter={onFilter}
			/>
      <button 
				className="clear-completed"
				onClick={onClearCompleted}
			>Clear completed</button>
    </footer>
  );
}

export default Footer;
