import TaskItem from './TaskItem'

function TaskList({ tasks, setTasks }) {
  if (!tasks || tasks.length === 0) {
    return <p>No tasks found</p>
  }
  
  return (
    <ul>
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          setTasks={setTasks}
        />
      ))}
    </ul>
  )
}

export default TaskList