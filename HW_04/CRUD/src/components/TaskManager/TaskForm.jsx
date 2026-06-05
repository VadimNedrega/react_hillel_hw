import { useState } from 'react'
import { createTask } from '../../services/tasks'

function TaskForm({ setTasks }) {
  const [title, setTitle] = useState('')
  const [tags, setTags] = useState('')
  const [name, setName] = useState('')
  const [level, setLevel] = useState('junior')
  const [isDone, setIsDone] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newTask = {
      title,
      tags: tags.split(',').map(t => t.trim()),
      assignee: {
        name,
        level,
      },
      isDone,
    }

    const created = await createTask(newTask)

    setTasks(prev => [...prev, created])

    setTitle('')
    setTags('')
    setName('')
    setLevel('junior')
    setIsDone(false)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3>Create Task</h3>

      <input
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        placeholder="Tags (react, hooks)"
        value={tags}
        onChange={(e) => setTags(e.target.value)}
      />

      <input
        placeholder="Assignee name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={level}
        onChange={(e) => setLevel(e.target.value)}
      >
        <option value="junior">junior</option>
        <option value="middle">middle</option>
        <option value="senior">senior</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={isDone}
          onChange={(e) => setIsDone(e.target.checked)}
        />
        Done
      </label>

      <button type="submit">
        Add Task
      </button>
    </form>
  )
}

export default TaskForm