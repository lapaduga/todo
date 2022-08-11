import './Task.scss'
import PropTypes from 'prop-types'
import { formatDistanceToNow } from 'date-fns'

function Task({
  props,
  onDeleted,
  onComplete,
  onEdit,
  onEnter,
  onChange,
  addSuffix,
  includeSeconds
}) {
  return (
    <li data-id={props.id} className={props.state}>
      <div className="view">
        <input
          onChange={onComplete}
          className="toggle"
          type="checkbox"
          checked={props.state === 'completed' ? true : false}
        />
        <label>
          <span className="description">{props.value}</span>
          <span className="created">
            created{' '}
            {formatDistanceToNow(new Date(props.timestamp), {
              addSuffix: addSuffix,
              includeSeconds: includeSeconds
            })}
          </span>
        </label>
        <button onClick={onEdit} className="icon icon-edit"></button>
        <button onClick={onDeleted} className="icon icon-destroy"></button>
      </div>
      <input
        type="text"
        className="edit"
        value={props.value}
        onKeyPress={(event) => onEnter(event, props.id)}
        onChange={(event) => onChange(event, props.id)}
      />
    </li>
  )
}

Task.defaultProps = {
  addSuffix: true,
  includeSeconds: true
}

Task.propTypes = {
  addSuffix: PropTypes.bool,
  includeSeconds: PropTypes.bool
}

export default Task
