import { useState } from 'react'

import NewTaskForm from '../NewTaskForm/NewTaskForm'
import TaskList from '../TaskList/TaskList'
import Footer from '../Footer/Footer'

import './App.scss'

function App() {
  const [tasks, setTasks] = useState([
    /*     {
      id: 1,
      state: 'completed',
      value: 'Task 1',
      timestamp: Date.now()
    },
    {
      id: 2,
      state: 'editing',
      value: 'Task 2',
      timestamp: Date.now()
    },
    {
      id: 3,
      state: '',
      value: 'Task 3',
      timestamp: Date.now()
    } */
  ])
  const [formValue, setFormValue] = useState('')
  const [formMinutes, setFormMinutes] = useState('')
  const [formSeconds, setFormSeconds] = useState('')
  const [counter, setCounter] = useState(4)
  const [filter, setFilter] = useState([
    { value: 'All', clazz: 'selected' },
    { value: 'Active', clazz: '' },
    { value: 'Completed', clazz: '' }
  ])

  const changeMinutes = (value) => {
    if (+value || value === '') {
      if (value.length <= 2) {
        if (+value > 59) {
          setFormMinutes(59)
        } else {
          setFormMinutes(value)
        }
      }
    }
  }

  const changeSeconds = (value) => {
    if (+value || value === '') {
      if (value.length <= 2) {
        if (+value > 59) {
          setFormSeconds(59)
        } else {
          setFormSeconds(value)
        }
      }
    }
  }

  const setFormTimeToZero = () => {
    setFormMinutes('')
    setFormSeconds('')
  }

  const tasksLeft = () => tasks.filter((item) => item.state === '').length

  const deleteTask = (id) =>
    setTasks(() => tasks.filter((item) => (id !== item.id ? true : false)))

  const completeTask = (id) => {
    const tempArr = [...tasks]
    tempArr.forEach((item) => {
      if (item.id === id) {
        item.state === 'completed'
          ? (item.state = '')
          : (item.state = 'completed')
      }
    })
    setTasks([...tempArr])
  }

  const editTask = (id) => {
    const tempArr = [...tasks]
    tempArr.forEach((item) => {
      if (item.id === id) {
        item.state = 'editing'
      }
    })
    setTasks([...tempArr])
  }

  const enterTask = (event, id) => {
    const tempArr = [...tasks]
    const task = tempArr.find((task) => task.id === id)
    if (event.charCode === 13) {
      tempArr.forEach((element) => {
        if (element.id === task.id) {
          element.state = ''
          element.value = task.value
        }
      })
      setTasks([...tempArr])
    }
  }

  const changeTask = (event, id) => {
    const tempArr = [...tasks]
    const task = tempArr.find((task) => task.id === id)
    task.value = event.target.value
    setTasks([...tempArr])
  }

  const changeFormValue = (event) => {
    const value = event.target.value
    setFormValue(value)
  }

  const createTask = (event) => {
    const tempArr = [...tasks]
    if (event.charCode === 13) {
      tempArr.push({
        id: counter,
        state: '',
        value: event.target.value,
        timestamp: Date.now()
      })
      setFormValue('')
      let tempCounter = counter
      tempCounter++
      setCounter(tempCounter)
    }
    setTasks([...tempArr])
  }

  const filtrate = (items, filter) => {
    let arr = []
    filter.forEach((item) => {
      if (item.clazz === 'selected') {
        if (item.value === 'All') {
          arr = items.filter((item) => item)
        }
        if (item.value === 'Active') {
          arr = items.filter((item) => item.state === '')
        }
        if (item.value === 'Completed') {
          arr = items.filter((item) => item.state === 'completed')
        }
      }
    })
    return arr
  }
  let visibleItems = filtrate(tasks, filter)

  const checkFilter = (value) => {
    const tempFilter = [...filter]
    tempFilter.forEach((item) => {
      if (item.value === value) {
        item.clazz = 'selected'
      } else {
        item.clazz = ''
      }
    })
    setFilter([...tempFilter])
  }

  const clearCompletedTasks = () =>
    setTasks(() => tasks.filter((item) => item.state !== 'completed'))

  return (
    <section className="todoapp">
      <NewTaskForm
        value={formValue}
        minutes={formMinutes}
        seconds={formSeconds}
        onChange={changeFormValue}
        onEnter={createTask}
        onMinutesChange={changeMinutes}
        onSecondsChange={changeSeconds}
      />
      <section className="main">
        <TaskList
          data={visibleItems}
          onEdit={editTask}
          onDeleted={deleteTask}
          onComplete={completeTask}
          onEnter={enterTask}
          onChange={changeTask}
          minutes={formMinutes}
          seconds={formSeconds}
          setFormTimeToZero={setFormTimeToZero}
        />
        <Footer
          filter={filter}
          onFilter={checkFilter}
          onClearCompleted={clearCompletedTasks}
          tasksLeft={tasksLeft()}
        />
      </section>
    </section>
  )
}

export default App
