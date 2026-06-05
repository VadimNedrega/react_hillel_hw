import { useState } from 'react'
import { updateTask, deleteTask } from '../../services/tasks'

function TaskItem({ task, setTasks }) {
    const [isEditing, setIsEditing] = useState(false)

    const [title, setTitle] = useState(task.title)
    const [tags, setTags] = useState(task.tags.join(', '))
    const [name, setName] = useState(task.assignee.name)
    const [level, setLevel] = useState(task.assignee.level)
    const [isDone, setIsDone] = useState(task.isDone)

    const handleSave = async () => {
        const updatedTask = {
            ...task,
            title,
            tags: tags.split(',').map(t => t.trim()),
            assignee: {
                name,
                level,
            },
            isDone,
        }

        const result = await updateTask(task.id, updatedTask)

        setTasks(prev =>
            prev.map(t => t.id === result.id ? result : t)
        )

        setIsEditing(false)
    }

    const handleDelete = async () => {
        await deleteTask(task.id)

        setTasks(prev =>
            prev.filter(t => t.id !== task.id)
        )
    }

    if (isEditing) {
        return (
            <li>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                <input value={tags} onChange={(e) => setTags(e.target.value)} />
                <input value={name} onChange={(e) => setName(e.target.value)} />

                <select value={level} onChange={(e) => setLevel(e.target.value)}>
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

                <button onClick={handleSave}>Save</button>
                <button onClick={() => setIsEditing(false)}>Cancel</button>
            </li>
        )
    }

    return (
        <li>
            <h4>{task.title}</h4>
            <p>{task.tags.join(', ')}</p>
            <p>{task.assignee.name} ({task.assignee.level})</p>
            <p>{task.isDone ? 'Done' : 'In progress'}</p>

            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={handleDelete}>Delete</button>
        </li>
    )
}

export default TaskItem