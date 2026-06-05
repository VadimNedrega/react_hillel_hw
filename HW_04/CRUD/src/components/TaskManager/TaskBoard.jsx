import { use } from 'react'
import { promiseTasks } from '../../services/tasks'
import { useState } from 'react'

import TaskForm from './TaskForm'
import TaskList from './TaskList'

function TaskBoard() {
  const initialTasks = use(promiseTasks)

  const [tasks, setTasks] = useState(initialTasks)

  return (
    <div>
      <h1>Task Manager</h1>

      <TaskForm setTasks={setTasks} />

      <TaskList
        tasks={tasks}
        setTasks={setTasks}
      />
    </div>
  )
}

export default TaskBoard