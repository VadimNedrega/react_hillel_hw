import { useState, useEffect } from 'react'
import { listData } from '../../data/list'

function DeletionTimer({ setIsActive }) {
    const [list, setList] = useState(listData)
    const [isRunning, setIsRunning] = useState(false)

    const toggleRunning = () => {
        setIsRunning(prev => !prev)
    }

    useEffect(() => {
        if (!isRunning) return

        const id = setInterval(() => {
            setList(prev => prev.slice(0, -1))
        }, 1000)

        return () => {
            clearInterval(id)
        }
    }, [isRunning])

    useEffect(() => {
        if (list.length !== 0) return

        const id = setTimeout(() => {
            setIsActive(false)
        }, 3000)

        return () => {
            clearTimeout(id)
        }
    }, [list.length, setIsActive])

    useEffect(() => {
        console.log("🟢 mounted")

        return () => {
            console.log("🔴 destroyed")
        }
    }, [])

    useEffect(() => {
        if (list.length === 0) {
            setIsRunning(false);
        }
    }, [list.length]);

    return (
        <>
            <h2>Deletion Timer</h2>

            <button onClick={toggleRunning}>
                {isRunning ? 'Зупинити' : 'Запустити'}
            </button>

            <ul>
                {list.map(item => (
                    <li key={item}>{item}</li>
                ))}
            </ul>

            {list.length === 0 && (
                <p>
                    Всі задачі виконано, компонент закриється через 3с...
                </p>
            )}
        </>
    )
}


export default DeletionTimer