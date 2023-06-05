import React, { useState, createContext, useMemo } from 'react'
import { createRoot } from 'react-dom/client'
import { TaskType } from './ui/TaskCard/types'
import { TasksList } from './features/TasksList/TasksList'
import { ContextType } from './core/types'
import { FooterPanel } from './features/FooterPanel/FooterPanel'
import './core/core.scss'

export const AppContext: React.Context<ContextType> = createContext({
  tasks: [],
  addTask: null,
})

const App: React.FunctionComponent = () => {
  const [tasks, setTasks] = useState<TaskType[]>([])

  const addTask = (newTask: TaskType) => {
    console.log('AddTask')
    setTasks((state) => [...state, newTask])
  }

  const contextValue = useMemo(() => {
    return {
      tasks,
      addTask,
    }
  }, [tasks])

  return (
    <AppContext.Provider value={contextValue}>
      <TasksList />
      <FooterPanel />
    </AppContext.Provider>
  )
}

createRoot(document.getElementById('app')).render(<App />)
