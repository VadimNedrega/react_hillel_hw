import { Suspense } from 'react'
import TaskBoard from './TaskBoard'
import ErrorBoundary from '../../ErrorBoundary'

function TaskManager() {
  return (
    <ErrorBoundary fallbackComponent={<h2>Something went wrong 😢</h2>}>
      <Suspense fallback={<h2>Loading tasks...</h2>}>
        <TaskBoard />
      </Suspense>
    </ErrorBoundary>
  )
}

export default TaskManager