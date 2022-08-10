import './NewTaskForm.scss';

function NewTaskForm({value, onChange, onEnter}) {
  return (
    <header className="header">
      <h1>todos</h1>
      <input
				className="new-todo"
				placeholder="What needs to be done?"
				autoFocus
				value={value}
				onChange={(event) => onChange(event)}
				onKeyPress={(event) => onEnter(event)}
			/>
    </header>
  );
}

export default NewTaskForm;
